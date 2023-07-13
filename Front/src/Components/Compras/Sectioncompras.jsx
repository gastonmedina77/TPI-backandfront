import Paginacion from "../Paginacion"
import Search from "../Search"
import { useState } from "react";
import { FiCheckSquare} from "react-icons/fi";
import Tablecompra from "./Tablecompra";
import Formcompra from "./Formcompra";
import Registrocompra from "./Registrocompra";

const Sectioncompras = ({setMenucompras}) => {
  const [submenu, setSubmenu] = useState("compras");
  const handleAddsales = (e) => {
    setMenucompras(e);
  };

  return (
    <>
    <div className="navregistroventas">
        <ul>
          <li
            className={submenu === "compras" ? "active" : ""}
              onClick={() => setSubmenu("compras")}
            >
              Compras Realizadas
          </li>

          <li
            className={submenu === "pedidos" ? "active" : ""}
            onClick={() => setSubmenu("pedidos")}
          >
            Registrar Nueva Compra
          </li>
        </ul>
    </div>
    
    {submenu === 'pedidos'&&<Formcompra setSubmenu={setSubmenu}/>}
    {submenu === 'compras'&&<Registrocompra setSubmenu={setSubmenu}/>}
    </>
  )
}

export default Sectioncompras
