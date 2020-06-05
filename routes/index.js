var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.post('getGrains/', function (req, res) {
  res.send('hello world', obj)
})


var obj = require("./grains.json");
console.log(obj);