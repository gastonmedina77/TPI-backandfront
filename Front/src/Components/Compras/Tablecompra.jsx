import { FiTrash,FiEye,FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState, useEffect } from "react";

const URI = 'http://localhost:3000/'

const Tablecompra = ({setMenucompras}) => {

  //funcion para mostrar todos los productos
  const [compras, setCompras] = useState([])
  useEffect(()=>{
    getCompras()
  }, [])
 
  
  const getCompras = async () =>{
    const res = await axios.get(URI+'compras')
    setCompras(res.data)
  }

  //funcion para eliminar una venta
  const deleteCompra = async (id) =>{
    Swal.fire({
      title: '¿Esta seguro de eliminar la compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) 
        borraCompra(id)
    })

    const borraCompra = async (id) =>{
      const URICOM = URI + 'eliminacompra/'
      await axios.delete(`${URICOM}${id}`)
      getCompras()
      Swal.fire(
        'Eliminar!',
        'Se ha eliminado la compra.',
        'éxito'
      )
    }
  }

    
 //Estilos para alinear las columnas en tabla de ventas
 const styleRowProveedor = {
  "width": "100px" ,
  "align": "center" ,

}
const styleRowId = {
  "align": "center" ,
  "width": "10px" ,
}
const styleRow3 = {
  "align": "center" ,
  "width": "260px" ,
}

const styleRowAccion = {
  "align": "center" ,
  "width": "40px" ,
}  

    
  return (
    <table>
      <thead>
        <tr>
          <th style={styleRowId}>Id</th>
          <th style={styleRow3}>Fecha</th>
          <th style={styleRowProveedor}>Proveedor</th>
          <th style={styleRowAccion}>Acción</th>
        </tr>
      </thead>
      <tbody>
        {compras.map((compra) => (
          <tr key={compra.compras_id}>
            <td style={styleRowId}>{compra.compras_id}</td>
            <td style={styleRow3}>{compra.fecha}</td>
            <td style={styleRowProveedor}>{compra.proveedor}</td>
            <td style={styleRowId}>
              <div className="buttonAction">
                {/* <span onClick={Modalinfo}>
                  <FiEye/>{" "}
                </span> */}
                <span onClick={()=>deleteCompra(compra.compras_id)}>
                    <FiTrash />{" "}
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Tablecompra