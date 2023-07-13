import '../css/table.scss'
import { FiTrash,FiEye,FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2'

const Table = ({setMenu}) => {


  const Modalinfo=()=>{
    Swal.fire({
      title: '<strong>Detalle Cliente <u>#</u></strong>',
      icon: 'info',
      html:
        '<p align="left"><b>Nombre y Apellido: </b>, Ruiz Diaz Javier A. </br></br> ' +
        '<b>Fecha de Nacimiento: </b>, 11 Marzo 1993 </br></br>' +
        '<b>DNI: </b>, 36957447 </br></br>' +
        '<b>Celular: </b>, 3704264610 </br></br>' +
        '<b>Email: </b>, javier17utn@gmail.com</br></br> ' +
        '<b>Provincia: </b>, Chaco 3500</br></br> '+ 
        '<b>Dirección: </b>, Juan b Justo 760</br></br></p> ' 
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
    title: '¿Esta seguro de Eliminar Clientes?',
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
   <>
    <table>
      
       
 
      <tbody>
      <tr>
          <th>Apellido y Nombre</th>
          <th>DNI</th>
          <th>Estado</th>
          <th>Acción</th>
        </tr>
        <tr>
         
          <td>Ruiz Diaz Javier</td>
          <td>36957447</td>
          <td> <span className='activoTable'>Activo</span> </td>
          <td>
          <div className="buttonAction">
                <span
                onClick={Modalinfo}
                ><FiEye/> </span>
                <span
                onClick={()=>{handleEdit('addClient')}}
                ><FiEdit/> </span>
                <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
            </div>
          </td>
        
        </tr>
        <tr>
         
        <td>Ruiz Diaz Javier</td>
          <td>36957447</td>
          <td> <span className='activoTable'>Activo</span> </td>
          <td>
          <div className="buttonAction">
          <span
                onClick={Modalinfo}
                ><FiEye/> </span>
                <span
                onClick={()=>{handleEdit('addClient')}}
                ><FiEdit/> </span>
                <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
            </div>
          </td>
         
        </tr>
        <tr>
         
        <td>Ruiz Diaz Javier</td>
          <td>36957447</td>
          <td> <span className='activoTable'>Activo</span> </td>
          <td>
          <div className="buttonAction">
          <span
                onClick={Modalinfo}
                ><FiEye/> </span>
                <span
                onClick={()=>{handleEdit('addClient')}}
                ><FiEdit/> </span>
                 <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
            </div>
          </td>
         
        </tr>
        <tr>
         
        <td>Ruiz Diaz Javier</td>
          <td>36957447</td>
          <td> <span className='activoTable'>Activo</span> </td>
          <td>
          <div className="buttonAction">
          <span
                onClick={Modalinfo}
                ><FiEye/> </span>
                <span
                onClick={()=>{handleEdit('addClient')}}
                ><FiEdit/> </span>
                <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
            </div>
          </td>
         
        </tr>
        <tr>
         
        <td>Ruiz Diaz Javier</td>
          <td>36957447</td>
          <td> <span className='activoTable'>Activo</span> </td>
          <td>
            <div className="buttonAction">
            <span
                onClick={Modalinfo}
                ><FiEye/> </span>
                <span
                onClick={()=>{handleEdit('addClient')}}
                ><FiEdit/> </span>
                <span
                onClick={Modaldelete}
                ><FiTrash/> </span>
            </div>
          </td>
    
        </tr>
      </tbody>
    </table>
   </>
  )
}

export default Table