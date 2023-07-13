import "../css/estadisticas.scss";
import ReporteDeudores from "../Components/Reportes/ReporteDeudores";
import ReporteProveedores from "../Components/Reportes/ReporteProveedores";
import Reportepedidos from "../Components/Reportes/Reportepedidos";
import ReporteStock from "../Components/Reportes/ReporteStock";
import ReporteProducidos from "../Components/Reportes/ReporteProducidos";
import ReporteCompras from "../Components/Reportes/ReporteCompras";
import ReporteVentas from "../Components/Reportes/ReporteVentas";
import { useState, useEffect} from "react";
import axios from 'axios';

const URI = 'http://localhost:3000/'

const aDatos = ['Compras', 'Ventas']

const Estadisticas = () => {
  const [value, setValue] = useState("");
  const [generar, setGenerar] = useState("");
  
  const [periodo_de, setPeriodoDe] = useState('')
  const [periodo_a, setPeriodoA] = useState('')
  const [modulo, setModulo] = useState('')
  

  const [modulos, setModulos] = useState([])

  useEffect(()=>{
    getVentas(),
    getCompras()
  }, [])

  const getVentas = async (aFecha) =>{
    const res = await axios.post(URI+'informeventas', aFecha)
    setModulos(res.data)
  }
  
   
  const getCompras = async (aFecha) =>{
    const res = await axios.post(URI+'informecompras', aFecha)
    setModulos(res.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (modulo == 'Ventas') {
      getVentas({fecha_i: periodo_de, fecha_f: periodo_a})
    }else{
      getCompras({fecha_i: periodo_de, fecha_f: periodo_a})
    }
  
  };


  return (
    <div className="containerUser">
      <div className="contentUser">
        <div className="headUsers">
          <h2> Estadísticas</h2>
          <span>
            {" "}
            <span className="history">Home</span> / Estadísticas
          </span>
        </div>
        <div className="reporteGenerador">
          <div className="selecteRango">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Periodo de:
                </label>
                <input
                  value={periodo_de}
                  onChange={(e)=>setPeriodoDe(e.target.value)}
                  placeholder=""
                  className="form-input"
                  name="dni"
                  id="dni"
                  type="date"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  a:
                </label>
                <input
                  value={periodo_a}
                  onChange={(e)=>setPeriodoA(e.target.value)}
                  placeholder=""
                  className="form-input"
                  name="dni"
                  id="dni"
                  type="date"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  *Módulo:
                </label>
                <select
                  value={modulo}
                  onChange={(e) => setModulo(e.target.value)}
                  name="modulo"
                  id="modulo"
                  className="form-input "
                  required
                >
                  <option value="">Seleccione el módulo</option>
                  {aDatos.map((dato) => (
                    <option value={dato}>{dato}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
              <label className="form-label tapar" htmlFor="name">
                  .
                </label>
                <button className="form-button">Generar</button>
              </div>
              <div className="form-group">
                <span>
                  *Si no selecciona un periodo se mostrará todo hasta el dia de
                  la fecha
                </span>
              </div>
            </form>
          </div>
        </div>
      
        <h4>{modulo}</h4>
        <table className="tablereporte">
          <tbody>
            <tr>
              <td>Id Pedido</td>
              <td>Fecha</td>
              <td>Proveedor/Cliente</td>
            </tr>
            {modulos.map((modul) => (
              <tr>
                <td>{modul.ventas_id}</td>
                <td>{modul.compras_id}</td>
                <td>{modul.fecha}</td>
                <td>{modul.cliente}</td>
                <td>{modul.proveedor}</td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Estadisticas;
