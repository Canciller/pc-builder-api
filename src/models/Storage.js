const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const schema = new mongoose.Schema({
    name: String,
    series: String,
    form: String,
    type: String,
    capacity: String,
    cache: String,
    price: Number,
    rating: Number
}, { versionKey: false });

module.exports = mongoose.model('Storage', schema);
