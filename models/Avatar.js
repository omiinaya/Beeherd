const Sequelize = require("sequelize")
const db = require("../database/db")

var Avatars = db.sequelize.define(
    'avatar',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        owner_id: {
            type: Sequelize.STRING
        },
        skin: {
            type: Sequelize.STRING
        },
        hair: {
            type: Sequelize.STRING
        },
        eyes: {
            type: Sequelize.STRING
        },
        outfit: {
            type: Sequelize.STRING
        },
        background: {
            type: Sequelize.STRING
        },
        emotion: {
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

Avatars.sync()

module.exports = Avatars