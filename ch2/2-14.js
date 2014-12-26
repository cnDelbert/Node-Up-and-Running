var express = require('express')

// This is different from the example in the book
// as the module has been changed.
var app = express()

app.get('/', function(req, res) {
  res.send('Welcome to Express')
})

app.listen(8000)
