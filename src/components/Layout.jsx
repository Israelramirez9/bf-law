import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import styles from './Layout.module.css'

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.topNav}>
          <div className={styles.logoSection}>
            <a href="/">
              <img src={logo} alt="BF Law Logo" width={200} />
            </a>
          </div>

          <div className={styles.iconsSection}>
            <span>Contact Info</span>
          </div>
        </div>

        <div className={styles.menu}>
          <div className={styles.container}>
            <nav className={styles.navigation}>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Estudio</Link></li>
                <li><Link to="/professionals">Profesionales</Link></li>
                <li><Link to="/clients">Clientes</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout 