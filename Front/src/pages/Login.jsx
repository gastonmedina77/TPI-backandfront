import { useState } from 'react'
import '../css/login.scss'

const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [verficicacion, setVerficicacion] = useState(false)


const handleSubmit=(e)=>{
    e.preventDefault();
    if(email != 'admin@gmail.com' ||pass != 'admin' ){
        setVerficicacion(!verficicacion)
        return
    }else{
        return location.replace('dashboard/home')
    }

}

  return (
    <section className='containerLogin'>
        <div className="form-box">
            <div className="form-value">
                <form onSubmit={handleSubmit}>
                    <h2 className='titleLogin'>BardePedro</h2>
                    <h2 className='titleLogin'>Iniciar Sesión</h2>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input 
                        type="email"
                        onChange={(e) => setEmail( e.target.value)}
                        required/>
                        <label >Email</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" 
                        onChange={(e) => setPass( e.target.value)}
                        required/>
                        <label >Contraseña</label>
                    </div>
                    
                    <button>Ingresar</button>

                    {verficicacion && <span className='mensaje'>Los datos ingresador no son correctos</span>}
                    
                    
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login