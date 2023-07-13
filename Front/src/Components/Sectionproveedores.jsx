import {FiCheckSquare} from "react-icons/fi";
import Search from '../Components/Search';
import Paginacion from '../Components/Paginacion';
import Tableproveedores from "./Tableproveedores";

const Sectionproveedores = ({setMenu}) => {

  const handleAdd=(e)=>{
    setMenu(e)
  }

  return (
    <div className="sectionTable">
    <div className="viewTable">
      <div className="headTable">
        <h4> <FiCheckSquare/> Registro Proveedores</h4>
        <button className='addClient'
        onClick={()=>handleAdd('addProveedor')}
        >Agregar Proveedor</button>
      </div>
      
      <div className="bodyTable">
        <div className="contentSearch">
          <Search/>
          
        </div>
        
          <Tableproveedores setMenu={setMenu}/>
         <Paginacion/>
      </div>
    </div>
    <div className="resumen">
      <span>Total de Usuarios</span>
      <div className="countClient">
        <h2>5</h2>
      </div>
    </div>
   </div>
  )
}

export default Sectionproveedores