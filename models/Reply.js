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
        author_id: {
            type: Sequelize.INTEGER,
        },
        post_id: {
            type: Sequelize.INTEGER,
        },
        reply_content: {
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