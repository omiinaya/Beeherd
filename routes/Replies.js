const express = require("express")
const replies = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")

const Reply = require("../models/Reply")

replies.use(cors())

replies.post('/reply', (req, res) => {
    const today = new Date()
    const replyData = {
        content: req.body.content,
        created: today
    }

    Reply.create(replyData).then(post => {
        res.json({ status: post.content + ' uploaded' })
    })
    .catch(err => {
        res.send("error: " + err)
    })
})

//get posts from database
replies.get("/all", function (req, res) {
    Reply.findAll({}).then(function (results) {
        res.json(results);
    });
});

module.exports = replies