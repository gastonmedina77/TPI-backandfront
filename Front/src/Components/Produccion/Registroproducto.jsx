import Paginacion from "../Paginacion"
import Search from "../Search"
import { FiCheckSquare } from "react-icons/fi";
import Tableproducto from "./Tableproducto";

const Registroproducto = ({setMenuproduccion}) => {
  return (
    <div className="sectionTable">
      <div className="viewTable">
        <div className="headTable">
          <h4> <FiCheckSquare/> Registro Producción</h4>
          <button 
            className='addClient'
            onClick={()=>setMenuproduccion('addProducto')}
            >Registrar Producto</button>
        </div>
           
        <div className="bodyTable">
          <div className="contentSearch">
            <Search/>
          </div>
        
          <Tableproducto setMenuproduccion={setMenuproduccion} />
                
          <Paginacion/>
        </div>
      </div>
    </div>
  )
}

export default Registroproducto