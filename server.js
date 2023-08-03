var express = require('express'); //used for routing
var app = express();
var http = require('http').Server(app); //used to provide http functionality

app.use(express.urlencoded({ extended: true })); 

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/index.html');
    });

app.post('/', function (req, res) {
    // const email = req.body.email;
    // const password = req.body.password;
    // res.redirect('/returnlogin?email={email}&password={password}');
  });
    


app.get('/returnlogin', function (req, res) {
    // const email = req.query.email;
    // const password = req.query.password;
    // res.sendFile(__dirname + '/www/returnlogin.html');

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


