const {Ventas, LineaVentas, Productos} = require('../models');
const sequelize = require('sequelize');
const controller = {};

controller.listar =  async (req, res) => {
    try{
        const ven = await Ventas.findAll();
        res.json(ven)
        //res.render('Ventas',{
        //    data: prod
        //});
    } catch (error){
        res.json({message: error.message})
    }
};

controller.listarTodasVentasCompletas =  async (req, res) => {
    const prod = await LineaVentas.findAll({ 
        raw: true,
        where:{
                $and: sequelize.literal(
                    `exists (
                        select 1 from ventas
                            where ventaVentasId = ventas_id)`)

    },
    order:[['ventaVentasId', 'ASC']],
    });
    console.table(prod)
    res.render('Ventas',{
        data: prod
    });
};


controller.nuevaVenta = (req, res) => {
    res.render('nueva_venta')
}


controller.guardarVenta = async (req, res) => {
    const datos = req.body;
    //try{
    //    const product = await Productos.findByPk(data.productoProductoId);
    //    if (product == null){
    //        error()
    //    }
    //}catch(error) {
    //return res.status(401).json(error.message)
    //}
    await Ventas.sync()
    await LineaVentas.sync()
    
    const crearVenta = await Ventas.create({
        cliente: datos[0].cliente,
        fecha: datos[0].fecha
    });

    datos.shift()
    datos.map(async(data) => (
        await LineaVentas.create({
            ventaVentasId: crearVenta.ventas_id,
            productoProductoId: data.productoProductoId,
            cantidad: data.cantidad,
            precio_unitario: data.precio_unitario
        }),

        product = await Productos.findOne({
            where:{
                producto_id: data.productoProductoId
            }
        }),

        await Productos.update(
            {
                stock: parseInt(product.stock) - parseInt(data.cantidad)
            },
            {
                where:{
                    producto_id: data.productoProductoId,
                },
            },
        )
    ))
    res.json()
};

controller.editar = async (req, res) => {
    const id = req.params.id;
    const prod = await Ventas.findOne({ where: { ventas_id: id } });
    res.render('Actualizar_ventas',{
        data: prod
    });
};

controller.actualizar = async(req, res) => {
    const id = req.params.id;
    const actVent = req.body;
    const actualizaVent = await Ventas.update(
        {
            vent_cliente: actVent.cliente,
            vent_fecha: actVent.fecha,
        },
        {
            where:{
                ventas_id: id,
            },
        },
    );
    res.redirect('/ventas');
};
 

controller.eliminar = async (req, res) => {
    try {
        await Ventas.destroy({
                where: { ventas_id: req.params.ventas_id}
        })
        res.json()
    } catch (error) {
        res.json({message: error.message})
    }
};


module.exports = controller;