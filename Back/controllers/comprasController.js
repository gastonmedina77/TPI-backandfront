const {Compras, LineaCompras, Productos} = require('../models');
const sequelize = require('sequelize');
const controller = {};


controller.listar =  async (req, res) => {
    try{
        const com = await Compras.findAll();
        res.json(com)
    } catch (error){
        res.json({message: error.message})
    }
};


controller.guardarCompra = async (req, res) => {
    const datos = req.body;
    // try{
    //     const product = await Productos.findByPk(data.prod_id);
    //     if (product == null){
    //         error()
    //     }
    // }catch(error) {
    // return res.status(404).json(error.message)
    // }
    await Compras.sync()
    await LineaCompras.sync()
    
    const crearCompra = await Compras.create({
        proveedor: datos[0].proveedor,
        fecha: datos[0].fecha
    });

    datos.shift()
    datos.map(async(data) => (
        await LineaCompras.create({
            compraComprasId: crearCompra.compras_id,
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
                stock: parseInt(product.stock) + parseInt(data.cantidad),
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


controller.eliminar = async (req, res) => {
    try {
        await Compras.destroy({
                where: { compras_id: req.params.compras_id}
        })
        res.json()
    } catch (error) {
        res.json({message: error.message})
    }
};



module.exports = controller;

 