import React from 'react';
import styles from './Footer.module.css';
import { MdPhone } from 'react-icons/md';
import { GiPositionMarker } from 'react-icons/gi';
import { IoMailOpen } from 'react-icons/io5';


const Link = ({ to, children, className }) => (
    <a href={to} className={className}>
        {children}
    </a>
);

export const Footer = () => {
    const navigationLinks = [
        { to: "/quienes-somos", label: "Quienes somos" },
        { to: "/areas-practica", label: "Áreas de práctica" },
        { to: "/nuestro-enfoque", label: "Nuestro enfoque" },
        { to: "/clientes", label: "Clientes" },
        { to: "/profesionales", label: "Profesionales" }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerGrid}>

                    {/* Contáctanos Section */}
                    <div className={styles.contactSection}>
                        <h3 className={styles.sectionTitle}>Contáctanos</h3>

                        <div className={styles.contactItem}>
                            <div className={styles.iconContainer}>
                                <MdPhone className={styles.icon} />
                            </div>
                            <div className={styles.contactInfo}>
                                <p className={styles.contactLabel}>Número de contacto</p>
                                <p className={styles.contactValue}>+0(850) 544 7514</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconContainer}>
                                <GiPositionMarker className={styles.icon} />
                            </div>
                            <div className={styles.contactInfo}>
                                <p className={styles.contactLabel}>Ubicados</p>
                                <p className={styles.contactValue}>
                                    Edificio Paralelo 50 Norte<br />
                                    Av. 12 de Octubre 7225, piso 3 of 322<br />
                                    (1629) Pilar. Provincia de Buenos Aires
                                </p>
                                <a href="https://maps.app.goo.gl/cNAhhxNVULXcjEEh8" target="_blank" rel="noopener noreferrer" className={styles.directionsLink}>
                                    Abrir en Google Maps
                                </a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconContainer}>
                                <IoMailOpen className={styles.icon} />
                            </div>
                            <div className={styles.contactInfo}>
                                <p className={styles.contactLabel}>Email de contacto</p>
                                <p className={styles.contactValue}>info@bflaw.com.ar</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className={styles.navigationSection}>
                        <h3 className={styles.sectionTitle}>Navegación</h3>
                        <nav className={styles.navigationList}>
                            {navigationLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.to}
                                    className={styles.navigationLink}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Opportunities Section */}
                    <div className={styles.opportunitiesSection}>
                        <h3 className={styles.sectionTitle}>Oportunidades</h3>
                        <p className={styles.opportunitiesText}>
                            Si compartes nuestra pasión por el derecho y los negocios, envíanos tu CV
                            para futuras búsquedas.
                        </p>
                        <button className={"primaryButton"}>
                            <span>Cargar CV</span>
                            <span className="arrow">›</span>
                        </button>
                    </div>

                </div>
            </div>
            <p className={styles.copyright}>©{new Date().getFullYear()} | Bf Law  |  All rights reserverd</p>
        </footer>

    );
};

