const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discountSchema = new Schema({
    Name: String,
    Value: Number,
    Type: String,
    Restricted_access:Boolean
});

module.exports = mongoose.model('Discount', discountSchema);