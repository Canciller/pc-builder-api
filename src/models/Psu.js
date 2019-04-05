const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const schema = new mongoose.Schema({
    name: String,
    series: String,
    form: String,
    watts: String,
    efficiency: String,
    modular: String,
    price: Number,
    rating: Number
}, { versionKey: false });

module.exports = mongoose.model('Psu', schema);
