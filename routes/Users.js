const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")

users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        username: req.body.username,
        password: req.body.password,
        temp_tag: req.body.temp_tag,
        created: today
    }
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (user) {
                res.json({
                    error: "User already exists"
                })
            } else {
                console.log("success!")
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.username + ' registered' })
                        })
                        .catch(err => {
                            res.send("error: " + err)
                        })
                })
            }
        })
        .catch(err => {
            res.send("error: " + err)
        })
})

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (user) {
                var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
                if (passwordIsValid) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: "User does not exist" })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

users.get("/all", function (req, res) {
    User.findAll().then(user => {
        res.json(user);
    });
});

users.get("/:username", function (req, res) {
    User.findOne({
        where: {
            username: req.params.username
        }
    }).then(user => {
        res.json(user);
    });
});

users.get("/id/:id", function (req, res) {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        res.json(user);
    });
});

users.put("/id/:id", function (req, res) {
    User.update(
        { temp_tag: req.body.temp_tag },
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




module.exports = users