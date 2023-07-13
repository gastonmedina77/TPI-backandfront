import { FiCheckSquare } from "react-icons/fi";
import Search from "../Search";
import Paginacion from "../Paginacion";
import Tablepedidos from './Tablepedidos'


const Registropedidos = ({setSubmenu}) => {


    const handleCliente = () => {

      return location.replace('/reciplas/dashboard/usuarios')
    };
  return (
    <div className="sectionTable">
      <div className="viewTable">
        <div className="headTable">
          <h4> <FiCheckSquare/> Nueva Venta</h4>
          
        </div>

        <Tablepedidos setSubmenu={setSubmenu}/>


      </div>
    </div>
  )
}

export default Registropedidos