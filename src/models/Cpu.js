const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const schema = new mongoose.Schema({
    name: String,
    cores: String,
    speed: String,
    tdp: String,
    price: Number,
    rating: Number
}, { versionKey: false });

module.exports = mongoose.model('Cpu', schema);
