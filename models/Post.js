const Sequelize = require("sequelize")
const db = require("../database/db")

var Posts = db.sequelize.define(
    'post',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        creator_id: {
            type: Sequelize.INTEGER,
        },
        content: {
            type: Sequelize.TEXT
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)

Posts.sync()

module.exports = Posts