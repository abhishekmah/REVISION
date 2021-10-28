const express = require('express');
const router = express.Router();

const SeriesEpisode = require('../models/seriesepisode.model')

router.get("", async (req, res) => {
    const seriesEpisodes = await SeriesEpisode.find().lean().exac();
    return res.status(201).json({ seriesEpisodes })

})
router.post("", async (req, res) => {
    const seriesEpisode = await SeriesEpisode.create(req.body);
    return res.status(200).json({ seriesEpisode })
})

module.exports = router;