import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Footer } from "../Footer";
import styles from "./Layout.module.css";

function MenuItems({ isActiveRoute, toggleMobileMenu }) {
  return (
    <>
      <li>
        <Link
          to="/"
          className={isActiveRoute("/") ? styles.active : ""}
          onClick={toggleMobileMenu}
        >
          Inicio
        </Link>
      </li>
      <li>
        <Link
          to="/estudio"
          className={isActiveRoute("/estudio") ? styles.active : ""}
          onClick={toggleMobileMenu}
        >
          Estudio
        </Link>
      </li>
      <li>
        <Link
          to="/profesionales"
          className={isActiveRoute("/profesionales") ? styles.active : ""}
          onClick={toggleMobileMenu}
        >
          Profesionales
        </Link>
      </li>
      <li>
        <Link
          to="/clientes"
          className={isActiveRoute("/clientes") ? styles.active : ""}
          onClick={toggleMobileMenu}
        >
          Clientes
        </Link>
      </li>
      <li>
        <Link
          to="/contacto"
          className={isActiveRoute("/contacto") ? styles.active : ""}
          onClick={toggleMobileMenu}
        >
          Contacto
        </Link>
      </li>
    </>
  );
}
export function Layout({ children }) {
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    if (window.innerWidth > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          <nav
            className={`${styles.navigation} ${
              isMobile && styles.navigationMobile
            }`}
          >
            <ul>
              {isMobile ? (
                <>
                  <li className={styles.hamburgerMenu}>
                    <button onClick={toggleMobileMenu}>
                      <GiHamburgerMenu /> Menu
                    </button>
                  </li>
                  <div
                    className={`${styles.mobileMenuItems} ${
                      isMobileMenuOpen
                        ? styles.mobileMenuOpen
                        : styles.mobileMenuClosed
                    }`}
                  >
                    <MenuItems
                      isActiveRoute={isActiveRoute}
                      toggleMobileMenu={toggleMobileMenu}
                    />
                  </div>
                </>
              ) : (
                <MenuItems isActiveRoute={isActiveRoute} />
              )}
            </ul>
          </nav>
        </div>
      </header>

      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
