var db = require("../models");

module.exports = function(app) {

    app.get("/api/highscores", function(req, res) {
        db.HighScore.findAll({
          include: [db.Post]
        }).then(function(dbHighScore) {
          res.json(dbHighScore);
        });
      });

      app.get("/api/highscores/:id", function(req, res) {
        db.HighScore.findOne({
          where: {
            id: req.params.id
          },
          include: [db.Post]
        }).then(function(dbHighScore) {
          res.json(dbHighScore);
        });
      });

}