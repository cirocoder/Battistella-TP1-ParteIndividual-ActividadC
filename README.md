# TP1 - Unidad 4 | Parte individual - Actividad C

Aplicación web desarrollada como parte del **Trabajo Práctico 1 de la Unidad 4**, en su modalidad individual.

> **Consigna:** “C) Realizar el siguiente ABM con almacenamiento local.”

## Descripción

La aplicación implementa un ABM (Alta, Baja y Modificación) de contactos. Permite cargar, consultar, editar y eliminar contactos, manteniendo la información en el almacenamiento local del navegador mediante `localStorage`.

## Funcionalidades

- **Alta:** agregar un contacto con nombre, email y teléfono.
- **Baja:** eliminar un contacto de la lista.
- **Modificación:** editar los datos de un contacto existente.
- **Consulta:** visualizar todos los contactos registrados.
- **Búsqueda:** filtrar contactos por nombre, email o teléfono.
- **Persistencia local:** conservar los contactos al recargar la página en el mismo navegador.

## Tecnologías utilizadas

- [React](https://react.dev/)
- JavaScript
- HTML y CSS Modules
- `localStorage` del navegador
- Create React App

## Requisitos

- [Node.js](https://nodejs.org/) y npm instalados.
- Un navegador web moderno.

## Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/cirocoder/Battistella-TP1-ParteIndividual-ActividadC.git
   ```

2. Ingresar al directorio del proyecto:

   ```bash
   cd Battistella-TP1-ParteIndividual-ActividadC
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Iniciar la aplicación:

   ```bash
   npm start
   ```

5. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm start` | Ejecuta la aplicación en modo desarrollo. |
| `npm test` | Ejecuta las pruebas configuradas por Create React App. |
| `npm run build` | Genera una versión optimizada para producción en `build/`. |

## Estructura principal

```text
src/
├── App.js                         # Estado, ABM y búsqueda de contactos
├── index.js                       # Punto de entrada de React
├── index.css                      # Estilos globales
├── components/
│   ├── ContactForm.js             # Alta y modificación
│   └── ContactTable.js            # Consulta y acciones de cada contacto
└── styles/
    ├── App.module.css
    ├── ContactForm.module.css
    └── ContactTable.module.css
```

## Almacenamiento local

Los contactos se guardan en `localStorage` con la clave `contacts`. Por tratarse de almacenamiento local, los datos:

- quedan asociados al navegador y al dispositivo donde se ejecuta la aplicación;
- no se sincronizan con otros usuarios o dispositivos;
- pueden eliminarse al limpiar los datos del sitio desde el navegador.

## Autor

**Ciro Battistella**  
Ingeniería de Software 1 - TP1, Unidad 4 - Parte individual
