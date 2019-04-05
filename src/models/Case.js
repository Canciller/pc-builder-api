const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const schema = new mongoose.Schema({
    name: String,
    type: String,
    power_supply: String,
    price: Number,
    rating: Number
},{ versionKey: false });

module.exports = mongoose.model('Case', schema);
