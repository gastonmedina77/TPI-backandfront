import '../css/notification.scss'

const Notification = () => {
    return (
    <div className="containerNotification">
        <h3>Notificaciones</h3>
        <div className="contentNotification">
            <h4>Aviso 1</h4>
            <p>Colocar precio a la mercaderia exhibida. </p>
        </div>
        <div className="contentNotification">
            <h4>Aviso 2</h4>
            <p>Controlar fechas de vencimiento. </p>
        </div>
    </div>
  )
}

export default Notification