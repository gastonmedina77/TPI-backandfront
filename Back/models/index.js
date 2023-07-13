const Compras = require('./compras.model.js');
const LineaVentas = require('./linea_venta.model.js');
const LineaCompras = require('./linea_compra.model.js');
const Ventas = require('./ventas.model.js');
const Productos = require('./productos.model.js');
// const ProductosEmi = require('./productosEmi.model.js');


//CLAVES FORANEAS

// Relacion Productos con LineaVenta
Productos.hasMany(LineaVentas,{
    foreingKey: 'productoProductoId'
});

LineaVentas.belongsTo(Productos,{
    foreingKey: 'productoProductoId'
});

// Relaciom Productos con LineaCompras
Productos.hasMany(LineaCompras,{
    foreingKey: 'productoProductoId'
});

LineaCompras.belongsTo(Productos,{
    foreingKey: 'productoProductoId'
});


// Relaciom Ventas con LineaVentas
Ventas.hasMany(LineaVentas,{
    foreingKey: 'ventaVentasId'
});

LineaVentas.belongsTo(Ventas,{ 
    foreingKey: 'ventaVentasId'
});


// Relaciom Compras con LineaCompras
Compras.hasMany(LineaCompras,{
    foreingKey: 'compraComprasId'
});

LineaCompras.belongsTo(Compras,{ 
    foreingKey: 'compraComprasId'
});

module.exports = {
    Productos,
    Ventas,
    Compras,
    LineaVentas,
    LineaCompras,
}