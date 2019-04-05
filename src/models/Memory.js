const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const schema = new mongoose.Schema({
    name: String,
    type: String,
    speed: String,
    modules: String,
    size: String,
    price: Number,
    rating: Number
}, { versionKey: false });

module.exports = mongoose.model('Memory', schema);
