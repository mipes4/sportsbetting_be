"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "predictions",
      "fixtureId",
      { type: Sequelize.INTEGER, allowNull: false },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("predictions", "fixtureId", {});
  },
};
