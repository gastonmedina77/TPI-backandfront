import "../css/formCliente.scss";
import { FiUserPlus } from "react-icons/fi";
import Swal from 'sweetalert2'

const Formcliente = ({ setMenu }) => {
  const handleAdd = (e) => {
    setMenu(e);
  };

  const handleSubmit=(e)=>{
    e.preventDefault()

    Swal.fire({
        title: '¿Quieres guardar los Datos del clientes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No Guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('¡Salvado!', '', 'éxito')
          setMenu('clientes')
        } else if (result.isDenied) {
          Swal.fire('Los cambios no se guardan', '', 'info')
        }
      })
  }

  return (
    <div className="sectionTable">
      <div className="viewTable">
        <div className="headTable">
          <h4>
            {" "}
            <FiUserPlus /> Formularo de Cliente
          </h4>
          <button className="addClient" onClick={() => handleAdd("clientes")}>
            Volver a Registro
          </button>
        </div>

        <div className="bodyTable">
          <form className="colorful-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                *Apellido:
              </label>
              <input
                required
                placeholder="Ingrese el Apellido"
                className="form-input"
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Nombre:
              </label>
              <input
                required
                placeholder="Ingrese el nombre"
                className="form-input"
                name="nombre"
                id="nombre"
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Fecha de Nacimiento:
              </label>
              <input
                required
                placeholder="Seleccione una fecha"
                className="form-input"
                name="date"
                id="date"
                type="date"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *DNI:
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
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Teléfono:
              </label>
              <input
                placeholder="Ingrese el telefono"
                className="form-input"
                name="telefono"
                id="telefono"
                type="number"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Celular:
              </label>
              <input
                required
                placeholder="Ingrese el celular"
                className="form-input"
                name="celular"
                id="celular"
                type="number"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Email:
              </label>
              <input
                required
                placeholder="Ingrese el mail"
                className="form-input"
                name="email"
                id="email"
                type="email"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Red Social:
              </label>
              <input
                placeholder="Ingrese algun red social"
                className="form-input"
                name="redsolcial"
                id="redsocial"
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Provincia:
              </label>
              <select name="pets" id="pet-select" className="form-input " required>
                <option value="">Seleccione una Provincia</option>
                <option value="formosa">Formosa</option>
                <option value="chaco">Chaco</option>
                <option value="corrientes">Corrientes</option>
                <option value="santa fe">Santa Fe</option>
                <option value="cordoba">Cordoba</option>
                <option value="salta">Salta</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Codigo Postal:
              </label>
              <input
                required
                placeholder="Ingrese el codigo postal"
                className="form-input"
                name="postal"
                id="postal"
                type="number"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Dirección:
              </label>
              <input
                required
                placeholder="Ingrese el codigo postal"
                className="form-input"
                name="direccion"
                id="direccion"
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                *Altura:
              </label>
              <input
                required
                placeholder="Ingrese el codigo postal"
                className="form-input"
                name="altura"
                id="altura"
                type="number"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                N° Departamento:
              </label>
              <input
                
                placeholder="Ingrese el codigo postal"
                className="form-input"
                name="departamento"
                id="departamento"
                type="number"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Piso:
              </label>
              <input
                
                placeholder="Ingrese el codigo postal"
                className="form-input"
                name="piso"
                id="piso"
                type="number"
              />
            </div>

            <button className="form-button" type="submit">
              GUARDAR
            </button>
          </form>

          <span className="formAlert"> los campos con el signo ( * ) son obligatorios</span>
        </div>
      </div>
    </div>
  );
};

export default Formcliente;
