import { TfiAgenda,TfiBarChartAlt ,TfiCreditCard,} from "react-icons/tfi";
import { useState } from 'react';
import Seccionventas from "../Components/Ventas/Seccionventas";
import '../css/Ventas/sales.scss'
import SeccionFacturacion from "../Components/Ventas/SeccionFacturacion";
import Sectionestadisticaventa from "../Components/Ventas/Sectionestadisticaventa";

const Sales = () => {
  const [menuventas, setMenuventas] = useState('registroventa');

  const handleMenu=(e)=>{
    setMenuventas(e)
  }
 
  return (
    <div className="containerUser">
      <div className="contentUser">
        <div className="headUsers">
          <h2> Ventas</h2>
          <span> <span className='history'>Home</span> / Ventas</span>
        </div>
            
        {menuventas === 'registroventa'&& <Seccionventas setMenuventas={setMenuventas}/>}
        {menuventas === 'facturacion'&& <SeccionFacturacion setMenuventas={setMenuventas}/>}
        
      </div>
    </div>
  )
}

export default Sales