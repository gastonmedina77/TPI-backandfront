import { FiCheckSquare } from "react-icons/fi";
import Search from "../Search";
import Paginacion from "../Paginacion";
import Tablemercaderia from "./Tablemercaderia";
import { BrowserRouter, Route } from "react-router-dom";

const Registromercaderia = ({setSubmenu}) => {
  return (
    <div className="sectionTable">
      <div className="viewTable">
        <div className="headTable">
          <h4> <FiCheckSquare/> Productos Registrados</h4>
          {/* <button 
            className='addClient'
            onClick={()=>setMenuproduccion('addMercaderia')}
          >Registrar Producto</button> */}
        </div>
        
      <div className="bodyTable">
        {/* <div className="contentSearch">
          <Search/>
        </div> */}
        
        <Tablemercaderia setSubmenu={setSubmenu}/>
        
      </div>
    </div>
    
   </div>
  )
}

export default Registromercaderia