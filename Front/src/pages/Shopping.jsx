import { TfiAgenda,TfiBarChartAlt } from "react-icons/tfi";
import { useState } from 'react';
import Formcompra from '../Components/Compras/Formcompra'
import Sectioncompras from "../Components/Compras/Sectioncompras";
import SeccionEstadisticacompra from "../Components/Compras/SeccionEstadisticacompra";

const Shopping = () => {
    const [menucompras, setMenucompras] = useState('registrocompra');

    const handleMenu=(e)=>{
      setMenucompras(e)
    }
  return (
    <div className="containerUser">
      <div className="contentUser">
        
        <div className="headUsers">
          <h2>Compras</h2>
          <span> <span className='history'>Home</span> / Compras</span>
        </div>
          
        {menucompras === 'registrocompra'&& <Sectioncompras setMenucompras={setMenucompras}/>}
        {menucompras === 'addCompra'&& <Formcompra setMenucompras={setMenucompras}/>}
        
    </div>
   </div>
  )
}

export default Shopping