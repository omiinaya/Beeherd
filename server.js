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
app.use(bodyParser.urlencoded({extended: false}))
app.use(favicon(__dirname + '/client/public/favicon.ico'));

var Users = require('./routes/Users')
var Posts = require('./routes/Posts')
var Replies = require('./routes/Replies')
var Avatars = require('./routes/Avatars')

app.use('/users/', Users)
app.use('/posts/', Posts)
app.use('/replies/', Replies)
app.use('/avatars/', Avatars)

app.use(express.static('public'))

//listener
app.listen(port, () => {
    console.log("Server is running on port: "+port+"!")
})