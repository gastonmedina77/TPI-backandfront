import "../../css/reportes.scss";
import Graficoproveedores from "./Graficoproveedores";

const ReporteProveedores = () => {
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
      <h4>Proveedores Movimientos</h4>
      <table className="tablereporte">
        <tbody>
          <tr>
            <td>ID</td>
            <td>NOMBRE</td>
            <td>CUIT</td>
            <td>TELEFONO</td>
            <td>CONTACTO</td>
            <td>MOVIMIENTO</td>
          </tr>
          <tr>
            <td>001</td>
            <td>PROOVEDOR 1</td>
            <td>23244</td>
            <td>2348736278</td>
            <td>Luis</td>
            <td>25-05-23</td>
          </tr>
          <tr>
            <td>001</td>
            <td>PROOVEDOR 1</td>
            <td>23244</td>
            <td>2348736278</td>
            <td>Luis</td>
            <td>25-05-23</td>
          </tr>
          <tr>
            <td>001</td>
            <td>PROOVEDOR 1</td>
            <td>23244</td>
            <td>2348736278</td>
            <td>Luis</td>
            <td>25-05-23</td>
          </tr>
        </tbody>
      </table>

      <Graficoproveedores/>
    </div>
  );
};

export default ReporteProveedores;
