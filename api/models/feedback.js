const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    Date_time: Date,
    Receiptno: Number,
    Customer: String,
    Contacts: Number,
    Rating: Number,
    Feedback: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);