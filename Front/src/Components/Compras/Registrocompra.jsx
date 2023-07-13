import { FiCheckSquare } from "react-icons/fi";
import Search from "../Search";
import Paginacion from "../Paginacion";
import Tablecompra from "./Tablecompra";
import { BrowserRouter, Route } from "react-router-dom";

const Registrocompra = ({setSubmenu}) => {
  return (
    <div className="sectionTable">
      <div className="viewTable">
        <div className="headTable">
          <h4> <FiCheckSquare/> Compras Registradas</h4>
          {/* <button 
            className='addClient'
            onClick={()=>setMenuproduccion('addMercaderia')}
          >Registrar Producto</button> */}
        </div>
        
      <div className="bodyTable">
        {/* <div className="contentSearch">
          <Search/>
        </div> */}
        
        <Tablecompra setSubmenu={setSubmenu}/>
        
      </div>
    </div>
    
   </div>
  )
}

export default Registrocompra