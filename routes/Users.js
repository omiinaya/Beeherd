const express = require("express")
const app = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")
app.use(cors())

process.env.SECRET_KEY = 'secret'

app.post('/register', (req, res)=> {
    const today = new Date()
    const userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        created: today
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if (!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({status: user.email + 'registered'})
                })
                .catch(err => {
                    res.send("error: " + err)
                    })
                })
        } else {
            res.json({
                error: "User already exists"
            })
        }
    })
    .catch(err => {
        res.send("error: " + err)
    })
})

module.exports = app