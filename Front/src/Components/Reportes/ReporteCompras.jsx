import Graficocompras from "./Graficocompras";


const ReporteCompras = () => {
  const handlePrint = () => {
    return window.print()
  };
    
      return (
        <div className="containerReporte" id="imp1">
          <div className="btnreporte">
            <button className="form-button " onClick={handlePrint}>
              Imprimir
            </button>
          </div>
          <h4>Compras</h4>
          <table className="tablereporte">
            <tbody>
              <tr>
                <td>N° FACTURA</td>
                <td>PROVEEDOR</td>
                <td>CANTIDAD</td>
                <td>FECHA </td>
                <td>COSTO</td>
              </tr>
              <tr>
                <td>056</td>
                <td>proveedor 1</td>
                <td>250</td>
                <td>23/05/23</td>
                <td>35000</td>
              </tr>
              <tr>
                <td>056</td>
                <td>proveedor 1</td>
                <td>250</td>
                <td>23/05/23</td>
                <td>35000</td>
              </tr>
              <tr>
                <td>056</td>
                <td>proveedor 1</td>
                <td>250</td>
                <td>23/05/23</td>
                <td>35000</td>
              </tr>
            
            
            </tbody>
          </table>

            {/* <Graficocompras/> */}

        </div>
      );
}

export default ReporteCompras