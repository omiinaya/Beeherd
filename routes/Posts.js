//dependencies
const express = require("express")
const cors = require("cors")
const Post = require("../models/Post")

//vars
const posts = express.Router()
posts.use(cors())

//routes
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

//find all posts
posts.get("/all", function (req, res) {
    Post.findAll({}).then(function (results) {
        res.json(results);
    });
});

//find post by id 
posts.get("/:id", function (req, res) {
    Post.findAll({
        where: {
            id: req.params.id
        }
    }).then(function (results) {
        res.json(results);
    });
});

//find post by creator id
posts.get("/user/:id", function (req, res) {
    Post.findAll({
        where: {
            author_id: req.params.id
        }
    }).then(function (results) {
        res.json(results);
    });
});

//update post by id
posts.put("/:id", function (req, res) {
    Post.update(
        { post_content: req.body.post_content },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(function (response) {
        res.json(response)
    })
})

module.exports = posts