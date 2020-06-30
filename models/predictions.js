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
      predictions.belongsTo(models.user);
      predictions.belongsTo(models.score);
    }
  }
  prediction.init(
    {
      predGoalsHomeTeam: DataTypes.INTEGER,
      predGoalsAwayTeam: DataTypes.INTEGER,
      fixtureId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "predictions",
    }
  );
  return predictions;
};
