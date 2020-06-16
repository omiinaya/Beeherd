//dependencies
const express = require("express")
const cors = require("cors")
const Avatar = require("../models/Avatar")

//vars
const avatars = express.Router()
avatars.use(cors())

//routes
//

module.exports = avatars