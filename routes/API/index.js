const router = require("express").Router();
const scoreRoutes = require("./highScoreAPI-routes");

// Book routes
router.use("/highscores", scoreRoutes);

module.exports = router;