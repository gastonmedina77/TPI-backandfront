import Graficoventas from "./Graficoventas";
import axios from "axios";
import { useState, useEffect} from "react";

const URI = 'http://localhost:3000/'

const ReporteVentas = () => {
  
    /* const handlePrint = () => {
        return window.print()
      }; */
    
      return (
        <div className="containerReporte" id="imp1">
          <div className="btnreporte">
            {/* <button className="form-button " onClick={handlePrint}>
              Imprimir
            </button> */}
          </div>
          <h4>Ventas</h4>
          <table className="tablereporte">
            <tbody>
              <tr>
                <td>ID PEDIDO</td>
                <td>MONTO</td>
                <td>ESTADO</td>
                <td>CLIENTE </td>
                <td>FECHA PEDIDO</td>
              </tr>
              <tr>
                <td>056</td>
                <td>$5000</td>
                <td>Facturado</td>
                <td>Aldo</td>
                <td>20/05/03</td>
              </tr>
              <tr>
                <td>056</td>
                <td>$5000</td>
                <td>Facturado</td>
                <td>Aldo</td>
                <td>20/05/03</td>
              </tr>
              <tr>
                <td>056</td>
                <td>$5000</td>
                <td>Facturado</td>
                <td>Aldo</td>
                <td>20/05/03</td>
              </tr>
            
            
            </tbody>
          </table>

            {/* <Graficoventas/> */}
        </div>
      );
}

export default ReporteVentas