const mongoose = require("mongoose");

const seriesEpisodeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    episodeNo: { type: String, required: true },
    series: { type: mongoose.Types.ObjectId, required: true, ref: "series" },
    availableFor: { type: String, required: true }

})
module.exports = mongoose.model("SeriesEpisode", seriesEpisodeSchema)