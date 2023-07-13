import '../css/user.scss'
import Avatar from '../img/avatar.png'

const user = () => {
  return (
    <div className="containerUser">
      <div className="contentUser">
        <div className="avatar">
            < img src={Avatar} alt="avatar" />
        </div>
        <span className='booth'>
          Administrador
        </span>
        <div className="detallUser">
          <span>Grupo C</span>
          <span>Desarrollo</span>
          <span>de SW</span>
          <span>ISI - FRRe</span>
          <span>UTN</span>
        </div>
      </div>
    </div>
  )
}

export default user