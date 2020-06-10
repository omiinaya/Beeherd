var Post = require("../models/Post");
var User = require("../models/User");

module.exports = function (app) {

    app.get("/posts/all", function (req, res) {
        Post.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    /*

    need to implement passport

    app.get("/posts/all/test", function (req, res) {
        Post.findAll({
            where: {
                creator_id: req.user.user_id
            }
        }).then(function (results) {
            res.json(results);
        });
    });
    */
}