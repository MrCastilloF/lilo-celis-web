/* ============================================================
   LILO CELIS — Catálogo de productos
   ------------------------------------------------------------
   EDITA AQUÍ los datos de cada joya:
   - id          : identificador único (no repetir)
   - nombre      : nombre comercial de la joya
   - categoria   : "aretes" | "pulseras" | "conjuntos"
   - imagen      : ruta de la foto dentro del proyecto
   - alt         : texto alternativo descriptivo (SEO/accesibilidad)
   - descripcion : copia breve de marketing
   - tags        : etiquetas de estilo
   - disponible  : estado inicial true (Disponible) / false (Agotado)

   NOTA: los cambios de disponibilidad hechos desde el panel de
   administración (#admin) se guardan en LocalStorage del navegador
   y tienen prioridad sobre este archivo. Usa el panel →
   «Restaurar stock original» para volver a este estado.
   ============================================================ */

window.LILO_PRODUCTOS = [
  /* ---------------- Aretes ---------------- */
  {
    id: "p01",
    nombre: "Aro cuff dorado con cristales",
    categoria: "aretes",
    imagen: "images/aro-cuff-dorado-cristales.jpg",
    alt: "Aro cuff dorado con cristales baguette llevado en la oreja de una modelo",
    descripcion: "Elegante aro cuff dorado con dos cristales baguette y circonitas; un diseño moderno que abraza la oreja con brillo sin necesidad de perforar.",
    tags: ["dorado", "con piedras", "moderno"],
    disponible: true
  },
  {
    id: "p02",
    nombre: "Argollas pavé en oro rosado",
    categoria: "aretes",
    imagen: "images/argollas-pave-oro-rosado.jpg",
    alt: "Argollas cortas oro rosado pavé de cristales presentadas en estuche de terciopelo rojo",
    descripcion: "Glamurosas argollas tipo huggie en tono oro rosado, completamente cubiertas de cristales claros que brillan con cada movimiento.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p03",
    nombre: "Candongas doradas tipo huggie",
    categoria: "aretes",
    imagen: "images/candongas-huggie-doradas.jpg",
    alt: "Par de aros dorados tipo huggie en caja de terciopelo roja",
    descripcion: "Elegantes candongas doradas tipo huggie con acabado pulido y motivo grabado perimetral: un clásico que combina con todo.",
    tags: ["dorado", "minimalista", "elegante"],
    disponible: true
  },
  {
    id: "p04",
    nombre: "Aretes cuff dorados con strass",
    categoria: "aretes",
    imagen: "images/aretes-cuff-strass-triple.jpg",
    alt: "Ear cuff dorado triple banda con cristales baguette llevado en la oreja",
    descripcion: "Glamuroso ear cuff en tres bandas doradas con filas de microesmeraldas y granallita; brillo máximo sin perforar la oreja.",
    tags: ["dorado", "con piedras", "moderno", "elegante"],
    disponible: true
  },
  {
    id: "p05",
    nombre: "Argollas verdes con bolitas",
    categoria: "aretes",
    imagen: "images/argollas-verdes-bolitas.jpg",
    alt: "Argollas doradas con cristales verdes y detalle de bolitas en caja de terciopelo rojo",
    descripcion: "Argollas cortas en oro dorado con triple fila de pequeñas piedras verdes y borde de esferas: frescas, elegantes y con mucho color.",
    tags: ["dorado", "con piedras", "moderno"],
    disponible: true
  },
  {
    id: "p06",
    nombre: "Aros gruesos dorados con circonas",
    categoria: "aretes",
    imagen: "images/aros-gruesos-dorados-circonas.jpg",
    alt: "Aros gruesos dorados con circonitas engastadas presentados en caja de terciopelo rojo",
    descripcion: "Aretes aro de perfil grueso en oro dorado con franja de circonitas blancas engastadas: brillantes y fáciles de combinar.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p07",
    nombre: "Ear cuff perlas y cristales",
    categoria: "aretes",
    imagen: "images/ear-cuff-perlas-cristales.jpg",
    alt: "Ear cuff dorado con perlas y cristales ajustado a la oreja de una modelo",
    descripcion: "Ear cuff dorado con dos filas de cristales y un centro de perlas blancas: sofisticación sin perforación.",
    tags: ["dorado", "con perlas", "elegante"],
    disponible: true
  },
  {
    id: "p08",
    nombre: "Argollas rombos con cristales",
    categoria: "aretes",
    imagen: "images/argollas-rombos-cristales.jpg",
    alt: "Argollas doradas con patrón de rombos y pequeños cristales en caja de terciopelo rojo",
    descripcion: "Argollas doradas de diseño geométrico con rombos engastados de cristales blancos, perfectas para un look moderno y sofisticado.",
    tags: ["dorado", "con piedras", "moderno"],
    disponible: true
  },
  {
    id: "p09",
    nombre: "Ear cuff multiarillo dorado",
    categoria: "aretes",
    imagen: "images/ear-cuff-multiarillo.jpg",
    alt: "Ear cuff dorado de varios aros entrelazados lucido en la oreja de una modelo",
    descripcion: "Ear cuff en oro dorado con varios aros entrelazados de acabado pulido: un accesorio sin perforación moderno y versátil.",
    tags: ["dorado", "minimalista", "moderno"],
    disponible: true
  },
  {
    id: "p10",
    nombre: "Aretes arco con granallado",
    categoria: "aretes",
    imagen: "images/aretes-arco-granallado.jpg",
    alt: "Aretes dorados en forma de arco con detalles de bolitas sobre terciopelo rojo",
    descripcion: "Aretes arco en oro dorado con textura de esferas y granallado, de estilo étnico chic y acabado brillante.",
    tags: ["dorado", "moderno", "elegante"],
    disponible: true
  },
  {
    id: "p11",
    nombre: "Argollas verdes con granallado",
    categoria: "aretes",
    imagen: "images/argollas-verdes-granallado.jpg",
    alt: "Argollas doradas con piedras verdes y detalle de bolitas en caja roja",
    descripcion: "Argollas cortas doradas con doble fila de cristales verdes y borde de esferas: ideales para un look vibrante.",
    tags: ["dorado", "con piedras", "moderno"],
    disponible: true
  },
  {
    id: "p12",
    nombre: "Aretes bicolor volumen pavé",
    categoria: "aretes",
    imagen: "images/aretes-bicolor-pave.jpg",
    alt: "Aretes dorados y plateados con acabado pavé presentados en estuche de terciopelo",
    descripcion: "Aretes abullonados de estilo bicolor que combinan oro dorado brillante con una zona de cristales pavé en tono plateado.",
    tags: ["dorado", "plateado", "con piedras", "moderno"],
    disponible: true
  },
  {
    id: "p13",
    nombre: "Candongas plateadas con strass",
    categoria: "aretes",
    imagen: "images/candongas-plata-strass.jpg",
    alt: "Candongas plateadas con strass en estuche de terciopelo rojo",
    descripcion: "Elegantes candongas plateadas con acabado pulido y strass incrustados: un clásico brillante para uso diario.",
    tags: ["plateado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p14",
    nombre: "Cuff dorado con aro de strass",
    categoria: "aretes",
    imagen: "images/cuff-dorado-strass.jpg",
    alt: "Ear cuff dorado con círculo de cristales llevado en la oreja",
    descripcion: "Sofisticado ear cuff en oro con aro engastado de microstrass y anillo pulido: un accesorio chic sin perforar.",
    tags: ["dorado", "con piedras", "moderno"],
    disponible: true
  },
  {
    id: "p15",
    nombre: "Argollas bicolor de bolitas",
    categoria: "aretes",
    imagen: "images/argollas-bicolor-bolitas.jpg",
    alt: "Argollas doradas y plateadas con filas de bolitas metálicas sobre terciopelo rojo",
    descripcion: "Argollas cortas de acabado bicolor en oro y plata con delicadas esferas: diseño juvenil y fácil de combinar.",
    tags: ["dorado", "plateado", "moderno"],
    disponible: true
  },
  {
    id: "p16",
    nombre: "Candongas doradas con cristales verdes",
    categoria: "aretes",
    imagen: "images/candongas-doradas-verdes.jpg",
    alt: "Candongas doradas con cristales verdes en estuche de terciopelo rojo",
    descripcion: "Candongas doradas engarzadas con cristales verdes en línea continua: diseño fresco y elegante con un toque de color.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p17",
    nombre: "Aretes argolla con corazones multicolor",
    categoria: "aretes",
    imagen: "images/aretes-corazones-multicolor.jpg",
    alt: "Argollas doradas con corazones de piedras multicolor sobre caja de terciopelo rojo",
    descripcion: "Elegantes argollas doradas engastadas con corazones en tonos rojo, lila y verde que aportan un toque lúdico y colorido.",
    tags: ["dorado", "con piedras", "moderno"],
    disponible: true
  },
  {
    id: "p18",
    nombre: "Aretes dorados en forma de U",
    categoria: "aretes",
    imagen: "images/aretes-forma-u-dorados.jpg",
    alt: "Aretes dorados gruesos con forma de U en estuche beige",
    descripcion: "Aretes geométricos en forma de U con acabado dorado de alto brillo: diseño contemporáneo que eleva cualquier look.",
    tags: ["dorado", "minimalista", "moderno"],
    disponible: true
  },

  /* ---------------- Pulseras ---------------- */
  {
    id: "p19",
    nombre: "Pulsera cubana con piedra rectangular",
    categoria: "pulseras",
    imagen: "images/pulsera-cubana-piedra-rectangular.jpg",
    alt: "Pulsera dorada de cadena cubana con piedra rectangular transparente en caja de joyería",
    descripcion: "Elegante pulsera de cadena cubana en baño de oro con piedra rectangular transparente engastada y halo de microstrass brillante.",
    tags: ["dorado", "con piedras", "elegante", "moderno"],
    disponible: true
  },
  {
    id: "p20",
    nombre: "Pulsera tenis de cristales",
    categoria: "pulseras",
    imagen: "images/pulsera-tenis-cristales.jpg",
    alt: "Pulsera plateada tipo tenis con cristales grandes en estuche color beige",
    descripcion: "Pulsera tipo tenis en tono plateado con grandes cristales claros engastados: un clásico atemporal para ocasiones especiales.",
    tags: ["plateado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p21",
    nombre: "Pulsera dorada multibanda con corazones",
    categoria: "pulseras",
    imagen: "images/pulsera-dorada-corazones-multibanda.jpg",
    alt: "Pulsera dorada en varias cadenas con dijes de corazón con cristales",
    descripcion: "Trendy pulsera dorada de triple cadena con eslabones mixtos y dijes de corazón, uno pavé de cristales: muy femenina.",
    tags: ["dorado", "con piedras", "moderno", "romántico"],
    disponible: true
  },
  {
    id: "p22",
    nombre: "Pulsera de circonitas verde esmeralda",
    categoria: "pulseras",
    imagen: "images/pulsera-circonitas-verde-esmeralda.jpg",
    alt: "Pulsera plateada con cristales verde esmeralda en estuche de terciopelo verde",
    descripcion: "Pulsera ajustable tono plata con cristales verde esmeralda engastados en fila continua: ideal para un look fresco y elegante.",
    tags: ["plateado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p23",
    nombre: "Pulsera tennis de corazones rosados",
    categoria: "pulseras",
    imagen: "images/pulsera-tennis-corazones-rosados.jpg",
    alt: "Pulsera tennis dorada con piedras rosadas en forma de corazón",
    descripcion: "Deslumbrante pulsera tipo tennis en tono dorado con corazones rosados y cristales transparentes: romántica, femenina y perfecta para regalar.",
    tags: ["dorado", "con piedras", "romántico"],
    disponible: true
  },
  {
    id: "p24",
    nombre: "Pulsera plata con circonita y lazo",
    categoria: "pulseras",
    imagen: "images/pulsera-plata-circonita-lazo.jpg",
    alt: "Pulsera plateada con piedra central grande rodeada de circonitas en estuche rojo",
    descripcion: "Pulsera plateada ajustable con gran circonita central rodeada de halo de piedras y un delicado detalle de lazo: luminosa y femenina.",
    tags: ["plateado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p25",
    nombre: "Pulsera de charms con oso",
    categoria: "pulseras",
    imagen: "images/pulsera-charms-oso.jpg",
    alt: "Pulsera plateada de charms con oso, trébol, corazón y estrella con cristales rosados",
    descripcion: "Divertida pulsera plateada tipo charm con dijes de oso pavé, trébol, corazón y estrella con cristales rosados y nácar.",
    tags: ["plateado", "con piedras", "moderno", "romántico"],
    disponible: true
  },
  {
    id: "p26",
    nombre: "Pulsera arcoíris de cristales",
    categoria: "pulseras",
    imagen: "images/pulsera-arcoiris-cristales.jpg",
    alt: "Pulsera rosé con cristales de colores en forma de corazón",
    descripcion: "Pulsera ajustable en tono rosé con cristales de colores colgantes y cadeneta delicada: alegre, moderna y llena de vida.",
    tags: ["con piedras", "moderno", "colorido"],
    disponible: true
  },
  {
    id: "p27",
    nombre: "Pulsera de cristales rosados marquise",
    categoria: "pulseras",
    imagen: "images/pulsera-cristales-rosados-marquise.jpg",
    alt: "Pulsera plateada con cristales rosa en talla marquise dentro de caja rosa",
    descripcion: "Fresca pulsera elástica de cristales rosa palo con talla marquise en montura plateada: ideal para un look primaveral.",
    tags: ["plateado", "con piedras", "floral", "moderno"],
    disponible: true
  },
  {
    id: "p28",
    nombre: "Pulsera dorada con cruz",
    categoria: "pulseras",
    imagen: "images/pulsera-dorada-cruz.jpg",
    alt: "Pulsera dorada con dije de cruz cubierta de cristales",
    descripcion: "Pulsera de cadena dorada con dije de cruz incrustada de cristales y cierre ajustable: fe, elegancia y estilo en una joya.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p29",
    nombre: "Pulsera con dije de sandía",
    categoria: "pulseras",
    imagen: "images/pulsera-dije-sandia.jpg",
    alt: "Pulsera dorada ajustable con dije de sandía de circonitas de colores en caja roja",
    descripcion: "Pulsera ajustable dorada con divertido dije de sandía en circonitas rosas y verdes: perfecta para un estilo veraniego.",
    tags: ["dorado", "con piedras", "moderno"],
    disponible: false
  },
  {
    id: "p30",
    nombre: "Pulsera de perlas con medalla dorada",
    categoria: "pulseras",
    imagen: "images/pulsera-perlas-medalla.jpg",
    alt: "Pulsera dorada con perlas, medalla de la Virgen y dije de cruz",
    descripcion: "Pulsera dorada de doble vuelta que combina cadena de eslabones y perlas con medalla ovalada de la Virgen y pequeña cruz.",
    tags: ["dorado", "con perlas", "religioso", "elegante"],
    disponible: true
  },
  {
    id: "p31",
    nombre: "Pulsera dorada con candado y llave",
    categoria: "pulseras",
    imagen: "images/pulsera-candado-llave.jpg",
    alt: "Pulsera dorada con dijes de candado con circonitas y llave en estuche rojo",
    descripcion: "Pulsera de eslabones dorados con dijes de candado y llave engastados con circonitas: un detalle romántico lleno de simbolismo.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p32",
    nombre: "Pulsera de medallas religiosas dorada",
    categoria: "pulseras",
    imagen: "images/pulsera-medallas-religiosas.jpg",
    alt: "Pulsera dorada con medallas de la Virgen y cristales rojos y verdes",
    descripcion: "Vistosa pulsera dorada compuesta por medallas ovaladas con la Virgen, rodeadas de cristales rojos, verdes y transparentes.",
    tags: ["dorado", "con piedras", "religioso", "elegante"],
    disponible: true
  },
  {
    id: "p33",
    nombre: "Pulsera tennis roja dorada",
    categoria: "pulseras",
    imagen: "images/pulsera-tennis-roja.jpg",
    alt: "Pulsera tennis dorada con piedras rojas engastadas",
    descripcion: "Elegante pulsera tipo tennis con piedras rojas engastadas en metal dorado: un clásico de brillo intenso para lucir en eventos.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p34",
    nombre: "Pulsera de cuentas multicolor",
    categoria: "pulseras",
    imagen: "images/pulsera-cuentas-multicolor.jpg",
    alt: "Pulsera dorada con cuentas multicolor facetadas y balas doradas",
    descripcion: "Pulsera de cuentas facetadas en tonos ámbar, verde y blanco con separadores dorados: estilo bohemio chic para el día a día.",
    tags: ["dorado", "bohemio", "colorido"],
    disponible: true
  },
  {
    id: "p35",
    nombre: "Pulsera llave y candado",
    categoria: "pulseras",
    imagen: "images/pulsera-llave-y-candado.jpg",
    alt: "Pulsera dorada con candado de corazón y llave en caja roja de regalo",
    descripcion: "Charmosa pulsera dorada de eslabón largo con dijes de candado de corazón con strass y llave encantadora.",
    tags: ["dorado", "con piedras", "romántico"],
    disponible: true
  },
  {
    id: "p36",
    nombre: "Pulsera tennis multicolor regulable",
    categoria: "pulseras",
    imagen: "images/pulsera-tennis-multicolor.jpg",
    alt: "Pulsera plateada con cristales de colores arcoíris y cierre regulable en caja de terciopelo",
    descripcion: "Delicada pulsera tennis en tono plata con cristales facetados multicolor y cierre corredizo regulable para un ajuste perfecto.",
    tags: ["plateado", "con piedras", "moderno", "colorido"],
    disponible: true
  },
  {
    id: "p37",
    nombre: "Pulsera plateada con piedra central",
    categoria: "pulseras",
    imagen: "images/pulsera-plata-piedra-central.jpg",
    alt: "Pulsera plateada ajustable con piedra redonda rodeada de cristales en caja roja",
    descripcion: "Deslumbrante pulsera plateada con banda de cristales, piedra central redonda con halo de microstrass y cierre corredizo regulable.",
    tags: ["plateado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p38",
    nombre: "Pulsera tennis doble fila",
    categoria: "pulseras",
    imagen: "images/pulsera-tennis-doble-fila.jpg",
    alt: "Pulsera tennis plateada de doble fila con cristales redondos en caja roja",
    descripcion: "Clásica pulsera tennis de doble fila con cristales redondos engastados en tono plata, cierre de caja seguro y brillante.",
    tags: ["plateado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p39",
    nombre: "Pulsera dorada con medalla y cruz",
    categoria: "pulseras",
    imagen: "images/pulsera-medalla-y-cruz.jpg",
    alt: "Pulsera dorada de cable con medalla de la Virgen, cruz y piedra blanca",
    descripcion: "Pulsera rígida de cable dorado con dijes de medalla de la Virgen, cruz minimalista y piedra facetada blanca.",
    tags: ["dorado", "con piedras", "religioso", "elegante"],
    disponible: true
  },
  {
    id: "p40",
    nombre: "Pulsera rosé de eslabones con circonas",
    categoria: "pulseras",
    imagen: "images/pulsera-rose-eslabones-circonas.jpg",
    alt: "Pulsera rosé con eslabones grandes engastados con circonitas en caja de regalo",
    descripcion: "Pulsera tono rosa dorado con eslabones elípticos que alternan acabado pulido y circonitas engastadas: atemporal y con carácter.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p41",
    nombre: "Pulsera rígida dorada con circonas",
    categoria: "pulseras",
    imagen: "images/pulsera-rigida-dorada-circonas.jpg",
    alt: "Pulsera rígida dorada abierta con eslabones y circonitas en estuche beige",
    descripcion: "Pulsera abierta tipo bangle en oro dorado con eslabones voluminosos y circonitas engastadas: una pieza moderna y llamativa.",
    tags: ["dorado", "con piedras", "moderno"],
    disponible: true
  },
  {
    id: "p42",
    nombre: "Pulsera de corazones rosados",
    categoria: "pulseras",
    imagen: "images/pulsera-corazones-rosados.jpg",
    alt: "Pulsera dorada con corazones de cristal rosa y piedras claras en estuche rosado",
    descripcion: "Pulsera tipo tenis en oro dorado con corazones de cristal rosa alternados con piedras blancas: romántica y delicada.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p43",
    nombre: "Brazalete dorado con cristales",
    categoria: "pulseras",
    imagen: "images/brazalete-dorado-cristales.jpg",
    alt: "Brazalete dorado con banda de cristales pavé dentro de caja de regalo roja",
    descripcion: "Brazalete rígido en oro dorado con franja central de microcristales pavé: elegante y perfecto para lucir a diario.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p44",
    nombre: "Pulsera con tréboles de colores",
    categoria: "pulseras",
    imagen: "images/pulsera-treboles.jpg",
    alt: "Pulsera dorada con piedras de colores y dijes de trébol",
    descripcion: "Pulsera de cadena dorada con piedras redondas en tonos ámbar y púrpura más dijes de trébol: un guiño a la buena suerte.",
    tags: ["dorado", "con piedras", "moderno"],
    disponible: true
  },
  {
    id: "p45",
    nombre: "Pulsera dorada con medallón",
    categoria: "pulseras",
    imagen: "images/pulsera-medallon-cruz.jpg",
    alt: "Pulsera dorada de eslabones con medallón de cruz y piedras negras",
    descripcion: "Pulsera de cadena dorada con eslabones gruesos y medallón grabado con cruz y piedras negras: estilo atrevido y con carácter.",
    tags: ["dorado", "con piedras", "moderno"],
    disponible: true
  },
  {
    id: "p46",
    nombre: "Brazalete dorado texturizado abierto",
    categoria: "pulseras",
    imagen: "images/brazalete-dorado-texturizado.jpg",
    alt: "Brazalete dorado abierto con textura entrelazado presentado en caja de terciopelo roja",
    descripcion: "Sofisticado brazalete abierto en baño de oro con acabado texturizado entrelazado que atrapa la luz en cada movimiento.",
    tags: ["dorado", "elegante", "moderno"],
    disponible: true
  },
  {
    id: "p47",
    nombre: "Brazalete dorado grabado brillante",
    categoria: "pulseras",
    imagen: "images/brazalete-dorado-grabado.jpg",
    alt: "Brazalete dorado rígido con grabado perimetral en caja de terciopelo beige",
    descripcion: "Brazalete rígido en baño de oro con acabado pulido y grabado perimetral de estilo fashion: sutil y sofisticado.",
    tags: ["dorado", "elegante", "minimalista"],
    disponible: true
  },
  {
    id: "p48",
    nombre: "Brazalete negro con perla y osito",
    categoria: "pulseras",
    imagen: "images/brazalete-negro-perla-oso.jpg",
    alt: "Brazalete negro con perla blanca y detalle de osito dorado en caja roja",
    descripcion: "Divertido brazalete rígido de cordón negro con punta de osito dorado y perla blanca: diseño tierno y moderno.",
    tags: ["dorado", "con perlas", "moderno", "minimalista"],
    disponible: true
  },
  {
    id: "p49",
    nombre: "Brazalete de malla con trébol",
    categoria: "pulseras",
    imagen: "images/brazalete-malla-trebol.jpg",
    alt: "Brazalete plateado abierto con puntas doradas y negras tipo cuatrefolio en caja de terciopelo",
    descripcion: "Moderno brazalete de malla plateada con puntas de cuatrefolio doradas y detalle negro: ideal para combinar a diario.",
    tags: ["plateado", "moderno", "minimalista"],
    disponible: true
  },
  {
    id: "p50",
    nombre: "Platilla dorada con corazones tricolor",
    categoria: "pulseras",
    imagen: "images/pulsera-corazones-tricolor.jpg",
    alt: "Pulsera dorada de malla con tres corazones en rosa, oro y plata",
    descripcion: "Chic pulsera de malla dorada con tres corazones deslizantes en tonos rosa, oro y plata: perfecta para regalar.",
    tags: ["dorado", "plateado", "moderno", "romántico"],
    disponible: true
  },
  {
    id: "p51",
    nombre: "Brazalete dorado con perla y oso",
    categoria: "pulseras",
    imagen: "images/brazalete-dorado-perla-oso.jpg",
    alt: "Brazalete dorado con dije de osito y perla blanca",
    descripcion: "Brazalete rígido dorado con textura de malla, rematado en dije de osito y perla blanca: un detalle tierno y elegante.",
    tags: ["dorado", "con perlas", "moderno"],
    disponible: true
  },
  {
    id: "p52",
    nombre: "Brazalete plata con osito y perla",
    categoria: "pulseras",
    imagen: "images/brazalete-plata-oso-perla.jpg",
    alt: "Brazalete plateado con dije de osito dorado y perla blanca",
    descripcion: "Brazalete rígido plateado con acabado de malla, dije de osito dorado y perla blanca: un diseño tierno con contraste exclusivo.",
    tags: ["plateado", "dorado", "con perlas"],
    disponible: true
  },
  {
    id: "p53",
    nombre: "Brazalete dorado con cierre botón",
    categoria: "pulseras",
    imagen: "images/brazalete-cierre-boton.jpg",
    alt: "Brazalete rígido dorado con cierre tipo botón y anillo",
    descripcion: "Brazalete rígido dorado con diseño de eslabones ovalados y cierre tipo botón con anillo grabado: pieza de impacto con aire exclusivo.",
    tags: ["dorado", "moderno", "elegante"],
    disponible: true
  },
  {
    id: "p54",
    nombre: "Brazalete dorado con trébol negro",
    categoria: "pulseras",
    imagen: "images/brazalete-trebol-negro.jpg",
    alt: "Brazalete dorado abierto con remates en forma de trébol negro",
    descripcion: "Brazalete rígido abierto con textura de malla dorada y terminaciones en forma de trébol con piedra negra: sofisticado y con contraste.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p55",
    nombre: "Brazalete dorado cruzado con cristales",
    categoria: "pulseras",
    imagen: "images/brazalete-cruzado-cristales.jpg",
    alt: "Brazalete dorado rígido en forma de X con cristales",
    descripcion: "Brazalete rígido en forma de X con dos líneas entrelazadas, una pulida y otra cubierta de cristales: moderno y luminoso.",
    tags: ["dorado", "con piedras", "moderno"],
    disponible: true
  },
  {
    id: "p56",
    nombre: "Bangle plateado minimalista con grabado",
    categoria: "pulseras",
    imagen: "images/bangle-plata-grabado.jpg",
    alt: "Pulsera rígida plateada con acabado espejo y detalles de tornillos en caja roja",
    descripcion: "Pulsera rígida plateada de acabado espejo con detalles de tornillos y grabado sutil: un clásico minimalista que combina con todo.",
    tags: ["plateado", "minimalista", "elegante"],
    disponible: true
  },
  {
    id: "p57",
    nombre: "Brazalete dorado con flor",
    categoria: "pulseras",
    imagen: "images/brazalete-malla-flor.jpg",
    alt: "Brazalete dorado de malla con extremos de flor y estrella con piedras rojas",
    descripcion: "Brazalete abierto en oro dorado de textura mallada, rematado con una flor y una estrella con piedras rojas.",
    tags: ["dorado", "con piedras", "floral"],
    disponible: true
  },

  /* ---------------- Conjuntos ---------------- */
  {
    id: "p58",
    nombre: "Set collar y aretes corazón",
    categoria: "conjuntos",
    imagen: "images/set-collar-aretes-corazon.jpg",
    alt: "Set de collar y aretes con corazón de cristales en oro dorado en estuche",
    descripcion: "Conjunto en oro dorado con collar de dije corazón y aretes colgantes, engastados con cristales con halo brillante.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p59",
    nombre: "Set de perlas y aretes dorados",
    categoria: "conjuntos",
    imagen: "images/set-perlas-corazon-aretes.jpg",
    alt: "Set de joyas de perlas blancas en forma de corazón con aretes en estuche rojo",
    descripcion: "Conjunto de perlas blancas en forma de corazón unidas por eslabones dorados, acompañado de aretes a juego: romántico y luminoso.",
    tags: ["dorado", "con perlas", "elegante"],
    disponible: true
  },
  {
    id: "p60",
    nombre: "Set collar y aretes cruz",
    categoria: "conjuntos",
    imagen: "images/set-collar-aretes-cruz.jpg",
    alt: "Set de collar y aretes con cruz de cristales en oro dorado dentro de estuche",
    descripcion: "Conjunto en oro dorado con collar de cadena y aretes colgantes, todos con cruces cubiertas de cristales claros.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: false
  },
  {
    id: "p61",
    nombre: "Set brazalete y anillo festón",
    categoria: "conjuntos",
    imagen: "images/set-brazalete-anillo-feston.jpg",
    alt: "Set de brazalete ajustable y anillo dorados con diseño de círculos en caja roja",
    descripcion: "Conjunto en oro dorado con brazalete abierto y anillo de círculos festoneados con acabado texturizado: ideal para combinar.",
    tags: ["dorado", "moderno"],
    disponible: true
  },
  {
    id: "p62",
    nombre: "Set lila con dije de corazón",
    categoria: "conjuntos",
    imagen: "images/set-lila-corazon.jpg",
    alt: "Collar de cuentas lilas con dije de corazón y aretes dorados",
    descripcion: "Set de collar de cuentas lilas con dije de corazón púrpura y cristal, acompañado de aretes dorados con bolitas: juvenil y encantador.",
    tags: ["dorado", "con piedras", "moderno"],
    disponible: true
  },
  {
    id: "p63",
    nombre: "Set collar y aretes con zafiro azul",
    categoria: "conjuntos",
    imagen: "images/set-collar-aretes-zafiro.jpg",
    alt: "Collar y aretes dorados con piedra azul y circonitas en estuche rojo",
    descripcion: "Set dorado con collar y aretes de piedra azul rodeada de circonitas blancas: un diseño clásico y sofisticado para ocasiones especiales.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p64",
    nombre: "Set ámbar con corazón dorado",
    categoria: "conjuntos",
    imagen: "images/set-ambar-corazon.jpg",
    alt: "Set de pulsera ámbar con dije de corazón y aretes dorados",
    descripcion: "Set de pulsera de cuentas ámbar con dije de corazón dorado y aretes a juego: estilo cálido y sofisticado para cualquier ocasión.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p65",
    nombre: "Set pastel con corazón Gratitud",
    categoria: "conjuntos",
    imagen: "images/set-pastel-corazon-gratitud.jpg",
    alt: "Pulsera de cuentas pastel con dije de corazón y aretes",
    descripcion: "Set de pulsera de cuentas pastel con dije de corazón que dice «Gratitud» y aretes a juego: mensaje positivo y estilo delicado.",
    tags: ["dorado", "moderno", "colorido"],
    disponible: true
  },
  {
    id: "p66",
    nombre: "Set brazalete y anillo hojas",
    categoria: "conjuntos",
    imagen: "images/set-brazalete-anillo-hojas.jpg",
    alt: "Set de brazalete y anillo dorados con diseño de hojas en caja roja",
    descripcion: "Conjunto en oro dorado con brazalete abierto y anillo de motivos foliares pulidos: inspiración natural y romántica.",
    tags: ["dorado", "floral", "moderno"],
    disponible: true
  },
  {
    id: "p67",
    nombre: "Set collar, pulsera y aretes verdes",
    categoria: "conjuntos",
    imagen: "images/set-collar-pulsera-aretes-verdes.jpg",
    alt: "Set de collar, pulsera y aretes con piedras verdes en oro dorado",
    descripcion: "Conjunto en oro dorado con collar, pulsera y aretes de cristales verdes: un juego coordinado de impacto y color.",
    tags: ["dorado", "con piedras", "elegante"],
    disponible: true
  },
  {
    id: "p68",
    nombre: "Set de pulseras tricolor",
    categoria: "conjuntos",
    imagen: "images/set-pulseras-tricolor.jpg",
    alt: "Set de pulseras delgadas tricolor en estuche beige de terciopelo",
    descripcion: "Set de delicadas pulseras trenzadas en tonos dorado, plateado y rosa, ideales para combinar y apilar con estilo sofisticado.",
    tags: ["dorado", "plateado", "minimalista"],
    disponible: true
  },
  {
    id: "p69",
    nombre: "Set collar y pulsera de cadena dorada",
    categoria: "conjuntos",
    imagen: "images/set-collar-pulsera-cadena.jpg",
    alt: "Collar y pulsera dorados de cadena en estuche de regalo rojo",
    descripcion: "Conjunto de collar y pulsera de cadena dorada con eslabones redondeados pulidos: versátil y luminoso, perfecto para el día a día.",
    tags: ["dorado", "minimalista", "moderno"],
    disponible: true
  }
];
