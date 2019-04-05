const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const schema = new mongoose.Schema({
    name: String,
    chipset: String,
    memory: String,
    core_clock: String,
    price: Number,
    rating: Number
}, { versionKey: false });

module.exports = mongoose.model('Gpu', schema);
