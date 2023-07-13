import '../css/paginacion.scss'
import { FiChevronsRight } from "react-icons/fi";

const Paginacion = () => {
  return (
    <div className="containerPaginacion">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span><FiChevronsRight/></span>
    </div>
  )
}

export default Paginacion