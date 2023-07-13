import "../css/Ventas/factura.scss";

const Factura = () => {

   const handlePrint=()=>{
        return window.print()
    }

    const handlevolver=()=>{
        return location.replace('/reciplas/dashboard/ventas')
    }
    

  return (
    <>
      <div className="containerfactura">
        <div className="headfactura">
          <div className="detalleempresa">
            <h1>Reciplas</h1>
            <span>Dirección: Lapridas 376</span>
            <span>Telefono: 3624 - 887755</span>
            <span>Email: reciplas@gmail.com</span>
          </div>
          <div className="letra">
            <h1>A</h1>
          </div>
          <div className="detalleempresa">
            <h1>Factura</h1>
            <span>N° de Factura: 0038</span>
            <span>Punto de venta: 0001</span>
            <span>Fecha de Emisión: 25 - 05 - 2023</span>
            <span>CUIT: 23 3342455 29</span>
          </div>
        </div>
        <div className="usariocomprador">
          <span>Cliente: Ruiz Diaz Javier A.</span>
          <span>DNI: 36957447</span>
          <span>Condicion frente al IVA: consumidor final</span>
          <span>Dirección: Juan b justo</span>
          <span>Condición de venta: contado/tarjeta</span>
        </div>
        <div className="cuerpofactura">
          <table className="customTable">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>% Bonificación</th>
                <th>% SubTotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Producto 1</td>
                <td>5</td>
                <td>800</td>
                <td>0.00</td>
                <td>4500</td>
              </tr>
              <tr>
                <td>Producto 1</td>
                <td>5</td>
                <td>800</td>
                <td>0.00</td>
                <td>4500</td>
              </tr>
             
              <tr>
                <td>Producto 1</td>
                <td>5</td>
                <td>800</td>
                <td>0.00</td>
                <td>4500</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>SubTotal</td>
                <td>$13.500</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Importe otros Tributos</td>
                <td>$0.00</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Importe otros Total</td>
                <td className="total">$13.500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="buttonfactura">
        <button className="form-button" 
        onClick={handlePrint}
        >
              IMPRIMIR
            </button>
        <button className="form-button" 
        onClick={handlevolver}
        >
              volver
            </button>
               <button className="form-button" >
            <a href="mailto:reciplas@gmail.com" className="mailbtn">

              Enviar a Email
            </a>
            </button>
       
        </div>
      </div>
    </>
  );
};

export default Factura;
