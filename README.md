# AvengersApp

AvengersApp es una aplicación desarrollada en React que permite a los usuarios explorar información sobre personajes de la franquicia de los Vengadores.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Arquitectura](#arquitectura)
- [Dependencias](#dependencias)
- [Scripts Disponibles](#scripts-disponibles)
- [Información Adicional](#información-adicional)

## Requisitos

Antes de empezar, asegúrate de tener instalados los siguientes programas:

- Node.js (versión 17.0 o superior)
- npm (versión 18.0 o superior)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/srg1995/avengersapp.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd avengersapp
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

## Ejecución

Para iniciar la aplicación en modo de desarrollo, usa el siguiente comando:

```bash
npm start
```

Esto abrirá la aplicación en tu navegador predeterminado en la dirección [http://localhost:3000](http://localhost:3000).

Para crear una versión optimizada para producción, ejecuta:

```bash
npm run build
```

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
avengersapp/
├── public/
│   ├── assets/
│   ├── images/
│   └── icons.js
├── src/
│   ├── assets/
│   ├── common/
│   │   ├── context/
│   │   ├── hook/
│   │   └── utils/
│   ├── components/
│   ├── pages/
│   │   ├── characterDetail
│   ├── services/
│   │   └── adapters/
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── routes.js
│   └── variables.css
├── .gitignore
├── package.json
├── README.md
└── ...
```

### Descripción de Carpetas

- **public/**: Contiene archivos estáticos como imágenes y el archivo `index.html`.
- **src/**: Contiene todo el código fuente de la aplicación.
  - **assets/**: Archivos de recursos como imágenes y estilos.
  - **common/**: Componentes y utilidades comunes utilizados en la aplicación.
    - **context/**: Contiene los providers de contextos.
    - **hook/**: Contiene hooks personalizados como `useCarousel`, `useDebounce`, y `useFilterCharacters`.
    - **utils/**: Utilidades y funciones de ayuda.
  - **components/**: Componentes reutilizables de la aplicación.
  - **pages/**: Páginas de la aplicación.
  - **services/**: Servicios y adaptadores para interactuar con APIs externas.

## Arquitectura

La aplicación sigue una arquitectura basada en componentes y se estructura en módulos que facilitan la escalabilidad y mantenibilidad del código. Se emplea Context API para la gestión del estado global.

- **React**: Librería principal para la construcción de interfaces de usuario.
- **React Router DOM**: Utilizado para la gestión de rutas dentro de la aplicación.
- **Hooks**: Para manejar la lógica y estados reutilizables.

## Dependencias

El proyecto utiliza las siguientes dependencias principales:

- **react**: Librería para construir interfaces de usuario.
- **react-dom**: Librería para manejar el DOM en aplicaciones React.
- **react-router-dom**: Para el manejo de rutas en la aplicación.
- **md5**: Para generar hashes MD5.

Además, incluye dependencias de desarrollo como **@testing-library/react** para pruebas unitarias.

## Scripts Disponibles

En el archivo `package.json`, se definen los siguientes scripts:

- **start**: Inicia la aplicación en modo de desarrollo.
- **build**: Construye la aplicación para producción.
- **test**: Ejecuta las pruebas unitarias.
- **eject**: Expone la configuración completa de Webpack y Babel.
