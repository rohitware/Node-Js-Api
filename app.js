const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


const itemRoutes = require('./api/routes/items');
const categoryRoutes = require('./api/routes/categories');
const modifierRoutes = require('./api/routes/modifiers');
const discountRoutes = require('./api/routes/discounts');
const employeeRoutes = require('./api/routes/employees');
const customerRouter = require('./api/routes/customers');
const notificationRouter = require('./api/routes/notifications');
const feedbackRouter = require('./api/routes/feedbacks');


mongoose.connect('mongodb://localhost:27017/dashboard');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});

//

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(function (req, res, next) {

   
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



// Routes which should handle requests
app.use('/api/items', itemRoutes);
app.use('/api/categories',categoryRoutes);
app.use('/api/modifiers',modifierRoutes);
app.use('/api/discounts', discountRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/customers', customerRouter);
app.use('/api/notifications', notificationRouter);
app.use('/api/feedbacks', feedbackRouter)


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;