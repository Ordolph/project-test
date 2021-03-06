var db = require("../models");

module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
        res.render("index");
    });
    app.get("/testGame", function (req, res) {
        res.render("testGame");
    });
    app.get("*", function (req, res) {
        res.render("404");
    });
    app.post("/" function (req, req) {
        db.Player.create(req.body).then(result =>
            res.json({ id: result.insertId }));
    });
};