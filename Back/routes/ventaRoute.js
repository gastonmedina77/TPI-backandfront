const express = require('express');
const router_ventas = require('express').Router();
const ventasController = require('../controllers/ventasController');


router_ventas.get('/ventas', (req, res) => {
    res.render('VentasEmi')
});
// router.get('/', (req,res)=>{res.render("ProductosEmi")});

module.exports = router_ventas;