
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


// respond with "hello world" when a GET request is made to the homepage
app.post('getGrains/', function (req, res) {
    res.send('hello world', obj)
  })
  
  
  var obj = require("./grains.json");
  console.log(obj);