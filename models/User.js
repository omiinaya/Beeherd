const Sequelize = require("sequelize")
const db = require("../database/db")

var Users = db.sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING
        },
        temp_tag: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        test: { 
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

Users.sync()

module.exports = Users