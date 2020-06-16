const express = require("express")
const replies = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")

const Reply = require("../models/Reply")

replies.use(cors())

replies.post('/reply', (req, res) => {
    const today = new Date()
    const replyData = {
        author_id: req.body.author_id,
        author_tag: req.body.author_tag,
        post_id: req.body.post_id,
        reply_content: req.body.reply_content,
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

replies.get("/:id", function (req, res) {
    Reply.findAll({
        where: {
            post_id: req.params.id
        }
    }).then(function (results) {
        res.json(results);
    });
});

module.exports = replies