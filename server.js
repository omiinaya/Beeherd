//requirements
var express = require("express")
var cors = require("cors")
var path = require('path');
var bodyParser = require("body-parser")
var favicon = require('serve-favicon');

var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(favicon(__dirname + '/client/public/favicon.ico'));

var Users = require('./routes/Users')
var Posts = require('./routes/Posts')
var Replies = require('./routes/Replies')
var Avatars = require('./routes/Avatars')
var Journals = require('./routes/Journals')

app.use('/users/', Users)
app.use('/posts/', Posts)
app.use('/replies/', Replies)
app.use('/avatars/', Avatars)
app.use('/journals/', Journals)

app.use(express.static('public'))


// Exprees will serve up production assets
app.use(express.static('client/build'));

// Express serve up index.html file if it doesn't recognize route
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


//listener
app.listen(port, () => {
    console.log("Server is running on port: " + port + "!")
})