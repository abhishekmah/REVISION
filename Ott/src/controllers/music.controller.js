const express = require('express');
const router = express.Router();


const Music = require('../models/music.model')
const authorize = require('../middlewares/authorize')
const authenticate = require('../middlewares/authenticate')

router.get("/premium", authenticate, authorize(["premium"]), async (req, res) => {
    const musics = await Music.find().lean().exec();
    return res.status(201).json({ musics })

})
router.get("/guest", authenticate, authorize(["guest"]), async (req, res) => {
    const music = await Music.find({ availableFor: "guest" }).lean().exec();
    return res.status(201).json({ music })

})
router.post("", async (req, res) => {
    const music = await Music.create(req.body);
    return res.status(200).json({ music })
})
module.exports = router;