import '../css/formCliente.scss'
import Swal from 'sweetalert2'
import { FiTruck } from "react-icons/fi";

const Formproveedores = ({setMenu}) => {
    const handleAdd = (e) => {
        setMenu(e);
      };
    
      const handleSubmit=(e)=>{
        e.preventDefault()
    
        Swal.fire({
            title: '¿Quieres guardar los Datos del Proveedor?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: `No Guardar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('¡Salvado!', '', 'éxito')
              setMenu('proveedores')
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
                <FiTruck /> Formularo de Provedores
              </h4>
              <button className="addClient" onClick={() => handleAdd("proveedores")}>
                Volver a Registro
              </button>
            </div>
    
            <div className="bodyTable">
              <form className="colorful-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    *Nombre Comercial:
                  </label>
                  <input
                    required
                    placeholder="Ingrese el nombre Comercial"
                    className="form-input"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *CUIT:
                  </label>
                  <input
                    required
                    placeholder="Ingrese el cuit"
                    className="form-input"
                    name="cuit"
                    id="cuit"
                    type="number"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Razón social:
                  </label>
                  <input
                    required
                    placeholder="Ingrese la razon social"
                    className="form-input"
                    name="razon"
                    id="razon"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Pais de origen:
                  </label>
                  <select name="pets" id="pet-select" className="form-input " required>
                    <option value="">Seleccione un Pais</option>
                    <option value="argentina">Argentina</option>
                    <option value="brazil">Brazil</option>
                    <option value="uruguay">Uruguay</option>
                    <option value="paraguay">Paraguay</option>
                    <option value="chile">Chile</option>
                    <option value="colombia">Colombia</option>
                  </select>
                </div>
                <div className="form-group check">
                  <label className="form-label" htmlFor="email">
                    *Provee:
                  </label>
                  <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Bienes</label>
                  <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Servicios</label>
                  <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Consultoria</label>
                </div>
                <div className="form-group check">
                  <label className="form-label" htmlFor="email">
                    *Tipo Empresa:
                  </label>
                  <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Grande</label>
                  <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Mediana</label>
                  <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Microemprendimiento</label>
                </div>
                <div className="form-group check">
                  <label className="form-label" htmlFor="email">
                    *Rama:
                  </label>
                  <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Fabricante</label>
                  <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Distribuidor</label>
                  <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Importador</label>
                </div>

                

                <div className="form-group">
                  
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Domicilio legal:
                  </label>
                  <input
                    placeholder="Ingrese dirección domicilio"
                    className="form-input"
                    name="domlegal"
                    id="domlegal"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Telefono Domicilio Legal:
                  </label>
                  <input
                    required
                    placeholder="Ingrese el telefono del domicilio"
                    className="form-input"
                    name="telefonolegal"
                    id="telefonolegal"
                    type="number"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Domicilio Comercial:
                  </label>
                  <input
                    placeholder="Ingrese dirección del domicilio"
                    className="form-input"
                    name="domicomercial"
                    id="domicomercial"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Telefono Domicilio Comercial:
                  </label>
                  <input
                    placeholder="Ingrese el telefono del domicilio"
                    className="form-input"
                    name="telcomercial"
                    id="telcomercial"
                    type="number"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Nombre de contacto:
                  </label>
                  <input
                    required
                    placeholder="Ingrese el nombre del contacto"
                    className="form-input"
                    name="nombrecontact"
                    id="nombrecontact"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Puesto del contacto:
                  </label>
                  <input
                    required
                    placeholder="Ingrese el Puesto"
                    className="form-input"
                    name="puesto"
                    id="puesto"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    *Mail de Contacto:
                  </label>
                  <input
                    required
                    placeholder="Ingrese el email del contacto"
                    className="form-input"
                    name="maincontact"
                    id="maincontact"
                    type="email"
                  />
                </div>
                <div className="form-group">
                <label className="form-label" htmlFor="email">
                    *Mail Empresarial:
                  </label>
                  <input
                    required
                    placeholder="Ingrese el email del contacto"
                    className="form-input"
                    name="mailempresa"
                    id="mailempresa"
                    type="email"
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
  )
}

export default Formproveedores