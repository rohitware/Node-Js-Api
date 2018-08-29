const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employeename: String,
    email:String,
    phonenumber: Number,
    role: String
});

module.exports = mongoose.model('Employee', employeeSchema);
