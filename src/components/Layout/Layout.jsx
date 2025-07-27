import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './Layout.module.css'
import { Footer } from '../Footer'
import { useEffect } from 'react';

export function Layout({ children }) {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    });
  }, [pathname]);

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
            <span></span>
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
      <Footer />
    </div>
  )
}

