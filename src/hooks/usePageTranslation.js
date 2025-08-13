import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

/**
 * Hook personalizado para obtener traducciones específicas de cada página
 * Automáticamente detecta la ruta actual y carga el namespace correspondiente
 */
export const usePageTranslation = () => {
  const location = useLocation();

  // Mapear rutas a namespaces
  const getNamespaceFromPath = (pathname) => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/estudio")) return "about";
    if (pathname.startsWith("/profesionales")) return "professionals";
    if (pathname.startsWith("/contacto")) return "contact";
    if (pathname.startsWith("/clientes")) return "clients";
    return "common";
  };

  const currentNamespace = getNamespaceFromPath(location.pathname);

  // Siempre incluir 'common' para traducciones compartidas
  const { t, i18n } = useTranslation([currentNamespace, "common"]);

  return {
    t,
    i18n,
    currentNamespace,
    // Helper function para traducciones específicas de la página actual
    tPage: (key) => t(`${currentNamespace}:${key}`),
    // Helper function para traducciones comunes
    tCommon: (key) => t(`common:${key}`),
  };
};
