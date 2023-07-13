
const {Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = require("./connection.models.js");

class Productos extends Model {}
Productos.init({
        producto_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        producto_nombre:{
            type: DataTypes.STRING,
            allowNull: false,  
        },
        stock:{
            type: DataTypes.INTEGER,
            allowNull: false,    
        },
        precio:{
            type: DataTypes.FLOAT(10, 2),
            allowNull: false, 
        },
        categoria:{
            type: DataTypes.STRING,
        },
        fecha_actualizacion:{
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: "productos"
    }
);

module.exports = Productos;

