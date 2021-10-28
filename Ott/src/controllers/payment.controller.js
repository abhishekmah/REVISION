const express = require('express');
const router = express.Router();
const User = require('../models/user.model')

const Payment = require('../models/payment.model')
const { body, validationResult } = require('express-validator')
const authorize = require('../middlewares/authorize')
const authenticate = require('../middlewares/authenticate')
router.get("", async (req, res) => {
    const payments = await Payment.find().lean().exac();
    return res.status(201).json({ payments })

})
router.post("/:id", authenticate, async (req, res) => {
    try {
        const payment = await Payment.create(req.body);
        console.log(req.params.id)

        const user = await User.findByIdAndUpdate({ _id: req.params.id }, { subscriptionType: "premium" }, { new: true })

        return res.status(200).json({ payment, user })

    } catch (err) {
        return res.status(200).json({ err })

    }
})
function userPatch(id) {

}
module.exports = router;