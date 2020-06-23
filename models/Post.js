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
        author_id: {
            type: Sequelize.INTEGER
        },
        author_tag: {
            type: Sequelize.STRING
        },
        post_title: {
            type: Sequelize.STRING
        },
        post_content: {
            type: Sequelize.STRING
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