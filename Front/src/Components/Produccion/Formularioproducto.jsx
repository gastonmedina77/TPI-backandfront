import { FiBook } from "react-icons/fi";
import Swal from "sweetalert2";

const Formularioproducto = ({setMenuproduccion}) => {
    const handleAdd = (e) => {
        setMenuproduccion(e);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        Swal.fire({
          title: "¿Quieres guardar los Datos del Producto?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Guardar",
          denyButtonText: `No Guardar`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("¡Salvado!", "", "éxito");
            setMenuproduccion('stock')
          } else if (result.isDenied) {
            Swal.fire("Los cambios no se guardan", "", "info");
          }
        });
      };
    
      return (
        <div className="sectionTable">
          <div className="viewTable">
            <div className="headTable">
              <h4>
                {" "}
                <FiBook /> Formularo de Registro de Producción
              </h4>
              <button className="addClient" onClick={() => handleAdd("stock")}>
                Volver a Registro
              </button>
            </div>
    
            <div className="bodyTable">
              <form className="colorful-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Seleccione el producto:
                  </label>
                  <select name="pets" id="pet-select" className="form-input ">
                        <option value="">Seleccione el producto</option>
                        <option value="argentina">Producto 1</option>
                        <option value="brazil">Producto 2</option>
                        <option value="brazil">Producto 3</option>
                        <option value="brazil">Producto 4</option>
                        <option value="brazil">Producto 5</option>
                      </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Nombre:
                  </label>
                  <input
                    required
                    placeholder=""
                    className="form-input"
                    name="nombre"
                    id="nombre"
                    type="text"
                  />
                </div>
                
                    
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Cantidad de Producción:
                  </label>
                  <input
                    required
                    placeholder="Ingres la cantidad a producir"
                    className="form-input"
                    name="date"
                    id="date"
                    type="number"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Detalle:
                  </label>
                  <textarea
                    required
                    placeholder="Ingrese un detalle del producto"
                    className="form-input"
                    name="dni"
                    id="dni"
                    type="textarea"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Fecha de finalización:
                  </label>
                  <input
                    required
                    placeholder="Indique la fecha estimada"
                    className="form-input"
                    name="dni"
                    id="dni"
                    type="date"
                  />
                </div>
             
                <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        *Estado de Elavoración:
                      </label>
                      <select name="pets" id="pet-select" className="form-input " required>
                        <option value="">Indique un estado</option>
                        <option value="argentina">Finalizado</option>
                        <option value="brazil">En proceso</option>
                        <option value="brazil">Pendiente </option>
                      </select>
                    </div>
                   
                <button className="form-button" type="submit">
                  GUARDAR
                </button>
              </form>
    
              <span className="formAlert">
                {" "}
                los campos con el signo ( * ) son obligatorios
              </span>
            </div>
          </div>
        </div>
      )
}

export default Formularioproducto