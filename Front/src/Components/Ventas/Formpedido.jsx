import { FiBook } from "react-icons/fi";
import Swal from "sweetalert2";

const Formpedido = ({ setSubmenu }) => {
  const handleAdd = (e) => {
    setSubmenu(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "¿Quieres guardar los Datos del Pedido?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No Guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("¡Salvado!", "", "éxito");
        setSubmenu('pedidos')
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
            <FiBook /> Formularo de Pedidos
          </h4>
          <button className="addClient" onClick={() => handleAdd("pedidos")}>
            Volver a Registro
          </button>
        </div>

        <div className="bodyTable">
          <form className="colorful-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                *N° de Orden:
              </label>
              <input
                required
                placeholder="Ingrese el numero de orden"
                className="form-input"
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Fecha de pedido:
              </label>
              <input
                required
                placeholder="Seleccione la fecha del pedido"
                className="form-input"
                name="nombre"
                id="nombre"
                type="date"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Fecha de Entrega:
              </label>
              <input
                required
                placeholder="Seleccione la fecha de entrega"
                className="form-input"
                name="date"
                id="date"
                type="date"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *DNI del cliente:
              </label>
              <input
                required
                placeholder="Ingrese el dni"
                className="form-input"
                name="dni"
                id="dni"
                type="number"
              />
            </div>
            <div className="form-group tableForm">
              <table>
                <tr>
                  <td>
                    <label className="form-label" htmlFor="email">
                      *Producto:
                    </label>
                    <select
                      name="pets"
                      id="pet-select"
                      className="form-input "
                      required
                    >
                      <option value="">Seleccione un Producto</option>
                      <option value="argentina">Producto1</option>
                      <option value="brazil">Producto2</option>
                      <option value="uruguay">Producto3</option>
                      <option value="paraguay">Producto4</option>
                      <option value="chile">Producto5</option>
                      <option value="colombia">Producto6</option>
                    </select>
                  </td>
                  <td>
                    <label className="form-label" htmlFor="email">
                      *Cantidad:
                    </label>
                    <input
                      required
                      placeholder="Ingrese la cantidad"
                      className="form-input"
                      name="dni"
                      id="dni"
                      type="number"
                    />
                  </td>
                  <td>
                    <label className="form-label" htmlFor="email">
                      *Precio:
                    </label>
                    <input
                      required
                      placeholder="Ingrese el precio"
                      className="form-input"
                      name="dni"
                      id="dni"
                      type="number"
                    />
                  </td>
                  <td>
                    <label className="form-label" htmlFor="email">
                      SubTotal:
                    </label>
                    <label className="form-label" htmlFor="email">
                      $500
                    </label>
                  </td>
                </tr>
                <tr>
                  <button className="form-button">Agregar +</button>
                </tr>
                <td>
                    <label className="form-label" htmlFor="email">
                      Total:
                    </label>
                    <label className="form-label" htmlFor="email">
                     <span className="totalcompra">$500</span>
                    </label>
                  </td>
              </table>
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
  );
};

export default Formpedido;
