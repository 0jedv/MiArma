# MiArma - Documentación de Cambios

## 📋 Índice
1. [Resumen General](#resumen-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Cambios Realizados](#cambios-realizados)
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
5. [Características Responsive](#características-responsive)
6. [Guía de Estilos CSS](#guía-de-estilos-css)

---

## 🎯 Resumen General

Este proyecto es un portfolio web responsive para **MiArma**, una artista digital ficticia. Se ha implementado un diseño moderno y adaptable utilizando Bootstrap 5.3.2 (solo CSS) y estilos personalizados.

### Características Principales:
- ✅ **Diseño 100% Responsive** - Se adapta a móviles, tablets y escritorio
- ✅ **Fondos dinámicos** - Sistema de cambio de imágenes de fondo
- ✅ **Carrusel de miniaturas** - Previsualización de fondos disponibles
- ✅ **Efectos hover modernos** - Transformaciones y animaciones suaves
- ✅ **Sin JavaScript de Bootstrap** - Solo CSS para mantener el código limpio

---

## 📁 Estructura del Proyecto

```
MiArma/
├── assets/
│   ├── img/
│   │   ├── paisaje2.png (fondo principal)
│   │   ├── paisaje2-mini.png (miniatura 400x250)
│   │   ├── paisaje3.jpg
│   │   ├── paisaje3-mini.jpg
│   │   ├── paisaje4.jpg
│   │   └── paisaje4-mini.jpg
│   └── documentacion/
│       └── README.md (este archivo)
├── css/
│   ├── bootstrap.min.css (Bootstrap 5.3.2)
│   └── styles.css (estilos personalizados)
├── js/
│   └── funcionalidades.js (lógica de cambio de fondos)
├── pages/
│   └── credits.html
└── index.html
```

---

## 🔧 Cambios Realizados

### 1. **Corrección del Footer CSS** ✅

**Problema:** El CSS del footer tenía errores de sintaxis (línea con guiones, selectores anidados incorrectamente).

**Solución:**
- Eliminé la línea con errores de sintaxis
- Desanidé los estilos del footer
- Agregué `flexbox` al body para que el footer se quede siempre al final

```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

footer {
    margin-top: auto;  /* Empuja el footer al final */
}
```

---

### 2. **Integración de Bootstrap (Solo CSS)** 🎨

**Archivos añadidos:**
- `css/bootstrap.min.css` - Descargado de CDN de Bootstrap 5.3.2

**Cambios en HTML:**
```html
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="css/bootstrap.min.css">
<!-- Custom CSS -->
<link rel="stylesheet" href="css/styles.css">
```

**Importante:** ❌ **NO se incluyó Bootstrap JS** por petición del usuario.

---

### 3. **Navbar Responsive** 📱

**Implementación:**
```html
<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">MiArma</a>
        <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
```

**Nota:** El botón hamburguesa no funciona sin Bootstrap JS. En móviles, el menú se puede ajustar con CSS personalizado si es necesario.

---

### 4. **Sistema de Fondos Responsive** 🖼️

**Propiedades CSS clave:**

```css
body {
    background-size: cover;           /* Cubre toda la pantalla */
    background-repeat: no-repeat;     /* No repite la imagen */
    background-position: center;      /* Centra la imagen */
    background-attachment: fixed;     /* Efecto parallax */
}
```

#### ¿Cómo funciona?

1. **`background-size: cover`** 
   - Escala la imagen para cubrir todo el viewport
   - Mantiene las proporciones originales
   - Puede cortar los bordes, pero el centro siempre es visible

2. **`background-position: center`**
   - Asegura que el centro de la imagen siempre esté visible
   - Si se corta, lo hace por los lados, no por el centro

3. **`background-attachment: fixed`**
   - Crea efecto parallax (imagen fija al hacer scroll)
   - En móviles se cambia a `scroll` para mejor rendimiento

**Clases de fondos:**
```css
.fondo2 { background-image: url("../assets/img/paisaje2.png"); }
.fondo3 { background-image: url("../assets/img/paisaje3.jpg"); }
.fondo4 { background-image: url("../assets/img/paisaje4.jpg"); }
```

---

### 5. **Carrusel de Miniaturas Horizontal** 🎠

**Características:**
- ✅ Disposición horizontal sin scroll
- ✅ Efecto hover con `transform: scale(1.2)`
- ✅ Z-index para que la imagen hover aparezca por encima
- ✅ Responsive con tamaños adaptativos

**HTML:**
```html
<div class="carousel-thumbnails">
    <div class="thumbnail-item">
        <img src="assets/img/paisaje2-mini.png" alt="Paisaje 2" class="img-thumbnail-custom">
    </div>
    <div class="thumbnail-item">
        <img src="assets/img/paisaje3-mini.jpg" alt="Paisaje 3" class="img-thumbnail-custom">
    </div>
    <div class="thumbnail-item">
        <img src="assets/img/paisaje4-mini.jpg" alt="Paisaje 4" class="img-thumbnail-custom">
    </div>
</div>
```

**CSS:**
```css
.carousel-thumbnails {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: nowrap;        /* Una sola línea horizontal */
    margin-top: 30px;
}

.thumbnail-item {
    position: relative;
    overflow: hidden;         /* Oculta la parte que se sale al hacer zoom */
    border-radius: 10px;
    cursor: pointer;
    z-index: 1;              /* Z-index normal */
}

.thumbnail-item:hover {
    z-index: 10;             /* Sube por encima al hacer hover */
}

.img-thumbnail-custom {
    width: 320px;
    height: 200px;
    transition: transform 0.3s ease;
}

.thumbnail-item:hover .img-thumbnail-custom {
    transform: scale(1.2);   /* Zoom de 20% */
}
```

#### ¿Por qué funciona el efecto hover?

1. **`overflow: hidden`** en `.thumbnail-item` - Oculta la parte de la imagen que se sale del contenedor al hacer zoom
2. **`z-index: 10`** en hover - Hace que la miniatura aparezca por encima de las demás
3. **`transform: scale(1.2)`** - Agranda la imagen un 20% desde el centro
4. **`transition: transform 0.3s ease`** - Animación suave de 0.3 segundos

---

## 💻 Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **Bootstrap 5.3.2** - Framework CSS (solo estilos, sin JS)
- **JavaScript** - Funcionalidad de cambio de fondos (funcionalidades.js)

### Características CSS Modernas
- Flexbox para layouts
- CSS Transitions para animaciones
- Media Queries para responsive
- Transform para efectos hover
- Z-index para capas

---

## 📱 Características Responsive

### Breakpoints

#### 🖥️ **Desktop (> 768px)**
- Navbar horizontal completa
- Miniaturas: 320x200px
- Espaciado generoso
- Background fixed (efecto parallax)

#### 📱 **Tablet (≤ 768px)**
```css
@media (max-width: 768px) {
    .navbar-brand {
        font-size: 1.2rem;
    }
    
    .img-thumbnail-custom {
        width: 240px;
        height: 150px;
    }
}
```

#### 📱 **Móvil (≤ 576px)**
```css
@media (max-width: 576px) {
    body {
        background-attachment: scroll;  /* Mejor rendimiento */
    }
    
    .img-thumbnail-custom {
        width: 180px;
        height: 112px;
    }
    
    .carousel-thumbnails {
        gap: 10px;  /* Menos espacio entre miniaturas */
    }
}
```

---

## 🎨 Guía de Estilos CSS

### Colores
```css
/* Header */
background-color: rgba(255, 255, 255, 0.95);  /* Blanco semi-transparente */

/* Footer */
background-color: rgba(255, 255, 255, 0.7);   /* Blanco más transparente */
color: #333;                                   /* Gris oscuro para texto */

/* Enlaces */
color: #333;                                   /* Normal */
color: #000;                                   /* Hover */
```

### Sombras
```css
/* Header */
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

/* Botón normal */
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

/* Botón hover */
box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);

/* Miniatura normal */
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

/* Miniatura hover */
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
```

### Transiciones
```css
/* Estándar para la mayoría de elementos */
transition: all 0.3s ease;

/* Específica para transforms */
transition: transform 0.3s ease;

/* Múltiples propiedades */
transition: color 0.3s ease, opacity 0.3s ease;
```

### Border Radius
```css
/* Botón principal */
border-radius: 50px;  /* Completamente redondeado */

/* Miniaturas */
border-radius: 10px;  /* Esquinas suaves */
```

---

## 🚀 Cómo Probar la Responsividad

1. Abre `index.html` en tu navegador
2. Presiona `F12` para abrir DevTools
3. Haz clic en el ícono de dispositivo móvil (Toggle Device Toolbar)
4. Prueba diferentes tamaños:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

---

## 📝 Notas Importantes

### ⚠️ Sin Bootstrap JavaScript
Por petición del usuario, **NO se incluyó Bootstrap JS**. Esto significa:
- ❌ El menú hamburguesa no funciona en móviles
- ✅ El sitio es más ligero y rápido
- ✅ No hay dependencias de JavaScript externas

### 🎯 Decisiones de Diseño

1. **Miniaturas más pequeñas (320x200)** - Para evitar scroll horizontal
2. **Z-index en hover** - Para que la imagen ampliada aparezca sobre las demás
3. **Background fixed solo en desktop** - Mejor rendimiento en móviles
4. **Flexbox en lugar de Grid** - Mayor compatibilidad con navegadores antiguos

---

## 📄 Licencia

Landing Page © MiArma - Licenciada bajo CC BY-NC-SA 4.0

Proyecto Integrado de Artista Digital Ficticia | Desarrollado por Rubén Ojeda y Rafael Verdugo

---

**Última actualización:** 2 de diciembre de 2025
