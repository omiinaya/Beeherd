//dependencies
const express = require("express")
const cors = require("cors")
const avatar = require("../models/Avatar")

//vars
const avatars = express.Router()
avatars.use(cors())

//routes
//create avatar
avatars.post('/create', (req, res) => {
    const today = new Date()
    const postData = {
        owner_id: req.body.owner_id,
        skin: req.body.skin,
        hair: req.body.hair,
        eyes: req.body.eye,
        outfit: req.body.outfit,
        background: req.body.background,
        created: today
    }

    avatar.create(postData).then(data => {
        res.json({ status: data + ' uploaded' })
    })
    .catch(err => {
        res.send("error: " + err)
    })
})

module.exports = avatars