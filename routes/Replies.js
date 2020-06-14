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

module.exports = replies