var express = require('express');
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 8080;

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + "/app"));
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);