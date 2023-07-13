import { FiBook } from "react-icons/fi";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import axios from 'axios';

const URI = 'http://localhost:3000/'
let nPrim = 1
let aCompras = []

const Formcompra = ({setSubmenu}) => {

  const [proveedor, setProveedor] = useState('')
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
        guardaCompra()
        //Swal.fire("Los datos no se guardarán", "", "info");
      }
    });

    const guardaCompra = async () =>{
      await axios.post(URI+'guardarcompra', aCompras/* {proveedor:proveedor, fecha:fecha, productoProductoId:producto, cantidad:cantidad, precio_unitario:precio} */)
      aCompras = []
      nPrim = 1
      Swal.fire("Se ha registrado la compra.", "", "info");
      setSubmenu("compras")
      //Swal.fire({
      //  title: "¿Desea seguir cargando más compras?",
      //  showDenyButton: true,
      //  showCancelButton: true,
      //  confirmButtonText: "Si",
      //  denyButtonText: `No`,
      //}).then((result) => {
      //  if (result.isConfirmed) {
      //    document.getElementById("proveedor").value = "";
      //    document.getElementById("fecha").value = "";
      //    
      //  } else if (result.isDenied) {
      //    
      //  }
      //})
    }
  };

  /* const handleAdd = (e) => {
    setMenucompras(e);
  }; */

  const agregaItem = () => {
    if (nPrim == 1) {
      aCompras.push(
        {proveedor:proveedor, 
          fecha:fecha,
      })
      nPrim = 0
    } 
    aCompras.push({
        productoProductoId:producto, 
        cantidad:cantidad, 
        precio_unitario:precio
    })
  } 


  return (
    <div className="sectionTable">
      <div className="viewTable">
        <div className="headTable">
          <h4>
            {" "}
            <FiBook /> Formulario de Registro de Compras
          </h4>
          {/* <button className="addClient" onClick={() => handleAdd("registrocompra")}>
            Volver a Compras
          </button> */}
        </div>

        <div className="bodyTable">
          <form className="colorful-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Proveedor:<span className="marcas">*</span> 
              </label>
              <input
                required
                value={proveedor}
                onChange={(e)=>setProveedor(e.target.value)}
                placeholder="Nombre proveedor"
                className="form-input"
                name="proveedor"
                id="proveedor"
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
          {/* <tr>
            <button className="form-button" onClick={()=>agregaItem()}>Agregar +</button>
          </tr> */}
          <span className="formAlert">
            {" "}
            los campos con el signo ( * ) son obligatorios
          </span>
        </div>
      </div>
    </div>
  );
}

export default Formcompra