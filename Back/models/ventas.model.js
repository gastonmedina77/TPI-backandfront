const {Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = require("./connection.models.js");

 
class Ventas extends Model {}
Ventas.init({
        ventas_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fecha:{
            type: DataTypes.DATE,
            allowNull: false,  
        },
        cliente:{
            type: DataTypes.STRING,   
        }
    },
    {
        sequelize,
        underscored: false,
        timestamps: false,
        modelName: "ventas"
    }
);

module.exports = Ventas;

