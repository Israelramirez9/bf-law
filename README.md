# React + Vite

Este proyecto utiliza Vite como herramienta de construcción para React, proporcionando un entorno de desarrollo rápido con Hot Module Replacement (HMR) y reglas de ESLint configuradas.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (incluido con Node.js)

## Instalación y Configuración

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

### 1. Clona o descarga el proyecto

```bash
git clone [URL_DEL_REPOSITORIO]
cd [NOMBRE_DEL_PROYECTO]
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Ejecuta el servidor de desarrollo

```bash
npm run dev
```

El proyecto se ejecutará por defecto en `http://localhost:5173`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta ESLint para revisar el código

## Plugins Oficiales Disponibles

Este template soporta dos plugins oficiales para React:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)** - Utiliza [Babel](https://babeljs.io/) para Fast Refresh
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)** - Utiliza [SWC](https://swc.rs/) para Fast Refresh

## Configuración de ESLint

Para aplicaciones en producción, se recomienda usar TypeScript con reglas de lint type-aware habilitadas. Consulta el [template de TypeScript](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para información sobre cómo integrar TypeScript y [`typescript-eslint`](https://typescript-eslint.io) en tu proyecto.

## Estructura del Proyecto

```
├── public/          # Archivos estáticos
├── src/             # Código fuente
│   ├── components/  # Componentes React
│   ├── App.jsx      # Componente principal
│   └── main.jsx     # Punto de entrada
├── index.html       # Template HTML
├── package.json     # Dependencias y scripts
└── vite.config.js   # Configuración de Vite
```

## Desarrollo

Una vez que el servidor esté ejecutándose, cualquier cambio en los archivos se reflejará automáticamente en el navegador gracias al Hot Module Replacement (HMR).

## Construcción para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos generados se encontrarán en la carpeta `dist/`.
