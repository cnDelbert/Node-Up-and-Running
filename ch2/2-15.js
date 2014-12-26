var express = require('express')

// The middleware has been deprecated.
// npm install body-parser
var bodyParser = require('body-parser')

// This is different from the example in the book
// as the module has been changed.
// npm install express
var app = express()

// app.listen() here has no question.
app.listen(8000)

var tweets = []

app.get('/', function(req, res) {
    res.send('Welcome to Node Twitter')
})

// Modify the `express.bodyParser()` to `bodyParser()`
// Explicitly set extended for bodyParser.urlencoded() since
// the default value is going to change in the next major
// version of body-parser
// http://stackoverflow.com/a/25471936/3531285
app.post('/send', bodyParser.urlencoded({
    extended: true
}), function(req, res) {
    if (req.body && req.body.tweet) {
        tweets.push(req.body.tweet)
        res.send({
            status: "ok",
            message: "tweet received"
        })
    } else {
        // if there's no tweet
        res.send({
            status: "nok",
            message: "tweet's not received"
        })
    }
})

app.get('/tweets', function(req, res) {
    res.send(tweets)
})
