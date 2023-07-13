import '../../css/Ventas/seccionfactura.scss'
import { FiCheckSquare } from "react-icons/fi";
import Swal from "sweetalert2";

const SeccionFacturacion = () => {

    const handleLink=()=>{
        return location.replace('/reciplas/factura')
    }

    const handlegenerar = (e) => {
        e.preventDefault();
    
        Swal.fire({
          title: "¿Esta seguro de Finalizar la Compra?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Guardar",
          denyButtonText: `No Guardar`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("¡Salvado!", "", "éxito");
            return handleLink()
          } else if (result.isDenied) {
            Swal.fire("Los cambios no se guardan", "", "info");
          }
        });
      };
  return (
    <>
    
    <div className="sectionTable">
        <div className="viewTable">
          <div className="headTable">
            <h4> <FiCheckSquare/> Seleccione la Accion a Realizar</h4>
            
               
            </div>
            
         
         
          <div className="bodyTable">
            <div className="selectorFactura">
                <div className="secciones">
                    <h3>
                        Generar Factura
                    </h3>
                    <span>Seleccione el numero de orden de pedido para generar la factura</span>
                  
                    <select
                      name="pets"
                      id="pet-select"
                      className="form-input "
                      required
                    >
                      <option value="">Seleccione el Pedido</option>
                      <option value="argentina"></option>
                      <option value="brazil">0023</option>
                      <option value="uruguay">0035</option>
                      <option value="paraguay">1233</option>
                      <option value="chile">4455</option>
                      <option value="colombia">4455</option>
                    </select>
                    <button className="form-button" 
                    onClick={handlegenerar}
                    >
                        Generar
                     </button>
                </div>
                <div className="secciones">
                    <h3>
                        Reemprimir Factura
                    </h3>
                    <span>Seleccione el numero de Factura a imprimir</span>
                  
                  <select
                    name="pets"
                    id="pet-select"
                    className="form-input "
                    required
                  >
                    <option value="">Seleccione el Factura</option>
                    <option value="argentina"></option>
                    <option value="brazil">0023</option>
                    <option value="uruguay">0035</option>
                    <option value="paraguay">1233</option>
                    <option value="chile">4455</option>
                    <option value="colombia">4455</option>
                  </select>
                  <button className="form-button"
                  onClick={handleLink}
                  >
                     Imprimir
                   </button>
                </div>
            </div>
            
          </div>
        </div>
        
       </div>
  </>
  )
}

export default SeccionFacturacion