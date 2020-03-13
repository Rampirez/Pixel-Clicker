const router = require("express").Router();
const scoreController = require("../../controllers/scoreControllers");

// Matches with "/api/scores"
router.route("/highscores")
  .get(scoreController.findAll)
  .post(scoreController.create);

// Matches with "/api/scores/:id"
router
  .route("/highscores/:id")
  .get(scoreController.findById)
  .put(scoreController.update)
  .delete(scoreController.remove);

module.exports = router;

// var db = require("../models");

// module.exports = function(app) {

//     app.get("/api/highscores", function(req, res) {
//         db.HighScore.findAll({
//           include: [db.Post]
//         }).then(function(dbHighScore) {
//           res.json(dbHighScore);
//         });
//       });

//       app.get("/api/highscores/:id", function(req, res) {
//         db.HighScore.findOne({
//           where: {
//             id: req.params.id
//           },
//           include: [db.Post]
//         }).then(function(dbHighScore) {
//           res.json(dbHighScore);
//         });
//       });

// }