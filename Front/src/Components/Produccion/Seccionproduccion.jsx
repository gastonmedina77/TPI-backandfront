import { useState } from "react";
import Gadget from "./Gadget";
import Registromercaderia from "./Registromercaderia";
import Formulariomercaderia from "./Formulariomercaderia";



const Seccionproduccion = ({ setMenuproduccion }) => {
  const [submenu, setSubmenu] = useState("productos");
  const handleAddsales = (e) => {
    setMenuproduccion(e);
  };
 
  return (
    <>
    <div className="navregistroventas">
        <ul>
          <li
            className={submenu === "productos" ? "active" : ""}
              onClick={() => setSubmenu("productos")}
            >
              Productos Registrados
          </li>

          <li
            className={submenu === "pedidos" ? "active" : ""}
            onClick={() => setSubmenu("pedidos")}
          >
            Registrar Nuevo Producto
          </li>
        </ul>
    </div>
    
    {submenu === 'pedidos'&&<Formulariomercaderia setSubmenu={setSubmenu}/>}
    {submenu === 'productos'&&<Registromercaderia setSubmenu={setSubmenu}/>}
    </>

  );
};

export default Seccionproduccion;


{/* <>
      
{submenu === 'mercaderia'&&<Registromercaderia setMenuproduccion={setMenuproduccion}/>}

</> */}