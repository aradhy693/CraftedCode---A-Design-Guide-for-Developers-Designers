const mongoose = require('mongoose');

const url = "mongodb+srv://aradhy693:thakur@cluster0.rr5ep.mongodb.net/codecraft?retryWrites=true&w=majority&appName=Cluster0"

//connect to the database

//asynchronous-return a promise
mongoose.connect(url)
    .then((result) => {
        console.log('connected to database');

    }).catch((err) => {
        console.log(err);

    });

module.exports = mongoose;