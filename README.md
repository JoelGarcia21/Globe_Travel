## GlobeTravel

GlobeTravel fue actualizado con nuevas tecnologias **Bootstrap**, aplicando buenas prácticas de diseño, accesibilidad y técnicas modernas de CSS.

---

## Decisiones de diseño

### 1. Uso de diseño oscuro como base
Se eligió un **tema oscuro como diseño principal** debido a que:

- Mejora la estética visual para contenido turístico moderno
- Reduce fatiga visual en navegación prolongada
- Permite resaltar mejor imágenes de destinos

Se implementó mediante **CSS Variables**, lo que permite cambiar fácilmente entre temas.

---

### 2. Sistema de variables CSS (Custom Properties)

Se utilizó `:root` para centralizar el diseño:

- Colores principales
- Fondos
- Tipografía
- Estados (hover, active) 

---

### 3. Estructura modular del CSS

El CSS se separa por páginas:

- `agenciasstyle.css`
- `blogstyle.css`
- `contactenos.css`
- etc.

---

## Funcionalidades implementadas

### Agencias
- Tarjetas con efecto **flip 3D**
- Rating visual con estrellas CSS
- Hover interactivo

---

### Contacto
- Validación en tiempo real con `:valid` y `:invalid`
- Floating labels (UX moderno)
- Spinner CSS en botón de envío
- Modal de confirmación con `:target`

---

### Precios
- Tabla comparativa con hover
- Tooltips informativos hechos con jQuery
- Interacciones sin JavaScript

---

### Blog
- Layout tipo revista con **CSS Grid avanzado**
- Sistema de filtros usando `jQuery`
- Comentarios con avatares generados
- Animación tipo scroll reveal con keyframes

---

## Decisiones técnicas importantes

### Nueva implementacion Bootsatrap, jQuery
Se añadio Bootstrap entre otras librerías externas para:

- Desarrollo Rápido y Responsivo
- Compatibilidad entre Navegadores
- Soporte robusto
- Animaciones y efectos visuales

---


### ✔ Accesibilidad básica
- Uso de etiquetas semánticas (`header`, `main`, `section`)
- Inputs con `label` asociado
- Estados visuales en focus/hover

---

## Resultado final

El proyecto simula una **web profesional de turismo moderna**, con:

- UI consistente
- Animaciones suaves
- Componentes reutilizables
- Diseño responsive

## Cómo correr el proyecto
1. Abrí la carpeta en **Visual Studio Code**
2. Instalá la extensión **Live Server**
3. Hacé clic derecho en `index.html` → **"Open with Live Server"**
