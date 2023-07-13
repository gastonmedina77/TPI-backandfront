import '../../css/Produccion/gadget.scss'
import { TfiDropbox,TfiClipboard,TfiHarddrive } from "react-icons/tfi";

const Gadget = () => {
  return (
    <>
        <div className="contentGadgetproduccion">
            <div className="gadgetproduccion">
               <div className="visual">
                  <TfiDropbox className='icongadget'/>
                  <span className='cantidadgadget'> 50</span>
               </div>
               <div className="detallegad">
                  Insumos Total
               </div>
            </div>
            <div className="gadgetproduccion">
               <div className="visual">
                  <TfiHarddrive className='icongadget'/>
                  <span className='cantidadgadget'> 550</span>
               </div>
               <div className="detallegad">
                  Producción Total
               </div>
            </div>
            <div className="gadgetproduccion">
               <div className="visual">
                  <TfiClipboard className='icongadget'/>
                  <span className='cantidadgadget'> 600</span>
               </div>
               <div className="detallegad">
                  Stock Total
               </div>
            </div>
        </div>
    </>
  )
}

export default Gadget