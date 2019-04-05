const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const schema = new mongoose.Schema({
    name: String,
    author: String,
    description: String,
    user: ObjectId,
    creation_date: Date,
    parts: [Object],
    price: Number
},{ versionKey: false });

module.exports = mongoose.model('Build', schema);
