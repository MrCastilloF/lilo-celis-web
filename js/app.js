/* ============================================================
   LILO CELIS — Lógica de la página
   Renderizado de productos, filtros, stock (LocalStorage),
   panel de administración y enlaces a WhatsApp.
   ============================================================ */
(function () {
  "use strict";

  const WHATSAPP_NUMERO = "573152985298"; // +57 315 298 5298 (Colombia)
  const CLAVE_STOCK = "lilo_stock_v1";
  const CLAVE_PIN = "lilo_admin_pin"; // PIN editable desde el panel
  const PIN_POR_DEFECTO = "1234";

  /* ---------------- Estado de stock ---------------- */

  function leerStock() {
    try {
      return JSON.parse(localStorage.getItem(CLAVE_STOCK)) || {};
    } catch (e) {
      return {};
    }
  }

  function guardarStock(stock) {
    try {
      localStorage.setItem(CLAVE_STOCK, JSON.stringify(stock));
    } catch (e) { /* modo privado del navegador */ }
  }

  function estaDisponible(producto) {
    const stock = leerStock();
    if (Object.prototype.hasOwnProperty.call(stock, producto.id)) {
      return !!stock[producto.id];
    }
    return producto.disponible !== false;
  }

  /* ---------------- Utilidades ---------------- */

  function slug(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function mensajeWhatsApp(nombreProducto) {
    const base = "¡Hola, Lilo Celis! 👋";
    return nombreProducto
      ? `${base} Estoy interesado/a en *${nombreProducto}* y me gustaría recibir más información.`
      : `${base} Me encantaría conocer más sobre sus joyas y ver disponibilidad.`;
  }

  function enlaceWhatsApp(nombreProducto) {
    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensajeWhatsApp(nombreProducto))}`;
  }

  function esc(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
  }

  /* ---------------- Renderizado de productos ---------------- */

  const contenedorGrid = document.getElementById("grid-productos");
  const contenedorFiltros = document.getElementById("filtros");
  let categoriaActiva = "todos";
  let observador = null;

  function crearObservador() {
    if (!("IntersectionObserver" in window)) return null;
    return new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }

  function crearTarjeta(producto, indice) {
    const disponible = estaDisponible(producto);
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta" + (disponible ? "" : " agotada");
    tarjeta.dataset.categoria = producto.categoria;
    tarjeta.style.transitionDelay = Math.min(indice * 40, 320) + "ms";

    tarjeta.innerHTML = `
      <div class="tarjeta-img">
        <span class="badge ${disponible ? "badge-disponible" : "badge-agotado"}">
          ${disponible ? "✓ Disponible" : "✕ Agotado"}
        </span>
        <span class="badge badge-categoria">${esc(producto.categoria)}</span>
        <img src="${esc(producto.imagen)}" alt="${esc(producto.alt)}" loading="lazy" width="600" height="600">
      </div>
      <div class="tarjeta-cuerpo">
        <h3>${esc(producto.nombre)}</h3>
        ${producto.precio
          ? `<p class="precio">Precio: <strong>${esc(producto.precio)}</strong></p>`
          : `<p class="precio consultar">🏷️ Precio por consultar</p>`}
        <p class="descripcion">${esc(producto.descripcion)}</p>
        <div class="etiquetas-estilo">
          ${(producto.tags || []).map((t) => `<span class="etiqueta-estilo">${esc(t)}</span>`).join("")}
        </div>
        <button class="btn ${disponible ? "btn-whatsapp" : "btn-secundario deshabilitado"}"
                data-id="${esc(producto.id)}"
                ${disponible ? "" : 'aria-disabled="true" disabled'}
                aria-label="${disponible
                  ? "Consultar " + esc(producto.nombre) + " por WhatsApp"
                  : esc(producto.nombre) + " está agotado"}">
          ${disponible ? "💬 Preguntar por WhatsApp" : "🚫 Agotado por ahora"}
        </button>
      </div>`;

    // Abrir modal de detalle al tocar la tarjeta (excepto el botón)
    tarjeta.querySelector(".tarjeta-img").addEventListener("click", () => abrirModal(producto));
    tarjeta.querySelector("h3").style.cursor = "pointer";
    tarjeta.querySelector("h3").addEventListener("click", () => abrirModal(producto));

    const boton = tarjeta.querySelector("button");
    if (disponible) {
      boton.addEventListener("click", () => {
        window.open(enlaceWhatsApp(producto.nombre), "_blank", "noopener");
      });
    }
    return tarjeta;
  }

  function renderProductos() {
    if (!contenedorGrid) return;
    contenedorGrid.innerHTML = "";
    observador = crearObservador();

    const lista = LILO_PRODUCTOS.filter(
      (p) => categoriaActiva === "todos" || p.categoria === categoriaActiva
    );

    if (lista.length === 0) {
      contenedorGrid.innerHTML =
        '<p class="vacio">No hay productos en esta categoría por el momento. ¡Escríbenos y te avisamos! 💜</p>';
      return;
    }

    lista.forEach((producto, i) => {
      const tarjeta = crearTarjeta(producto, i);
      contenedorGrid.appendChild(tarjeta);
      if (observador) observador.observe(tarjeta);
      else tarjeta.classList.add("visible");
    });
  }

  function renderFiltros() {
    if (!contenedorFiltros) return;
    const categorias = [...new Set(LILO_PRODUCTOS.map((p) => p.categoria))];
    const etiquetas = { todos: "✨ Todos" };

    const chips = ["todos", ...categorias].map((cat) => {
      const etiqueta =
        etiquetas[cat] ||
        cat.charAt(0).toUpperCase() + cat.slice(1);
      return `<button class="filtro ${cat === categoriaActiva ? "activo" : ""}" data-cat="${esc(cat)}">${esc(etiqueta)}</button>`;
    });

    contenedorFiltros.innerHTML = chips.join("");
    contenedorFiltros.querySelectorAll(".filtro").forEach((chip) => {
      chip.addEventListener("click", () => {
        categoriaActiva = chip.dataset.cat;
        contenedorFiltros.querySelectorAll(".filtro").forEach((c) => c.classList.remove("activo"));
        chip.classList.add("activo");
        renderProductos();
      });
    });
  }

  /* ---------------- Contador de productos ---------------- */

  function actualizarContadores() {
    const total = LILO_PRODUCTOS.length;
    const disponibles = LILO_PRODUCTOS.filter(estaDisponible).length;
    document.querySelectorAll("[data-contador='total']").forEach((el) => {
      el.textContent = total;
    });
    document.querySelectorAll("[data-contador='disponibles']").forEach((el) => {
      el.textContent = disponibles;
    });
  }

  /* ---------------- Modal de producto ---------------- */

  const modal = document.getElementById("modal-producto");
  let productoActual = null;

  function abrirModal(producto) {
    if (!modal) return;
    productoActual = producto;
    const disponible = estaDisponible(producto);

    modal.querySelector(".modal-img").src = producto.imagen;
    modal.querySelector(".modal-img").alt = producto.alt;
    modal.querySelector(".modal-nombre").textContent = producto.nombre;
    modal.querySelector(".modal-descripcion").textContent = producto.descripcion;
    modal.querySelector(".modal-categoria").textContent = producto.categoria;

    const precioModal = modal.querySelector(".modal-precio");
    if (producto.precio) {
      precioModal.innerHTML = `Precio: <strong>${esc(producto.precio)}</strong>`;
      precioModal.classList.remove("consultar");
      precioModal.hidden = false;
    } else {
      precioModal.innerHTML = "🏷️ Precio por consultar";
      precioModal.classList.add("consultar");
      precioModal.hidden = false;
    }
    modal.querySelector(".modal-estilos").innerHTML = (producto.tags || [])
      .map((t) => `<span class="etiqueta-estilo">${esc(t)}</span>`)
      .join("");

    const badge = modal.querySelector(".modal-badge");
    badge.className = "modal-badge badge " + (disponible ? "badge-disponible" : "badge-agotado");
    badge.textContent = disponible ? "✓ Disponible" : "✕ Agotado";

    const aviso = modal.querySelector(".aviso-agotado");
    aviso.hidden = disponible;

    const boton = modal.querySelector(".modal-whatsapp");
    boton.href = enlaceWhatsApp(disponible ? producto.nombre : null);
    if (disponible) {
      boton.classList.remove("deshabilitado");
      boton.removeAttribute("aria-disabled");
      boton.querySelector("span").textContent = "💬 Lo quiero por WhatsApp";
    } else {
      boton.classList.add("deshabilitado");
      boton.setAttribute("aria-disabled", "true");
      boton.querySelector("span").textContent = "Avísame cuando vuelva";
    }

    modal.classList.add("abierto");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-cerrar").focus();
  }

  function cerrarModal() {
    if (!modal) return;
    modal.classList.remove("abierto");
    document.body.style.overflow = "";
    productoActual = null;
  }

  if (modal) {
    modal.querySelector(".modal-fondo").addEventListener("click", cerrarModal);
    modal.querySelector(".modal-cerrar").addEventListener("click", cerrarModal);
    modal.querySelector(".modal-whatsapp").addEventListener("click", (e) => {
      const deshabilitado = e.currentTarget.classList.contains("deshabilitado");
      if (deshabilitado) e.preventDefault();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cerrarModal();
      cerrarAdmin();
    }
  });

  /* ---------------- Botón flotante de WhatsApp ---------------- */

  const flotante = document.getElementById("whatsapp-flotante");
  if (flotante) {
    flotante.href = enlaceWhatsApp(null);
  }

  /* ---------------- Panel de administración ---------------- */

  const modalAdmin = document.getElementById("modal-admin");
  const formularioPin = document.getElementById("form-pin");
  const panelAdmin = document.getElementById("panel-admin");

  function pinActual() {
    try {
      return localStorage.getItem(CLAVE_PIN) || PIN_POR_DEFECTO;
    } catch (e) {
      return PIN_POR_DEFECTO;
    }
  }

  function abrirAdmin() {
    if (!modalAdmin) return;
    modalAdmin.classList.add("abierto");
    document.body.style.overflow = "hidden";
    if (panelAdmin) panelAdmin.hidden = true;
    if (formularioPin) {
      formularioPin.hidden = false;
      formularioPin.querySelector("input").value = "";
    }
    if (formularioPin) formularioPin.querySelector("input").focus();
  }

  function cerrarAdmin() {
    if (!modalAdmin) return;
    modalAdmin.classList.remove("abierto");
    document.body.style.overflow = "";
  }

  function pintarPanelAdmin() {
    if (!panelAdmin) return;
    const lista = panelAdmin.querySelector(".admin-lista");
    lista.innerHTML = "";

    LILO_PRODUCTOS.forEach((producto) => {
      const disponible = estaDisponible(producto);
      const fila = document.createElement("div");
      fila.className = "admin-item";
      fila.innerHTML = `
        <img src="${esc(producto.imagen)}" alt="" loading="lazy" width="52" height="52">
        <span class="nombre">${esc(producto.nombre)}</span>
        <span class="etiqueta-estado" style="font-size:.75rem;font-weight:800;color:${disponible ? "var(--verde)" : "var(--rojo)"}">
          ${disponible ? "Disponible" : "Agotado"}
        </span>
        <label class="interruptor">
          <input type="checkbox" ${disponible ? "checked" : ""} aria-label="Disponibilidad de ${esc(producto.nombre)}">
          <span class="pista"></span>
        </label>`;

      fila.querySelector("input").addEventListener("change", (e) => {
        const stock = leerStock();
        stock[producto.id] = e.target.checked;
        guardarStock(stock);
        const etiqueta = fila.querySelector(".etiqueta-estado");
        etiqueta.textContent = e.target.checked ? "Disponible" : "Agotado";
        etiqueta.style.color = e.target.checked ? "var(--verde)" : "var(--rojo)";
        renderProductos();
        actualizarContadores();
      });
      lista.appendChild(fila);
    });
  }

  if (formularioPin) {
    formularioPin.addEventListener("submit", (e) => {
      e.preventDefault();
      const valor = formularioPin.querySelector("input").value.trim();
      const avisoPin = document.getElementById("aviso-pin");
      if (valor === pinActual()) {
        avisoPin.hidden = true;
        formularioPin.hidden = true;
        panelAdmin.hidden = false;
        pintarPanelAdmin();
      } else {
        avisoPin.hidden = false;
      }
    });
  }

  document.querySelectorAll("[data-abrir-admin]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      abrirAdmin();
    });
  });

  const btnCerrarAdmin = document.getElementById("cerrar-admin");
  if (btnCerrarAdmin) btnCerrarAdmin.addEventListener("click", cerrarAdmin);
  const fondoAdmin = document.getElementById("admin-fondo");
  if (fondoAdmin) fondoAdmin.addEventListener("click", cerrarAdmin);

  const btnReset = document.getElementById("admin-reset");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      if (confirm("¿Restaurar el stock original definido en el catálogo?")) {
        try { localStorage.removeItem(CLAVE_STOCK); } catch (e) {}
        pintarPanelAdmin();
        renderProductos();
        actualizarContadores();
      }
    });
  }

  const btnExportar = document.getElementById("admin-exportar");
  if (btnExportar) {
    btnExportar.addEventListener("click", () => {
      const datos = LILO_PRODUCTOS.map((p) => ({
        id: p.id,
        nombre: p.nombre,
        categoria: p.categoria,
        imagen: p.imagen,
        disponible: estaDisponible(p),
        descripcion: p.descripcion,
        tags: p.tags || [],
        alt: p.alt
      }));
      const blob = new Blob([JSON.stringify(datos, null, 2)], { type: "application/json" });
      const enlace = document.createElement("a");
      enlace.href = URL.createObjectURL(blob);
      enlace.download = "lilo-celis-stock.json";
      enlace.click();
      URL.revokeObjectURL(enlace.href);
    });
  }

  const btnPin = document.getElementById("admin-cambiar-pin");
  if (btnPin) {
    btnPin.addEventListener("click", () => {
      const nuevo = prompt("Nuevo PIN de administración (4 a 8 caracteres):");
      if (nuevo && nuevo.trim().length >= 4) {
        try { localStorage.setItem(CLAVE_PIN, nuevo.trim()); } catch (e) {}
        alert("PIN actualizado correctamente ✅");
      } else if (nuevo !== null) {
        alert("El PIN debe tener al menos 4 caracteres.");
      }
    });
  }

  /* ---------------- Menú móvil ---------------- */

  const navToggle = document.querySelector(".nav-toggle");
  const navEnlaces = document.querySelector(".nav-enlaces");
  if (navToggle && navEnlaces) {
    navToggle.addEventListener("click", () => {
      navEnlaces.classList.toggle("abierto");
      navToggle.classList.toggle("activo");
      navToggle.setAttribute("aria-expanded", navEnlaces.classList.contains("abierto"));
    });
    navEnlaces.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navEnlaces.classList.remove("abierto");
        navToggle.classList.remove("activo");
      })
    );
  }

  /* ---------------- Animaciones de aparición ---------------- */

  function configurarAnimaciones() {
    const elementos = document.querySelectorAll(".aparece");
    if (!("IntersectionObserver" in window)) {
      elementos.forEach((el) => el.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            obs.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elementos.forEach((el) => obs.observe(el));
  }

  /* ---------------- Inicio ---------------- */

  document.addEventListener("DOMContentLoaded", () => {
    renderFiltros();
    renderProductos();
    actualizarContadores();
    configurarAnimaciones();

    // Acceso directo al panel: index.html#admin
    if (window.location.hash === "#admin") abrirAdmin();
  });
})();
