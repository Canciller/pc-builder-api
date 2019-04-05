const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const schema = new mongoose.Schema({
    name: String,
    socket: String,
    form_factor: String,
    ram_slots: String,
    max_ram: String,
    price: Number,
    rating: Number
}, { versionKey: false });

module.exports = mongoose.model('Motherboard', schema);
