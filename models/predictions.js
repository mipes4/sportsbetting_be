"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class predictions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      prediction.belongsTo(models.user);
      prediction.belongsTo(models.score);
    }
  }
  predictions.init(
    {
      predGoalsHomeTeam: DataTypes.INTEGER,
      predGoalsAwayTeam: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "predictions",
    }
  );
  return predictions;
};
