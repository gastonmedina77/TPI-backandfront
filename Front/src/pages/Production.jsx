import { TfiArchive,TfiBarChartAlt } from "react-icons/tfi";
import { useState } from 'react';
import Seccionproduccion from "../Components/Produccion/Seccionproduccion";
import Formulariomercaderia from "../Components/Produccion/Formulariomercaderia";
import Formularioproducto from "../Components/Produccion/Formularioproducto";


const Production = () => {

    const [menuproduccion, setMenuproduccion] = useState('stock');

    const handleMenu=(e)=>{
      setMenuproduccion(e)
    }

  return (
    <div className="containerUser">
      <div className="contentUser">
        <div className="headUsers">
          <h2> Productos</h2>
          <span> <span className='history'>Home</span> / Productos</span>
        </div>

        {menuproduccion === 'stock'&&<Seccionproduccion setMenuproduccion={setMenuproduccion} />}
        {menuproduccion === 'addMercaderia'&&<Formulariomercaderia setMenuproduccion={setMenuproduccion} />}
        {menuproduccion === 'addProducto'&&<Formularioproducto setMenuproduccion={setMenuproduccion} />}
          
      </div>
    </div>
  )
}

export default Production