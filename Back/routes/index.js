const express = require('express');
const router = express.Router();
const {productosController, comprasController, ventasController, informesController} = require('../controllers');

//--------------------------PRODUCTOS---------------------------------------------
router.get('/', productosController.listarProductos); //listar
//router.get('/:producto_id', productosController.obtenerProducto); //listar
router.post('/', productosController.crear); // Agregar un producto
router.put('/:producto_id', productosController.actualizar); //Editar un producto
router.delete('/:producto_id', productosController.eliminar); // Eliminar un producto


//--------------------------COMPRAS----------------------------------------------
router.get('/compras', comprasController.listar);
router.post('/guardarcompra', comprasController.guardarCompra);
router.delete('/eliminacompra/:compras_id', comprasController.eliminar);


//--------------------------VENTAS----------------------------------------------
router.get('/ventas', ventasController.listar);
router.get('/todasVentas', ventasController.listarTodasVentasCompletas);
router.post('/guardarventa', ventasController.guardarVenta);
router.delete('/eliminaventa/:ventas_id', ventasController.eliminar);


//--------------------------INFORMES---------------------------------------------
router.post('/informeventas', informesController.ventasPorMes)
router.post('/informecompras', informesController.comprasPorMes)

module.exports = router;
