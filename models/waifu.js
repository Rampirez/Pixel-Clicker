// module.exports = function(sequelize, DataTypes) {
//     var Waifu = sequelize.define("Waifu", {
//       name: DataTypes.STRING,
//       waifu: DataTypes.STRING
//     });
//     return Waifu;
//   };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const waifuSchema = new Schema({
  name: { type: String, required: true },
  waifu: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Waifu = mongoose.model("HighScore", waifuSchema);

module.exports = Waifu;
  