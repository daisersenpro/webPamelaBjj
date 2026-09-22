# Pamela BJJ

Sitio web estático para Pamela BJJ, profesora de Brazilian Jiu-Jitsu en Chile. La página presenta su propuesta de entrenamiento, las etapas de graduación y un formulario de contacto que envía las consultas directamente a WhatsApp.

## Tecnologías

- React
- Vite
- CSS responsivo
- `react-icons`

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/daisersenpro/webPamelaBjj.git
cd webPamelaBjj
```

Instala las dependencias:

```bash
npm install
```

## Desarrollo local

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Comandos

```bash
npm run dev      # Servidor local con recarga automática
npm run build    # Genera la versión de producción en dist
npm run preview  # Previsualiza la versión compilada
npm run lint     # Revisa el código con Oxlint
```

## Publicación en Netlify

Configura Netlify con estos valores:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Netlify puede desplegar el proyecto directamente desde la rama `main` de GitHub.

## Configuración de contacto

El número de WhatsApp se configura en `src/App.jsx`, en la constante `WHATSAPP_NUMBER`. Los formularios y botones generan automáticamente un mensaje con los datos de la persona y lo abren en WhatsApp.

En el mismo archivo se encuentran los enlaces de Instagram, Facebook, Threads y LinkedIn. Actualiza las URLs si Pamela cambia sus perfiles o si se confirma una página específica de Facebook.

## Estructura principal

```text
src/
├── App.jsx       # Estructura de la página y formulario de contacto
├── App.css       # Diseño, colores y responsive
├── index.css     # Estilos base
└── main.jsx      # Entrada de React
```

La carpeta `Maquetacion/` es una referencia visual local y está excluida del repositorio mediante `.gitignore`. También se excluyen `node_modules/` y `dist/`.

## Licencia

Proyecto privado para Pamela BJJ.
