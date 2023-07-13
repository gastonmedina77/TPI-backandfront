import { FiPieChart} from "react-icons/fi";
import EstadistiasVentas from "./EstadistiasVentas";
import EstadisticasPedidos from './EstadisticasPedidos'

const Sectionestadisticaventa = () => {
  return (
    <div className="sectionTable">
    <div className="viewTable">
      <div className="headTable">
        <h4> <FiPieChart/> Estadisticas Graficas</h4>
      </div>
      <div className="contentEstadisticaUser">
        <div className="edadusuarios">
            <h4>Cantidades de Ventas Mensuales</h4>
                <EstadistiasVentas/>
        </div>
        <div className="edadusuarios">
            <h4>Cantidades de Pedidos Mensuales</h4>
            <EstadisticasPedidos/>
        </div>
        
      </div>
   </div>
   </div>
  )
}

export default Sectionestadisticaventa