//dependencies
const express = require("express")
const cors = require("cors")
const Reply = require("../models/Reply")

//vars
const replies = express.Router()
replies.use(cors())

//routes
//create a reply route
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

//get all replies
replies.get("/all", function (req, res) {
    Reply.findAll({}).then(function (results) {
        res.json(results);
    });
});

//get repplies by id
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