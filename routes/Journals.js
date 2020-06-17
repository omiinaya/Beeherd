//dependencies
const express = require("express")
const cors = require("cors")
const journal = require("../models/Journal")

//vars
const journals = express.Router()
journals.use(cors())

//routes
//create journal
journals.post('/post', (req, res) => {
    const today = new Date()
    const journalData = {
        author_tag: req.body.author_tag,
        author_id: req.body.author_id,
        journal_content: req.body.journal_content,
        journal_streak: req.body.journal_streak,
        created: today
    }

    journals.create(journalData).then(data => {
        res.json({ status: data + ' uploaded' })
    })
        .catch(err => {
            res.send("error: " + err)
        })
})

journals.get("/all", function (req, res) {
    journal.findAll({}).then(function (results) {
        res.json(results);
    });
});

journals.get("/:id", function (req, res) {
    journal.findAll({
        where: {
            author_id: req.params.id
        }
    }).then(function (results) {
        res.json(results);
    });
});
//edit journal by id
journals.put("/id/:id", function (req, res) {
    journal.update({
        author_tag: req.body.author_tag,
        author_id: req.body.author_id,
        journal_content: req.body.journal_content,
        journal_streak: req.body.journal_streak,
        created: today
    },
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

module.exports = journals