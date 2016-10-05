"use strict";

const express = require('express'),
jsendie = require('../lib/index'),
app = express(),
PORT = 3000;

app.use(jsendie());

app.get('/success', function (req, res, next){
    res.success('Hello, Success!');
});

app.get('/fail', function (req, res, next){
    res.fail({"title" : "A title is required"});
});

app.get('/error', function (req, res, next){
    res.error('Unable to communicate with database', 500, {"connString" : "Connection sttring is required"});
});

app.listen(PORT, function(){
    console.log('Jsendie listen to port: ' + PORT)
});

module.exports = app;