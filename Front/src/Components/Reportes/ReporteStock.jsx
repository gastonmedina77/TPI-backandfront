import Graficostock from "./Graficostock";


const ReporteStock = () => {
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
          <h4>STOCK</h4>
          <table className="tablereporte">
            <tbody>
              <tr>
                <td>STOCK TOTAL</td>
                <td>CANT INSUMOS</td>
                <td>CANT OPTIMA</td>
                <td>CANT PRODUCIDO</td>
                <td>CANT OPTIMA</td>
              </tr>
              <tr>
                <td>600</td>
                <td>200</td>
                <td>250</td>
                <td>400</td>
                <td>500</td>
              </tr>
            
            
            </tbody>
          </table>
            <Graficostock/>
        </div>
      );
}

export default ReporteStock