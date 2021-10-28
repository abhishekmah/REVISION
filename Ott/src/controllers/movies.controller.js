const express = require('express');
const router = express.Router();


const Movie = require('../models/movies.model')
const authorize = require('../middlewares/authorize')
const authenticate = require('../middlewares/authenticate')
router.get("/premium", authenticate, authorize(["premium"]), async (req, res) => {
    const movies = await Movie.find().lean().exec();
    return res.status(201).json({ movies })

})
router.get("/guest", authenticate, authorize(["guest"]), async (req, res) => {
    const movies = await Movie.find({ availableFor: "guest" }).lean().exec();
    return res.status(201).json({ movies })

})
router.post("", async (req, res) => {
    const movie = await Movie.create(req.body);
    return res.status(200).json({ movie })
})
module.exports = router;