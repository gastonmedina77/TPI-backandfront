const {Productos, LineaVentas, Compras} = require('../models');
const controller = {};

controller.listarProductos =  async (req, res) => {
    try{
        const prod = await Productos.findAll();
        res.json(prod)  
    } catch (error){
        res.json({message: error.message})
    }
};

controller.obtenerProducto =  async (req, res) => {
    try{
        const prod = Productos.findOne({ 
            where: { producto_id: req.params.producto_id } 
        });
        res.json(prod)
    } catch (error){
        res.json({message: error.message})
    }
};

controller.crear = async (req, res) => {
    try {
        await Productos.create(req.body);
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }

};

controller.editar = async (req, res) => {
    const id = req.params.producto_id;
    const prod = await Productos.findOne({ where: { producto_id: id } });
    res.render('actualizar_producto',{
        data: prod
    });
};

controller.actualizar = async(req, res) => {
    
    try {
        await Productos.update(req.body,
            {
                where:{
                    producto_id: req.params.producto_id,
                },
            },
        );
    } catch (error) {
        res.json({message: error.message})
    }
    
};
 

controller.eliminar = async (req, res) => {
    
    try {
        await Productos.destroy({
                where: { producto_id: req.params.producto_id }
        })
        res.json()
    } catch (error) {
        res.json({message: error.message})
    }
    
};


module.exports = controller;

