const Sequelize = require("sequelize")
const db = require("../database/db")

var Replies = db.sequelize.define(
    'reply',
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
        votes: {
            type: Sequelize.INTEGER
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

Replies.sync()

module.exports = Replies