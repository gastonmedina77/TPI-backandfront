const {Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = require("./connection.models.js");

class Compras extends Model {}
Compras.init({
        compras_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fecha:{
            type: DataTypes.DATE,
            allowNull: false,  
        },
        proveedor:{
            type: DataTypes.STRING,   
        },
    },
    {
        sequelize,
        underscored: false,
        timestamps: false,
        modelName: "compras"
    }
);

module.exports = Compras;
