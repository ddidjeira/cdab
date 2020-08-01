const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const hostname = '127.0.0.1';
const user = require('./routes/User');

app.get('/test', (req, res) => {
    res.status(200).send("Test Fab")
});

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Définition des CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// db connexion
const url = "mongodb+srv://Fabrice:lqfuokPOycyg9zSQ@abloni-mc3d6.mongodb.net/Cdab?retryWrites=true&w=majority";
// const url = "mongodb://localhost:27017/rchan";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

app.use('/users',user);

app.listen(port,() => console.log(`Listen on http://${hostname}:${port}/`));
