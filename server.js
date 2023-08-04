var express = require('express'); //used for routing
var app = express();
var http = require('http').Server(app); //used to provide http functionality

app.use(express.urlencoded({ extended: true }));
app.use(express.json()) ;
app.use(express.static(__dirname + '/www')); 

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/index.html');
    });

app.post('/api/login', function (req, res) {
    let users = [{'email':'john@com.au','password':'123'},{'email':'john@com.au','password':'123'},{'email':'john@com.au','password':'123'}]
    if (!req.body){
        return res.sendStatus(400)
    }
    console.log(req.body);
    var user1 = {};
    user1.email = req.body.email;
    user1.password = req.body.password;
    user1.valid = false;
    for (let i=0; i<users.length; i++){
        if (req.body.email == users[i].email && req.body.password == users[i].password){
            user1.valid = true;
        }
    }
    res.send(user1);

  });
    


// app.get('/returnlogin', function (req, res) {
//     const email = req.query.email;
//     const password = req.query.password;
//     res.sendFile(__dirname + '/www/returnlogin.html');

//     });

app.get('/account', function (req, res) {
    res.sendFile(__dirname + '/www/account.html');
    });

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + " port: " + port);
    });


