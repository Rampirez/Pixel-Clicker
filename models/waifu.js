module.exports = function(sequelize, DataTypes) {
    var Waifu = sequelize.define("Waifu", {
      name: DataTypes.STRING,
      highScore: DataTypes.INTEGER,
      waifu: DataTypes.STRING
    });
    return Waifu;
  };
  