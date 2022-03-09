const mongoose = require('mongoose');
const { Schema } = mongoose

const productSchema = new Schema({
    name: String,
    price: Number,
    discount: Number,
    rate: Number,
    details: String
})

module.exports = mongoose.model('Product', productSchema)