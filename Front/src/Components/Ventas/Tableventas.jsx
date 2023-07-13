import { FiEye, FiTrash } from "react-icons/fi";
import Swal from 'sweetalert2'
import axios from 'axios';
import { useState, useEffect } from "react";

const URI = 'http://localhost:3000/'

const Tableventas = () => {

  const handleLink=()=>{
    return location.replace('/reciplas/ventas')
  }

  //funcion para mostrar todos los productos
  const [ventas, setVentas] = useState([])
  useEffect(()=>{
    getVentas()
  }, [])
 
  
  const getVentas = async () =>{
    const res = await axios.get(URI+'ventas')
    setVentas(res.data)
  }

  //funcion para eliminar una venta
  const deleteVenta = async (id) =>{
    Swal.fire({
      title: '¿Esta seguro de eliminar la venta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) 
        borraVenta(id)
    })

    const borraVenta = async (id) =>{
      const URIVEN = URI + 'eliminaventa/'
      await axios.delete(`${URIVEN}${id}`)
      getVentas()
      Swal.fire(
        'Eliminar!',
        'Se ha eliminado la venta.',
        'éxito'
      )
    }
  }

  const Modalinfo=()=>{
      Swal.fire({
        title: '<strong>Detalle de la Venta <u>#</u></strong>',
        icon: 'info',
        html:
          '<p align="left"><b>Id Venta: </b> 0032 </br></br> ' +
          '<b>Fecha: </b> 22-06-23 </br></br> ' +
          '<b>Cliente: </b> Aldo </br></br>' +
                      
          '<table> <thead> <tr> <th>Linea</th> <th>Producto</th> <th>Cantidad</th> <th>Precio Unitario</th> <th>Subtotal</th> </tr> </thead> <tbody> ' +
          '<tr> <td>1</td> <td>Alfajor</td> <td> 2 </td> <td> 150 </td> <td> 300 </td></tr>  ' +
          '<tr> <td>2</td> <td>Turron</td> <td> 4 </td> <td> 100 </td> <td> 400 </td></tr>  ' +
          '<tr> <td>3</td> <td>Galletitas</td> <td> 1 </td> <td> 500 </td> <td> 500 </td></tr> </tbody> </table> ' +
          '</br> ' +
          '<p align="right"><b>Total: </b>$1200 </br></br>'
        ,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          'Genial!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          'Cancelar',
        cancelButtonAriaLabel: 'Thumbs down'
      })
  }

  //Estilos para alinear las columnas en tabla de ventas
  const styleRow = {
    "width": "100px" ,
    "align": "center" ,

  }
  const styleRow2 = {
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
          <th style={styleRow2}>Id</th>
          <th style={styleRow3}>Fecha</th>
          <th style={styleRow}>Cliente</th>
          <th style={styleRowAccion}>Acción</th>
          {/* <th>Detalle</th> */}
        </tr>
      </thead>
      <tbody>
        {ventas.map((venta) => (
        <tr key={venta.ventas_id}>
          <td style={styleRow2}>{venta.ventas_id}</td>
          <td style={styleRow3}>{venta.fecha}</td>
          <td style={styleRow}>{venta.cliente}</td>
          <td style={styleRow2}>
            <div className="buttonAction">
                {/* <span onClick={Modalinfo}>
                  <FiEye/>{" "}
                </span> */}
              <span onClick={()=>deleteVenta(venta.ventas_id)}>
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

export default Tableventas