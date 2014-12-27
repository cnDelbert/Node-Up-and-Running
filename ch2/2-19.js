var express = require('express')
var app = express()

app.listen(8000)

app.get('/', function(req, res) {
    var title = 'Chirpie',
        header = 'Welcome to Chirpie'

    res.render('index', {
        locals: {
            'title': title,
            'header': header,
            'tweets': tweets,
            stylesheets: ['/public/style.css']
        }
    })
})
