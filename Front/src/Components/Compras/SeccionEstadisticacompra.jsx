import { FiPieChart} from "react-icons/fi";
import Estadisticacompra from "./Estadisticacompra";

const SeccionEstadisticacompra = () => {
  return (
    <div className="sectionTable">
    <div className="viewTable">
      <div className="headTable">
        <h4> <FiPieChart/> Estadisticas Graficas</h4>
      </div>
      <div className="contentEstadisticaUser">
        <div className="edadusuarios">
            <h4>Compras realizadas por proveedores</h4>
                <Estadisticacompra/>
        </div>
        
      </div>
   </div>
   </div>
  )
}

export default SeccionEstadisticacompra