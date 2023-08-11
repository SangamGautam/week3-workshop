var express = require('express');
var app = express();
var http = require('http').Server(app);
const path = require('path');  // Ensure you have required the 'path' module
var bodyParser = require('body-parser');

// Middleware to parse POST data
app.use(bodyParser.json());  // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));  // for parsing application/x-www-form-urlencoded

// Serving static files
app.use(express.static(__dirname + '/www'));

// Import and apply routes from homeroute.js
require('./routes/homeroute.js').route(app, path);

// Endpoint to check user's credentials
const users = [
    { email: "email1@com.au", password: "123" },
    { email: "email2@com.au", password: "456" },
    { email: "email3@com.au", password: "789" }
];

app.post('/check-credentials', function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + " port:" + port);
});
