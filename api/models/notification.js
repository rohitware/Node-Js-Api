const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    subject: String,
    message: String
});


module.exports = mongoose.model('Notification', notificationSchema);