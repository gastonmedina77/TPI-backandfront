import { FiPieChart} from "react-icons/fi";
import '../css/sectionestadisticasuser.scss'
//import EstadisticasUserGrafic from "./Estadisticas/EstadisticasUserGrafic";
//import EstadisticasProveedor from "./Estadisticas/EstadisticasProveedor";


const SectionestadisticaUsuarios = () => {

    
  return (
    <div className="sectionTable">
    <div className="viewTable">
      <div className="headTable">
        <h4> <FiPieChart/> Estadisticas Graficas</h4>
      </div>
      <div className="contentEstadisticaUser">
        <div className="edadusuarios">
            <h4>Porcentaje de Edades de usuarios registrados</h4>
            <EstadisticasUserGrafic/>
        </div>
        <div className="edadusuarios">
            <h4>Porcentaje de Tipos de Empresas</h4>
            <EstadisticasProveedor/>
        </div>
        
      </div>
   </div>
   </div>
  )
}

export default SectionestadisticaUsuarios