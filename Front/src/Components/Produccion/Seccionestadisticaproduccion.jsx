import { FiPieChart} from "react-icons/fi";
import Estadisticaproduccion from "./Estadisticaproduccion";

const Seccionestadisticaproduccion = () => {
  return (
    <div className="sectionTable">
    <div className="viewTable">
      <div className="headTable">
        <h4> <FiPieChart/> Estadisticas Graficas</h4>
      </div>
      <div className="contentEstadisticaUser">
        <div className="edadusuarios">
            <h4>Cantidad de producción por mes</h4>
               <Estadisticaproduccion/>
        </div>
        
      </div>
   </div>
   </div>
  )
}

export default Seccionestadisticaproduccion