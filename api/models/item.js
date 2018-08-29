const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    category: Array,
    itemAvailable: Boolean,
    sold: String,
    price: Number,
    cost: Number,
    sku: Number,
    barcode: String
});

module.exports = mongoose.model('Item', itemSchema);