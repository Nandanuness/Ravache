const { Model, DataTypes } = require('sequelize');

class Endereco extends Model{};

Endereco.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    cep: {
        type: DataTypes.STRING(8),
        allowNull: false
    },

    logadouro:{
        type: DataTypes.STRING(255),
        allowNull: false
    },

    numero: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },

    complemento: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    bairro: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
        
    cidade: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
        
    estado: {
        type: DataTypes.STRING(2),
        allowNull: false
    },

    municipioibge: {
        type: DataTypes.STRING(100)
    }

});

module.exports = Endereco;