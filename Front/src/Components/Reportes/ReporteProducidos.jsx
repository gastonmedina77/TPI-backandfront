import Graficoproducidos from "./Graficoproducidos";


const ReporteProducidos = () => {
   
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
              <h4>Producidos</h4>
              <table className="tablereporte">
                <tbody>
                  <tr>
                    <td>ID</td>
                    <td>PRODUCTO</td>
                    <td>CANTIDAD</td>
                    <td>FECHA ELAVORACION</td>
                    <td>STOCK</td>
                  </tr>
                  <tr>
                    <td>056</td>
                    <td>producto 1</td>
                    <td>250</td>
                    <td>23/05/23</td>
                    <td>350</td>
                  </tr>
                  <tr>
                    <td>056</td>
                    <td>producto 1</td>
                    <td>250</td>
                    <td>23/05/23</td>
                    <td>350</td>
                  </tr>
                  <tr>
                    <td>056</td>
                    <td>producto 1</td>
                    <td>250</td>
                    <td>23/05/23</td>
                    <td>350</td>
                  </tr>
                
                
                </tbody>
              </table>

              <Graficoproducidos/>
            </div>
          );

}
export default ReporteProducidos