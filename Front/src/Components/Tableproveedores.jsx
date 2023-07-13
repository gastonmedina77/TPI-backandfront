import '../css/table.scss'
import { FiTrash,FiEye,FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2'

const Tableproveedores = ({setMenu}) => {
  const Modalinfo=()=>{
    Swal.fire({
      title: '<strong>Detalle del Proveedor <u>#</u></strong>',
      icon: 'info',
      html:
        '<p align="left"><b>Nombre Comercial: </b>, Empresa 1 </br></br> ' +
        '<b>CUIT: </b>, 234356432 </br></br>' +
        '<b>Razón social: </b>, razon empresa 1 </br></br>' +
        '<b>Pais: </b>, Argentina </br></br>' +
        '<b>Provee: </b>,bienes - servicios</br></br> ' +
        '<b>Tipo empresa: </b>, Grande</br></br> '+ 
        '<b>Rama: </b>, fabricante - distribuidor</br></br> ' +
        '<b>Domicilio legal: </b>, AV siempre viva 736</br></br> ' +
        '<b>Telefono de domicilio: </b>, 3435435676</br></br> ' +
        '<b>Nombre de contacto: </b>, Encargado 1</br></br> ' +
        '<b>Puesto: </b>, Jefe de pedidos</br></br> ' +
        '<b>Email de contacto: </b>, contacto@gmail.com</br></br> ' +
        '<b>Email de empresa: </b>, empresa@gmail.com</br></br></p> ' 
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

  const Modaldelete=()=>{
      Swal.fire({
    title: '¿Esta seguro de Eliminar el Proveedor?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Sí, bórralo!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminar!',
        'Su archivo ha sido eliminado.',
        'éxito'
      )
    }
  })
  }

  const handleEdit=(e)=>{
    setMenu(e)
  }

  return (
    <table>
    <thead>
      <tr>
        <th>Empresa</th>
        <th>Teléfono</th>
        <th>Dirección</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
       
        <td>Empresa1</td>
        <td>36957447</td>
        <td>Av. Siempre viva </td>
        <td>
        <div className="buttonAction">
        <span
                onClick={Modalinfo}
                ><FiEye/> </span>
                <span
                onClick={()=>{handleEdit('addProveedor')}}
                ><FiEdit/> </span>
                <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
          </div>
        </td>
      
      </tr>
      <tr>
       
        <td>Empresa2</td>
        <td>36957447</td>
        <td>Av. Siempre viva </td>
        <td>
        <div className="buttonAction">
        <span
                onClick={Modalinfo}
                ><FiEye/> </span>
                <span
                onClick={()=>{handleEdit('addProveedor')}}
                ><FiEdit/> </span>
                <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
          </div>
        </td>
      
      </tr>
      <tr>
       
        <td>Empresa3</td>
        <td>36957447</td>
        <td>Av. Siempre viva </td>
        <td>
        <div className="buttonAction">
        <span
                onClick={Modalinfo}
                ><FiEye/> </span>
                <span
                onClick={()=>{handleEdit('addProveedor')}}
                ><FiEdit/> </span>
                <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
          </div>
        </td>
      
      </tr>
      <tr>
       
        <td>Empresa4</td>
        <td>36957447</td>
        <td>Av. Siempre viva </td>
        <td>
        <div className="buttonAction">
        <span
                onClick={Modalinfo}
                ><FiEye/> </span>
                <span
                onClick={()=>{handleEdit('addProveedor')}}
                ><FiEdit/> </span>
                <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
          </div>
        </td>
      
      </tr>
      <tr>
       
        <td>Empresa5</td>
        <td>36957447</td>
        <td>Av. Siempre viva </td>
        <td>
        <div className="buttonAction">
        <span
                onClick={Modalinfo}
                ><FiEye/> </span>
                <span
                onClick={()=>{handleEdit('addProveedor')}}
                ><FiEdit/> </span>
                <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
          </div>
        </td>
      
      </tr>
      
    </tbody>
  </table>
  )
}

export default Tableproveedores