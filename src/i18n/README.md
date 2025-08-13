# Guía de Internacionalización (i18n)

Esta guía explica cómo usar el sistema de internacionalización implementado con i18next en el proyecto BF Law.

## Estructura de Archivos

```
src/
├── locales/
│   ├── es/                 # Traducciones en español
│   │   ├── common.json     # Traducciones compartidas
│   │   ├── home.json       # Traducciones de la página de inicio
│   │   ├── about.json      # Traducciones de la página "sobre nosotros"
│   │   ├── professionals.json
│   │   ├── contact.json
│   │   └── clients.json
│   └── en/                 # Traducciones en inglés
│       ├── common.json
│       ├── home.json
│       ├── about.json
│       ├── professionals.json
│       ├── contact.json
│       └── clients.json
├── i18n/
│   └── index.js           # Configuración de i18next
└── hooks/
    └── usePageTranslation.js  # Hook personalizado
```

## Uso Básico

### 1. Hook useTranslation

```jsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t, i18n } = useTranslation(["home", "common"]);

  return (
    <div>
      <h1>{t("home:banner.title")}</h1>
      <p>{t("common:navigation.home")}</p>
      <button onClick={() => i18n.changeLanguage("en")}>
        Switch to English
      </button>
    </div>
  );
}
```

### 2. Hook Personalizado usePageTranslation

```jsx
import { usePageTranslation } from "../hooks/usePageTranslation";

function HomePage() {
  const { tPage, tCommon } = usePageTranslation();

  return (
    <div>
      <h1>{tPage("banner.title")}</h1>
      <button>{tCommon("buttons.contact")}</button>
    </div>
  );
}
```

## Componente LanguageSwitcher

El componente `LanguageSwitcher` permite cambiar entre español e inglés:

```jsx
import { LanguageSwitcher } from "../components/LanguageSwitcher";

function Header() {
  return (
    <header>
      <nav>...</nav>
      <LanguageSwitcher />
    </header>
  );
}
```

## Configuración

### Idioma por Defecto

El idioma por defecto es español (`es`). Se puede cambiar en `src/i18n/index.js`:

```javascript
i18n.init({
  // ...
  fallbackLng: "es",
  lng: "es",
  // ...
});
```

### Detección de Idioma

El sistema detecta el idioma en este orden:

1. localStorage (preferencia guardada del usuario)
2. Navegador del usuario
3. Idioma por defecto (español)

## Agregar Nuevas Traducciones

### 1. Para una nueva página:

1. Crear archivos JSON en `src/locales/es/` y `src/locales/en/`
2. Agregar el namespace en la configuración de i18next
3. Importar el archivo en `src/i18n/index.js`

### 2. Para traducciones compartidas:

Agregar las claves en `common.json` en ambos idiomas.

## Ejemplos de Uso

### Navegación

```jsx
// En Layout.jsx
const { t } = useTranslation('common');

<Link to="/">{t('navigation.home')}</Link>
<Link to="/estudio">{t('navigation.about')}</Link>
```

### Formularios

```jsx
// En Contact.jsx
const { t } = useTranslation('contact');

<input placeholder={t('form.name')} />
<button>{t('form.send')}</button>
```

### Mensajes Dinámicos

```jsx
// Con interpolación
const { t } = useTranslation("professionals");

<p>{t("team.experience", { years: 10 })}</p>;
```

## Buenas Prácticas

1. **Usar namespaces**: Organizar traducciones por página/sección
2. **Claves descriptivas**: `banner.title` en lugar de `title1`
3. **Traducciones compartidas**: Usar `common.json` para elementos reutilizables
4. **Consistencia**: Mantener la misma estructura en todos los idiomas
5. **Fallbacks**: Siempre tener un texto por defecto

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install react-i18next i18next i18next-browser-languagedetector

# Ejecutar en desarrollo
npm run dev
```

## Troubleshooting

### Problema: Traducciones no aparecen

- Verificar que el archivo JSON esté bien formateado
- Comprobar que el namespace esté registrado en la configuración
- Revisar la consola del navegador para errores

### Problema: Idioma no cambia

- Verificar que localStorage tenga permisos
- Comprobar la configuración de detección de idioma
- Reiniciar el navegador si es necesario
