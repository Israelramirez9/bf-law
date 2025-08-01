import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Footer } from "../Footer";
import styles from "./Layout.module.css";

export function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const isActiveRoute = (route) => {
    if (route === "/" && pathname === "/") return true;
    if (route !== "/" && pathname.startsWith(route)) return true;
    return false;
  };

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
                <li>
                  <Link
                    to="/"
                    className={isActiveRoute("/") ? styles.active : ""}
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/estudio"
                    className={isActiveRoute("/estudio") ? styles.active : ""}
                  >
                    Estudio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profesionales"
                    className={
                      isActiveRoute("/profesionales") ? styles.active : ""
                    }
                  >
                    Profesionales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/clientes"
                    className={isActiveRoute("/clientes") ? styles.active : ""}
                  >
                    Clientes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacto"
                    className={isActiveRoute("/contacto") ? styles.active : ""}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
