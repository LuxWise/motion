# Proyecto de Práctica con Next.js

Este proyecto es una aplicación práctica construida con [Next.js](https://nextjs.org), desarrollada como parte de mis estudios en ingeniería para explorar el desarrollo web con frameworks modernos. El proyecto se inicializó con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) y sirve como base para entender la renderización del lado del servidor, la integración de APIs y el diseño basado en componentes en Next.js.

## Comenzando

Para empezar a trabajar en el proyecto, clona el repositorio e instala las dependencias, luego ejecuta el servidor de desarrollo:

```bash
npm install
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Una vez que el servidor esté en funcionamiento, abre http://localhost:3000 en tu navegador para ver el proyecto. Puedes comenzar a editar el contenido modificando app/page.tsx, el cual actualizará automáticamente la página con los cambios.

Este proyecto también integra next/font para optimizar y cargar fuentes personalizadas, como Geist de Vercel, lo que brinda a la aplicación un estilo único mientras mejora su rendimiento.


## Librerías y Herramientas Utilizadas

Este proyecto utiliza varias librerías clave para añadir funcionalidades específicas y mejorar la experiencia de desarrollo general:

- **Axios**: Utilizado para realizar solicitudes HTTP, facilitando la conexión entre el frontend y una API para obtener o enviar datos.
- **Framer Motion**: Una biblioteca popular para añadir animaciones. Este proyecto lo usa para hacer que la interfaz sea más interactiva y dinámica con animaciones fluidas.
- **React Data Table Component**: Una solución de tabla de datos poderosa para mostrar información de forma estructurada, con soporte para características como ordenamiento y paginación.
- **React Icons**: Una biblioteca con una amplia gama de íconos, que usamos para mejorar visualmente botones y enlaces.
- **React Loader Spinner**: Proporciona spinners de carga personalizables, ayudando a mejorar la experiencia del usuario al indicar estados de carga.
- **Styled Components**: Una biblioteca CSS-in-JS que nos permite escribir CSS modular y de alcance limitado, manteniendo los estilos cerca de los componentes que afectan.
- **Tailwind CSS**: Un framework CSS basado en utilidades que simplifica el diseño con clases predefinidas, permitiendo un sistema de diseño consistente y altamente adaptable.


## Despliegue en Vercel

Desplegar este proyecto es sencillo con la plataforma Vercel. Vercel, creada por los desarrolladores de Next.js, ofrece despliegue optimizado para aplicaciones Next.js.

