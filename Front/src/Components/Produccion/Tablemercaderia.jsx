import { FiTrash, FiEye, FiEdit } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from 'axios';
import { useState, useEffect } from "react";

import { trimLeft } from "@amcharts/amcharts5/.internal/core/util/Utils";


import { Link, useParams, useNavigate } from "react-router-dom";

const URI = 'http://localhost:3000/'

const ShowProducts = ({setMenuproduccion}) => {
  const [nombre, setNombre] = useState('')
  const [stock, setStock] = useState('')
  const [precio, setPrecio] = useState('')
  const [categoria, setCategoria] = useState('')
  const [fecha, setFecha] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    getProductById()
  }, [])

  const getProductById = async() =>{
    const res = await axios.get(URI+id)
    setNombre(res.data.producto_nombre)
    setStock(res.data.stock)
    setPrecio(res.data.precio)
    setCategoria(res.data.categoria)
    setFecha(res.data.fecha_actualizacion)
  }

  //funcion para mostrar todos los productos
  const [products, setProduct] = useState([])
  useEffect(()=>{
    getProducts()
  }, [])
 
  
  const getProducts = async () =>{
    const res = await axios.get(URI)
    setProduct(res.data)
  }

  //funcion para eliminar un producto
  const deleteProduct = async (id) =>{
    Swal.fire({
      title: '¿Esta seguro de eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) 
        borraProducto(id)
    })

    const borraProducto = async (id) =>{
      await axios.delete(`${URI}${id}`)
      getProducts()
      Swal.fire(
        'Eliminar!',
        'Se ha eliminado el producto.',
        'éxito'
      )
    }
  }

  //Estilos para las columnas de la tabla
  const styleRow = {
    "width": "60px" ,
    "align": "center" ,

  }
  const styleRow2 = {
    "width": "80px" ,
    "align": "center" ,

  }
  const styleRowId = {
    "align": "center" ,
    "width": "10px" ,
  }

  const styleRowId2 = {
    "align": "center" ,
    "width": "10px" ,
  }

  const styleRowAccion = {
    "align": "center" ,
    "width": "50px" ,
  }
  const handleAdd = (e) => {
    setSubMenu(e);
  };

  return (
    <div>
      <table>
        <thead>
          <tr >
            <th style={styleRowId2}>Id</th>
            <th style={styleRow2}>Nombre</th>
            <th >Stock</th>
            <th >Precio</th>
            <th >Categoria</th>
            <th >Acción</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr  key={product.producto_id}>
              <td style={styleRowId} >{product.producto_id}</td>
              <td style={styleRow} >{product.producto_nombre}</td>
              <td style={styleRowId} >{product.stock}</td>
              <td style={styleRow} >{product.precio} </td>
              <td style={styleRow} >{product.categoria} </td>
              <td style={styleRowAccion} >
                <div className="buttonAction">
                  <span onClick={()=>deleteProduct(product.producto_id)}>
                    <FiTrash />{" "}
                  </span>
                </div>
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ShowProducts 

//  const Modaldelete = () => {
//    Swal.fire({
//      title: "¿Esta seguro de eliminar este registro de compra de insumo?",
//      icon: "warning",
//      showCancelButton: true,
//      confirmButtonColor: "#3085d6",
//      cancelButtonColor: "#d33",
//      confirmButtonText: "¡Sí, bórralo!",
//    }).then((result) => {
//      if (result.isConfirmed) {
//        Swal.fire("Eliminar!", "Su archivo ha sido eliminado.", "éxito");
//      }
//    });
//  };
//
//  const handleEdit = (e) => {
//    setMenuproduccion(e)
//  };


/* const Tablemercaderia = ({setMenuproduccion}) => {
  const Modalinfo = (ev) => {
    ev.preventDefault();
    const id = ev.target.id.value
    console.log(id);
    Swal.fire({
      title: "<strong>Detalle del Insumo <u>#</u></strong>",
      icon: "info",
      html:
      
        <h1>{elemento.id}</h1> +
        '<p align="left"><b>N° de Factura: </b>, 0035 </br></br> ' +
        "<b>Insumo: </b>, Insumo 1 </br></br>" +
        "<b>Fecha de Compra: </b>, 01-08-23 </br></br>" +
        "<b>Peso: </b>, 10kg </br></br>" +
        "<b>Cantidad: </b>, 5 </br></br>" +
        "<b>Precio Unitario: </b>, $500 </br></br>" +
        "<b>Proveedor: </b>, Proveedor 1 </br></br></p>" ,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Genial!",
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: "Cancelar",
      cancelButtonAriaLabel: "Thumbs down",
    });
  };} */