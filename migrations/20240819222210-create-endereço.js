'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('enderecos', {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    Cep: {
        type: Sequelize.STRING,
        allowNull: false
    },

    Logadouro:{
        type: Sequelize.STRING,
        allowNull: false
    },

    Numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    Complemento: {
        type: Sequelize.STRING,
        allowNull: true
    },

    Bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
        
    Cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
        
    Estado: {
        type: Sequelize.STRING,
        allowNull: false
    },

    Municipioibge: {
        type: Sequelize.STRING
    }
  })
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('enderecos');

  }
};
