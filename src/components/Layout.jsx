import { Outlet, Link } from 'react-router-dom'
import './Layout.scss.css'
import logo from '../assets/logo.png'

function Layout() {
  return (
    <div className="layout">
      <header>
        <div className="nav">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" width={100} />
            </a>
          </div>

          <div className="icons">
            icons
          </div>
        </div>
        <div className="menu">
          <div className="container">
            <div className="logo">
              <Link to="/">BF Law</Link>
            </div>
            <nav className="nav">
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Nosotros</Link></li>
                <li><Link to="/services">Servicios</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout 