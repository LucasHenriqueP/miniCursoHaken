const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// const uri = "";

// MongoClient.connect(uri, (err, client) => {
//   // ... start the server
// });

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, function() {
    console.log('Este é seu primeiro servidor?');
});