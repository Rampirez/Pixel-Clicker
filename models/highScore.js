module.exports = function(sequelize, DataTypes) {
    var HighScore = sequelize.define("HighScore", {
      userName: DataTypes.STRING,
      highScore: DataTypes.INTEGER
    });
    return HighScore;
  };