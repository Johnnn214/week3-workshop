
var express = require('express'); //used for routing
var formidable = require('formidable');
var app = express();
var http = require('http').Server(app); //used to provide http functionality

app.use(express.static(__dirname + '/www'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/index.html');
    });

app.get('/account', function (req, res) {
    res.sendFile(__dirname + '/www/account.html');
    });

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + " port: " + port);
    });


    
// app.get('/test', function (req, res) {
//     res.sendFile(__dirname + '/www/test.html');
//     });



