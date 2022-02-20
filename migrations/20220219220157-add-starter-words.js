'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Word','word',{ type : Sequelize.DataTypes.STRING });
    await queryInterface.addColumn('Word','is_verb',{ type : Sequelize.DataTypes.BOOLEAN });
    await queryInterface.addColumn('Word','is_noun',{ type : Sequelize.DataTypes.BOOLEAN });
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Word', 'word');
    await queryInterface.removeColumn('Word', 'is_verb');
    await queryInterface.removeColumn('Word', 'is_noun');
  }
};
