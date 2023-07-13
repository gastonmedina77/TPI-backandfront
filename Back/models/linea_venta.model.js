const {Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = require("./connection.models.js");

class LineaVentas extends Model{}

LineaVentas.init({
    ventaVentasId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    lineas_id:{
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey:true
    },

    productoProductoId:{
        type: DataTypes.INTEGER,
        allowNull:  false

    },

    cantidad:{
        type: DataTypes.INTEGER,
        allowNull:  false
    },
    
    precio_unitario:{
        type: DataTypes.DECIMAL(12,2),
        allowNull:  false
    },
  },
  {
    sequelize,
    underscored: false,
    timestamps: false,
    modelName: "linea_venta"
  },

);

//   async function testConnection(){
//     try{
//         await sequelize.authenticate();
//         console.log('conexión exitosa');
//     } catch(err){
//         console.error(err);
//     }
//  }
 
//  testConnection();
module.exports = LineaVentas