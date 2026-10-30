# ✨ Lilo Celis | Joyas con estilo

Página web de marketing digital y escaparate visual para **Lilo Celis**.
Diseño moderno, juvenil y de alto impacto, 100% en español y totalmente
responsive (computadores y celulares).

> **Sin carrito ni pasarela de pagos.** El único canal de contacto y conversión
> es WhatsApp: **+57 315 298 5298**, con mensaje predefinido que incluye el
> nombre exacto de cada joya.

---

## 🚀 Cómo verla

No necesita compilación. Basta con abrir `index.html` en el navegador, o servir
la carpeta con cualquier servidor estático:

```bash
# Opción 1: simplemente abre index.html con doble clic

# Opción 2: servidor local (recomendado)
npx serve .        # o: python -m http.server 8080
```

## 📁 Estructura

```
lilo-celis-web/
├── index.html            # Página principal (hero, productos, beneficios, footer)
├── css/styles.css        # Estilos completos y responsive
├── js/products-data.js   # 📦 Catálogo de productos (edita aquí)
├── js/app.js             # Lógica: filtros, modal, stock, WhatsApp, panel admin
└── images/               # 69 fotos de productos con nombres descriptivos (SEO)
```

## 📦 Gestionar el catálogo (productos)

Todo el catálogo vive en **`js/products-data.js`**. Cada producto tiene:

```js
{
  id: "p01",                          // identificador único
  nombre: "Aro cuff dorado con cristales",
  categoria: "aretes",                // aretes | pulseras | conjuntos
  imagen: "images/aro-cuff-dorado-cristales.jpg",
  precio: "$ 55.000",                 // visible en tarjeta y modal (null = "por consultar")
  alt: "Texto alternativo descriptivo (SEO)",   // obligatorio por accesibilidad
  descripcion: "Copia breve de marketing...",
  tags: ["dorado", "con piedras", "moderno"],
  disponible: true                    // estado inicial: true / false
}
```

> 💰 Los 69 precios fueron leídos de las etiquetas impresas en las fotos
> ($ 25.000 – $ 98.000) y se muestran como texto propio de la ficha, por lo que
> **nunca quedan ocultos** aunque la foto se recorte. El chip de categoría se
> ubica arriba a la derecha para no tapar la etiqueta de precio de la foto
> (siempre en la esquina inferior derecha).

- Para **agregar un producto**: copia un bloque, cambia el `id`, coloca su foto
  en `images/` y listo. El filtro de categorías se genera solo.
- Para **renombrar una categoría**, usa siempre el mismo valor en todos los
  productos de esa categoría.

## 🟢 Gestión de stock (Disponible / Agotado)

Tres formas de gestionarlo, de más fácil a más avanzada:

1. **Panel de administración (recomendado):** entra a la página y agrega `#admin`
   al final de la URL (o toca el botón discreto «⚙️ Admin» del footer). PIN
   por defecto: **1234**. Allí puedes:
   - Marcar cada joya como Disponible/Agotado con un interruptor.
   - Cambiar el PIN de administración.
   - Restaurar el stock original del catálogo.
   - **Exportar JSON** con el estado actual para llevarlo a otro dispositivo.
2. **Editar el archivo:** cambia `disponible: true` → `false` en
   `js/products-data.js` y publica de nuevo. (Ideal si quieres que el estado
   sea el mismo para todos los visitantes.)
3. **LocalStorage:** los cambios del panel se guardan con la clave
   `lilo_stock_v1` en el navegador del administrador y tienen prioridad sobre
   el archivo del catálogo.

En la interfaz:
- Joya disponible → etiqueta **verde** «✓ Disponible» y botón verde de WhatsApp.
- Joya agotada → etiqueta **roja** «✕ Agotado», imagen desaturada y botón
  deshabilitado («Avísame cuando vuelva»).

## 💬 WhatsApp

- Número configurado: `573152985298` (Colombia).
- Cada joya abre WhatsApp con mensaje automático:
  *«¡Hola, Lilo Celis! 👋 Estoy interesado/a en **[Nombre del Producto]** y
  me gustaría recibir más información.»*
- El botón flotante (esquina inferior derecha) está visible en todo momento.
- Para cambiar el número: busca `573152985298` en `index.html` y `js/app.js`.

## ⚡ Rendimiento, accesibilidad y SEO

- Imágenes con `loading="lazy"`, `width`/`height` (evita saltos de layout) y
  textos `alt` descriptivos en español.
- Tipografías con `preconnect` y `display=swap` (no bloquean el pintado).
- HTML semántico (`header`, `main`, `section`, `footer`), `aria-labels`,
  foco visible y `prefers-reduced-motion` respetado.
- Meta description, Open Graph, favicon SVG y datos estructurados
  (`schema.org/Store`) listos para posicionar.

## 🛠 Tecnologías

HTML5 · CSS3 (variables, grid, animaciones) · JavaScript vanilla (sin
dependencias ni build). 100% compatible con GitHub Pages, Netlify, Vercel o
cualquier hosting estático.
