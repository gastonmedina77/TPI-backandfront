//Importar mysql
//import mysql from 'mysql'
const mysql = require('mysql');

//Creo conexion
const conector = mysql.createConnection({
    host: 'sql.freedb.tech',
    user:'freedb_Nicolas',
    password:'7j?2H3D$5n7UJb5',
    database:'freedb_dbtpfinal'
})

const conectar = ()=>{
    conector.connect(err=>{
        if(err) 
        console.log('Conexion exitosa' err)
        else{
            console.log('Conexion exitosa')
        }
    })
}

conectar();
//const agregarProducto = (id, nombre, stock, precio)=>{
//    const sql = `INSERT INTO productos(id, nombre, stock, precio) VALUES (${id}, "${nombre}", ${stock}, ${precio})`
//    conector.query(sql, (err, result, field)=>{
//        if (err) throw err
//        console.log(result)
//    })
//}
//
//const mostrarProductos = () => {
//    const sql = 'SELECT id, nombre, stock, precio FROM productos'
//    conector.query(sql, function(err, result, field){
//        let resp = result
//        return resp
//    })
//}

//export {agregarProducto, mostrarProductos}