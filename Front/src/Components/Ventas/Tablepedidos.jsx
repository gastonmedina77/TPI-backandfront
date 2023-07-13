import { FiTrash,FiEye,FiEdit } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import Swal from 'sweetalert2'
import axios from "axios";
import { useState, useEffect} from "react";


const URI = 'http://localhost:3000/'
let nPrim = 1
let aVentas = []

const Tablepedidos = ({setSubmenu}) => {
  
  const [cliente, setCliente] = useState('')
  const [fecha, setFecha] = useState('')
  const [producto, setProducto] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [precio, setPrecio] = useState('')

  //funcion para mostrar todos los productos
  const [products, setProduct] = useState([])
  useEffect(()=>{
  getProducts()
  }, [])
  
   
  const getProducts = async () =>{
   const res = await axios.get(URI)
   setProduct(res.data)
  }
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    agregaItem()
    Swal.fire({
      title: "¿Desea seguir cargando items?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById("cantidad").value = "";
        document.getElementById("precio").value = "";
      } else if (result.isDenied) {
        guardaVenta()
        //Swal.fire("Los cambios no se guardarán", "", "info");
      }
    });
    const guardaVenta = async () => {
      await axios.post(URI+'guardarventa', aVentas/* {cliente:cliente, fecha:fecha, productoProductoId:producto, cantidad:cantidad, precio_unitario:precio} */)
      aVentas = []
      nPrim = 1
      Swal.fire("Se ha registrado la venta.", "", "info");
      setSubmenu("ventas")
      //document.getElementById("proveedor").value = "";
      //document.getElementById("fecha").value = "";
      //document.getElementById("cantidad").value = "";
      //document.getElementById("precio").value = "";
      //Swal.fire({
      //  title: "¿Desea seguir cargando más ventas?",
      //  showDenyButton: true,
      //  showCancelButton: true,
      //  confirmButtonText: "Si",
      //  denyButtonText: `No`,
      //}).then((result) => {
      //  if (result.isConfirmed) {
      //    document.getElementById("cliente").value = "";
      //    document.getElementById("fecha").value = "";
      //    document.getElementById("cantidad").value = "";
      //    document.getElementById("precio").value = "";
      //  } else if (result.isDenied) {
      //    setSubmenu("ventas")
      //  }
      //})

    }
  }

  const agregaItem = () => {
    if (nPrim == 1) {
      aVentas.push(
        {cliente:cliente, 
          fecha:fecha,
      })
      nPrim = 0
    } 
    aVentas.push({
        productoProductoId:producto, 
        cantidad:cantidad, 
        precio_unitario:precio
    })
  } 

  return (
      <div className="bodyTable">
        <form className="colorful-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Cliente:<span className="marcas">*</span> 
            </label>
            <input
              required
              value={cliente}
              onChange={(e)=>setCliente(e.target.value)}
              placeholder="Nombre Cliente"
              className="form-input"
              name="cliente"
              id="cliente"
              type="text"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Fecha:<span className="marcas">*</span> 
            </label>
            <input
              required
              value={fecha}
              onChange={(e)=>setFecha(e.target.value)}
              placeholder="Seleccione la fecha de la compra"
              className="form-input"
              name="fecha"
              id="fecha"
              type="date"
            />
          </div>
          <div> </div>
        
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              <span className="marcas"></span> 
            </label>
          </div>
          <div className="form-group tableForm">
            <table>
              <tr>
                <td>
                  <label className="form-label" htmlFor="email">
                    Producto:<span className="marcas">*</span> 
                  </label>
                  <select
                    value={producto}
                    onChange={(e)=>setProducto(e.target.value)}
                    name="producto"
                    id="producto"
                    className="form-input "
                    required
                  >
                    <option value="">Seleccione un Producto</option>
                    {products.map((product) => (
                      <option value={product.producto_id}>{product.producto_nombre}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <label className="form-label labelsmall" htmlFor="email">
                    Cantidad:<span className="marcas">*</span> 
                  </label>
                  <input
                    required
                    value={cantidad}
                    onChange={(e)=>setCantidad(e.target.value)}
                    placeholder="Ingrese la cantidad"
                    className="form-input"
                    name="cantidad"
                    id="cantidad"
                    type="number"
                  />
                </td>
                <td>
                  <label className="form-label" htmlFor="email">
                    Precio:<span className="marcas"></span> 
                  </label>
                  <input
                    value={precio}
                    onChange={(e)=>setPrecio(e.target.value)}
                    placeholder="Ingrese el precio"
                    className="form-input"
                    name="precio"
                    id="precio"
                    type="number"
                  />
                </td>
                {/* <td>
                  <label className="form-label" htmlFor="email">
                    Subtotal:
                  </label>
                  <label className="form-label" htmlFor="email">
                    $500
                  </label>
                </td> */}
              </tr>
              {/* <tr>
                <button className="form-button">Agregar +</button>
              </tr> */}
              {/* <td>
                  <label className="form-label" htmlFor="email">
                    Total:
                  </label>
                  <label className="form-label" htmlFor="email">
                   <span className="totalcompra">$500</span>
                  </label>
                </td> */}
            </table>
          </div>
          <button className="form-button" type="submit">
            Guardar
          </button>
        </form>
        <span className="formAlert">
          {" "}
          los campos con el signo ( * ) son obligatorios
        </span>
      </div>
    )
}

export default Tablepedidos