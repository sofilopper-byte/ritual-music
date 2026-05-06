# 🌒 RITUAL: Sincronización Sensorial de Spotify

**RITUAL** es una aplicación Full-Stack diseñada para transformar la gestión del tiempo en una experiencia sonora. Permite a los usuarios sincronizar sus bloques de tiempo específicos con listas de reproducción personalizadas de Spotify.

## Stack Tecnológico & Herramientas

Para este proyecto, integré habilidades de ingeniería con diseño de experiencia de usuario:

*   **Backend:** Construido con **Node.js** y **Express**.
*   **Integración de API:** Conexión completa con la **API de Spotify** para manejar autenticación (OAuth), tokens y gestión de 'Liked Songs'.
*   **Frontend:** Interfaz de alta fidelidad desarrollada con **HTML5**, **CSS3** (usando variables dinámicas y Flexbox/Grid) y **JavaScript** para la interactividad visual.
*   **Diseño UI/UX:** Prototipado avanzado en **Figma**, siguiendo un sistema de diseño con paletas de colores específicas (#FAD062, #A2BDF4, #2B885C) y tipografías como *Pixelify Sans* y *Cormorant Garamond*[cite: 4].
*   **Despliegue:** Autorizado para uso con **Render** y gestionado con **Git Credential Manager**[cite: 2, 3].

##  Estructura de Archivos del Proyecto

El repositorio está organizado para una integración inmediata con el servidor local:

*   `index.html`: Estructura principal dividida en 4 pantallas clave (Inicio, Opciones, Cargando y Resultado)[cite: 4].
*   `style.css`: Sistema de diseño completo con estados `.selected` para botones y diseño responsive optimizado para MacBook Air[cite: 4].
*   `/assets`: Contiene la identidad visual, incluyendo los GIFs de animación para la mascota de RITUAL[cite: 4].
*   `app.js` (o similar): Lógica de Node.js que procesa la "matemática" de las canciones basándose en la duración ingresada por el usuario[cite: 4].

## Funcionalidades Principales

1.  **Conexión Spotify:** Login seguro mediante el flujo de autorización de la API[cite: 4].
2.  **Selector de Ritual:** Interfaz de "marcador digital" para ingresar el tiempo (HH:MM) y una cuadrícula de géneros/moods (Zen, Foco, Energía, etc.)[cite: 4].
3.  **Algoritmo de Mezcla:** El backend calcula y suma la duración de las canciones para que encajen perfectamente en el bloque de tiempo del usuario[cite: 4].
4.  **Guardado Directo:** Opción para exportar la lista resultante directamente a la cuenta de Spotify del usuario[cite: 4].

---
*Desarrollado por Sofia Lopez  como parte de un proyecto de Ingeniería en Sistemas e Innovación Digital.* 
