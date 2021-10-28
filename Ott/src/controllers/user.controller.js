
const User = require('../models/user.model')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router();
const newToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY)
}


const signup = async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create(req.body)

        console.log(user, "hi")
        const token = newToken(user);

        console.log(token)
        return res.status(201).json({ token: token, user });
    }
    catch (err) {
        return res.status(500).json({ status: "failed", message: "something went wrong" })
    }
}
const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email }).exec();

        if (!user) return res.status(400).json({ status: "failed", message: "Please try with a different email" })

        const match = user.checkPassword(req.body.password);

        if (!match) return res.status(400).json({ status: "failed", message: "Please try with a different email" })

        const token = newToken(user)
        return res.status(201).json({ token: token })
    } catch (err) {
        return res.status(500).json({ status: "failed", message: "something went wrong" })
    }
}
router.post("/login", login)
router.post("/signup", signup)


module.exports = router;