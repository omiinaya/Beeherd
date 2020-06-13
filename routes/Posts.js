const express = require("express")
const posts = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")

const Post = require("../models/Post")

posts.use(cors())

//send post to database
posts.post('/post', (req, res) => {
    const today = new Date()
    const postData = {
        author_id: req.body.author_id,
        author_tag: req.body.author_tag,
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        created: today
    }

    Post.create(postData).then(post => {
        res.json({ status: post.content + ' uploaded' })
    })
    .catch(err => {
        res.send("error: " + err)
    })
})

//get posts from database
posts.get("/all", function (req, res) {
    Post.findAll({}).then(function (results) {
        res.json(results);
    });
});

//find post by post id
posts.get("/:id", function (req, res) {
    Post.findAll({
        where: {
            id: req.params.id
        }
    }).then(function (results) {
        res.json(results);
    });
});

module.exports = posts