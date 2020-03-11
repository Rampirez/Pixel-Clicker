// module.exports = function(sequelize, DataTypes) {
//     var HighScore = sequelize.define("HighScore", {
//       userName: DataTypes.STRING,
//       highScore: DataTypes.INTEGER
//     });
//     return HighScore;
//   };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const highScoreSchema = new Schema({
  userName: { type: String, required: true },
  highScore: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const HighScore = mongoose.model("HighScore", highScoreSchema);

module.exports = HighScore;