# 🌐 Sitio Uagro - Frontend

Este es el frontend del proyecto `Sitio`, una aplicación web moderna construida con **React 19**, **Vite**, y **Tailwind CSS**, completamente **responsiva** y optimizada para pantallas pequeñas (móviles) y grandes (escritorio). El diseño y la experiencia de usuario están cuidadosamente pensados para ser rápidos, intuitivos y visualmente atractivos.

---

## 🚀 Tecnologías principales

- ⚛️ [React 19](https://react.dev/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🔀 [React Router DOM v7](https://reactrouter.com/)
- 📦 [Axios](https://axios-http.com/)
- 🎠 [Swiper.js](https://swiperjs.com/react) (carruseles)
- 🧩 [React Icons](https://react-icons.github.io/react-icons/)
- 🔤 [Font Awesome](https://fontawesome.com/)
- 🦴 [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)
- 🖼️ [react-lazy-load-image-component](https://github.com/Aljullu/react-lazy-load-image-component)

---

## 📦 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ElianGarcia01/sitioUagro.git
   cd sitioUagro

   ```

2. Instala las dependencias:

npm install

3. Ejecuta el proyecto en desarrollo:

npm run dev

4. Abre tu navegador en http://localhost:5173

🔧Scripts disponibles

    npm run dev → Levanta el servidor de desarrollo con Vite.

    npm run build → Genera una versión optimizada para producción.

    npm run preview → Previsualiza el build generado localmente.

    npm run lint → Revisa el código con ESLint.

🧱Estructura del proyecto

src/
├── assets/ # Imágenes, fuentes, íconos, etc.
├── components/ # Componentes reutilizables (Navbar, Footer, Card, etc.)
├── layouts/ # Plantillas principales reutilizables
├── pages/ # Vistas principales (Home, About, Contact, etc.)
├── routes/ # Configuración de rutas con React Router
├── services/ # Funciones de acceso a APIs (axios)
├── styles/ # Estilos globales (Tailwind config, etc.)
├── App.jsx # Componente raíz
└── main.jsx # Punto de entrada

🧭 Navegación y diseño responsivo

La navegación está gestionada por React Router v7 con rutas declaradas en routes/index.js.

El diseño se adapta automáticamente a dispositivos móviles y de escritorio mediante clases utilitarias de Tailwind. También se implementan buenas prácticas como:

    Menú hamburguesa en dispositivos pequeños.

    Grillas adaptativas (grid-cols-1 md:grid-cols-2 lg:grid-cols-4, etc.).

    Carruseles responsivos con Swiper.

    Imágenes con carga diferida (LazyLoadImage) y skeletons mientras cargan.

🌐 Variables de entorno

Crea un archivo .env en la raíz del proyecto con:

VITE_API_URL=https://strapi.uagro.mx

Esta URL se utiliza en src/services/ para consumir el backend.

💡 Consumo de la API

Se utiliza axios para conectar con el backend. En src/services/api.js están las funciones base:

import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

# Solicitud API
export const getNivelesSuperiores = () =>
  axios.get(`${API}/niveles-superiores?limit=50`)

export const getServiciosImagenes = () =>
  axios.get(`${API}/servicios-imagenes`)


📱 Responsividad

El sitio está optimizado para:

    ✅ Smartphones (320px+)

    ✅ Tablets

    ✅ Laptops y pantallas grandes

Todos los componentes han sido testeados con clases responsive de Tailwind (sm, md, lg, xl, 2xl).

🛠️ Despliegue

Este proyecto puede ser desplegado fácilmente en plataformas como:

    Vercel

    Netlify

    Render

    LPS (Local private server)

Para generar la build de producción:

npm run build

Esto creará la carpeta dist/.

📁 Archivos importantes

    tailwind.config.js → Configuración extendida de Tailwind

    .env → Variables de entorno

    .eslintrc → Reglas de calidad de código

    vite.config.js → Configuración base del proyecto

👤 Autor

Este proyecto fue desarrollado por Elian Garcia Tellez (ElianDev). Si tienes dudas o deseas colaborar, ¡siéntete libre de abrir un issue o un pull request!
