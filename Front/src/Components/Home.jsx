import '../css/home.scss'
import { RiHandHeartLine } from "react-icons/ri";
import Welcome from '../img/welcome.svg'

const Home = () => {
  return (
   <div className="containerHome">
    <div className="contentHome">
        <div className="welcome">
          <h1>Hola!</h1>
          <h2>Bienvenido al Sistema del <span>Bar de Pedro</span><RiHandHeartLine/></h2>
        </div>
       
        <img src={Welcome} alt="welcome" />
  
      </div>
   </div>
  )
}

export default Home