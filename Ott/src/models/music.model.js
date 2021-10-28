const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    title: { type: String, required: true },
    singers: { type: String, required: true },
    musicDirector: { type: String, required: true },
    genre: { type: String, required: true }
})

module.exports = mongoose.model("Music", musicSchema)