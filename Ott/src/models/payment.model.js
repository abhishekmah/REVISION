const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    validity: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, required: true, ref: "user" }
});

module.exports = mongoose.model("Payment", paymentSchema)