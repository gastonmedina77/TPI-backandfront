const {Productos, Ventas, Compras} = require('../models');
const { Op } = require("sequelize");
const controller = {};

controller.ventasPorMes =  async (req, res) => {
    const data = req.body;
    fech_i = data.fecha_i
    fech_f = data.fecha_f
    // console.log(data.fecha_f)

    const { count, rows } = await Ventas.findAndCountAll({
        where: {
            fecha: {
                [Op.and]: {
                    [Op.and]: {
                        [Op.lte]: fech_f,
                        [Op.gte]: fech_i,
                    },
            },

          },
        // offset: 10,
        // limit: 2
        
        }
    });
    res.json(rows)

}
    
controller.listar =  async (req, res) => {
    const prod = await Ventas.findAll({ where: { ventas_id: 10 } });
    res.render('Ventas',{
        data: prod
    });
    
};

controller.comprasPorMes =  async (req, res) => {
    const data = req.body;
    fech_i = data.fecha_i
    fech_f = data.fecha_f

    const { count, rows } = await Compras.findAndCountAll({
        where: {
            fecha: {
                [Op.and]: {
                    [Op.and]: {
                        [Op.lte]: fech_f,
                        [Op.gte]: fech_i,
                    },
            },

          },
        // offset: 10,
        // limit: 2
        
        }
    });
    res.json(rows)
}

module.exports = controller;   









