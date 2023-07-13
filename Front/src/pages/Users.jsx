import '../css/users.scss'
import { TfiIdBadge,TfiBarChartAlt ,TfiHarddrives,} from "react-icons/tfi";
import { useState } from 'react';
import Sectioncliente from '../Components/Sectioncliente';
import Sectionproveedores from '../Components/Sectionproveedores';
import Formcliente from '../Components/Formcliente';
import Formproveedores from '../Components/Formproveedores';
import SectionestadisticaUsuarios from '../Components/SectionestadisticaUsuarios';
import { GrMenu } from "react-icons/gr";

const Users = () => {

  const [menu, setMenu] = useState('clientes');

  const handleMenu=(e)=>{
    setMenu(e)
  }


  return (
    <div className="containerUser">
    <div className="contentUser">
      <div className="headUsers">
        <GrMenu className={`menu`}
      
        />
        <h2> Usuarios</h2>
      <span> <span className='history'>Home</span> / Usuarios</span>
      </div>
      <div className="gadgetUsers">
        <div className={`contentGadget ${menu ==='clientes'?'active':''}`}
          onClick={()=>handleMenu('clientes')}
        >
          <TfiIdBadge className='iconGadget'/>
          <h4>Clientes</h4>
          <p>Registración/Acción</p>
        </div>
        <div className={`contentGadget ${menu ==='proveedores'?'active':''}`}
          onClick={()=>handleMenu('proveedores')}
        >
          <TfiHarddrives className='iconGadget'/>
          <h4>Proveedores</h4>
          <p>Registración/Acción</p>
        </div>
        <div className={`contentGadget ${menu ==='estadisticas'?'active':''}`}
          onClick={()=>handleMenu('estadisticas')}
        >
          <TfiBarChartAlt className='iconGadget'/>
          <h4>Estadísticas</h4>
          <p>Resumen / Estidísticas / Gráficos  clientes proveedores</p>
        </div>
      </div>
          {menu === 'clientes'&&<Sectioncliente setMenu={setMenu}/>}
          {menu === 'proveedores'&&<Sectionproveedores setMenu={setMenu}/>}
          {menu === 'addClient'&&<Formcliente setMenu={setMenu}/>}
          {menu === 'addProveedor'&&<Formproveedores setMenu={setMenu}/>}
          {menu === 'estadisticas'&& <SectionestadisticaUsuarios/>}
    </div>
   </div>
  )
}

export default Users