const express = require("express")
const posts = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")

const Post = require("../models/Post")

posts.use(cors())

posts.post('/post', (req, res) => {
    const today = new Date()
    const postData = {
        content: req.body.password,
        created: today
    }

    Post.create(postData).then(post => {
        res.json({ status: post.content + ' uploaded' })
    })
    .catch(err => {
        res.send("error: " + err)
    })
})

module.exports = posts