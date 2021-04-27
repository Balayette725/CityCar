var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const mongoose = require('mongoose');

var app = express();
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/Clients', {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connecté à Mongoose")
});



const clientSchema = new Schema({
    nom :String,
    service : String
});

const Client = mongoose.model('Client' , clientSchema);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

app.get('/', (req, res) => {
    res.send([{code: 69}]);
});

app.post('/addClient' , jsonParser , function(req,res){
   console.log(req.body);
   let client = new Client({nom : req.body.nom, service : req.body.service});
   client.save();
});

app.listen(4201, '127.0.0.1', function(){
    console.log('le serveur écoute bien le port 4201');
});


