const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const mongoose = require('mongoose');


const port = process.env.PORT || 8080;   //set our port


// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);