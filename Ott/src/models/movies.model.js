
const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    releaseDate: { type: String, required: true },
    director: { type: String, required: true },
    genre: { type: String, required: true },
    actors: { type: String, required: true },
    description: { type: String, required: true },
    plot: { type: String, required: false },
    availableFor: { type: String, required: true }
})

module.exports = mongoose.model("Movie", moviesSchema);
