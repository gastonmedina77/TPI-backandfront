
import Nav from '../Components/Nav'
import '../css/dashboard.scss'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

  return (
    <>
    <div className="containerDash">
      <aside>
          <Nav/>
      </aside>
      <main>
          <Outlet />
      </main>
    </div>
    </>
  )
}

export default Dashboard