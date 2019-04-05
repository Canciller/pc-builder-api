const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const schema = new mongoose.Schema({
    name: String,
    fan_rpm: String,
    price: Number,
    rating: Number
},{ versionKey: false });

module.exports = mongoose.model('CpuCooler', schema);
