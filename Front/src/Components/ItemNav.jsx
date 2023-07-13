import { useState } from 'react';
import '../css/itemNav.scss'
import { FiUsers,FiShoppingCart,FiTruck,FiClipboard,FiBarChart2 } from "react-icons/fi";
import { NavLink } from 'react-router-dom'

const ItemNav = () => {

  const [item, setItem] = useState('')
  const handleChange=(e)=>{
    setItem(e)
  }

  return (
    <div className="containerItem">
        <section>
            <h3>Bar de Pedro</h3>
            <span></span>
        </section>
        <ul>
                        
            <NavLink to='ventas' className='link'>
              <li
              onClick={()=>handleChange('ventas')}
              className={item === 'ventas'?'active':''}
              >
              <FiShoppingCart/>
              Ventas</li>
            </NavLink>

            <NavLink to='compras' className='link'>
              <li
              onClick={()=>handleChange('compras')}
              className={item === 'compras'?'active':''}
              >
              <FiTruck/>    
              Compras</li>
            </NavLink>
            
            <NavLink to='productos' className='link'>
              <li
              onClick={()=>handleChange('productos')}
              className={item === 'productos'?'active':''}
              >
              <FiClipboard/>
              Productos</li>
            </NavLink>
            
            <NavLink to='estadisticas' className='link'>
              <li
              onClick={()=>handleChange('estadisticas')}
              className={item === 'estadisticas'?'active':''}
              >
              <FiBarChart2/>
             Estadísticas</li>
            </NavLink>
        </ul>

      
    </div>
  )
}

export default ItemNav

/*<NavLink to='usuarios' className='link'>
              <li
              onClick={()=>handleChange('usarios')}
              className={item === 'usarios'?'active':''}
              >
              <FiUsers/>
              Usuarios</li>
            </NavLink>*/