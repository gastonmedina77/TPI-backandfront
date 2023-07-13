import "../../css/reportes.scss";
import Graficodeudores from "./Graficodeudores";

const ReporteDeudores = () => {
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
      <h4>Deudores</h4>
      <table className="GeneratedTable">
        <thead>
          <tr>
            <th className="threporte">ID</th>
            <th className="threporte">DNI CLIENTE</th>
            <th className="threporte">NOMBRE</th>
            <th className="threporte">MONTO</th>
            <th className="threporte">ABONADO</th>
            <th className="threporte">DEUDA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>22374856</td>
            <td>Aldo</td>
            <td>$5000</td>
            <td>$2000</td>
            <td>$3000</td>
          </tr>
          <tr>
            <td>001</td>
            <td>22374856</td>
            <td>Aldo</td>
            <td>$5000</td>
            <td>$2000</td>
            <td>$3000</td>
          </tr>
          <tr>
            <td>001</td>
            <td>22374856</td>
            <td>Aldo</td>
            <td>$5000</td>
            <td>$2000</td>
            <td>$3000</td>
          </tr>
        </tbody>
      </table>

      <Graficodeudores />
    </div>
  );
};

export default ReporteDeudores;
