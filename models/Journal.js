const Sequelize = require("sequelize")
const db = require("../database/db")

var Journals = db.sequelize.define(
    'journal',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        author_tag: {
            type: Sequelize.STRING
        },
        author_id: {
            type: Sequelize.INTEGER
        },
        journal_content: {
            type: Sequelize.TEXT
        },
        journal_streak: {
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

Journals.sync()

module.exports = Journals