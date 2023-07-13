import Graficopedidos from "./Graficopedidos";


const Reportepedidos = () => {
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
          <h4>Pedidos</h4>
          <table className="tablereporte">
            <tbody>
              <tr>
                <td>N° ORDEN</td>
                <td>FECHA</td>
                <td>DNI CLIENTE</td>
                <td>MONTO</td>
                <td>CANTIDAD TOTAL</td>
              </tr>
              <tr>
                <td>001</td>
                <td>25_05_23</td>
                <td>23244435</td>
                <td>$10000</td>
                <td>30</td>
              </tr>
              <tr>
                <td>001</td>
                <td>25_05_23</td>
                <td>23244435</td>
                <td>$10000</td>
                <td>30</td>
              </tr>
              <tr>
                <td>001</td>
                <td>25_05_23</td>
                <td>23244435</td>
                <td>$10000</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
    
          <Graficopedidos/>
        </div>
      );
}

export default Reportepedidos