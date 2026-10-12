/* ==========================================================================
   CONFIGURACIÓN: aquí editas TODO el contenido de la página.
   Cambia textos, precios, datos de contacto y trabajos sin tocar nada más.
   ========================================================================== */
const CONFIG = {
  marca: "Kobu Studio",

  /* WhatsApp: código de país + número, solo dígitos */
  whatsapp: "525648205724",
  telefonoVisible: "56 4820 5724",
  email: "",                       // Pon tu correo aquí para mostrarlo. Vacío = se oculta
  instagram: "kobu.studio",        // sin @. Vacío = se oculta
  horario: "",                     // Ej. "Lunes a sábado, 10:00 a 19:00". Vacío = se oculta
  ubicacion: "",                   // Ej. "Entregas y recolección en…". Vacío = se oculta

  hero: {
    titulo: "Playeras, sudaderas y gorras personalizadas",
    texto: "Estampado DTF de alta calidad, en todos los colores. Pedidos desde una sola pieza.",
    nota: "Prueba cómo se vería tu diseño. El DTF se ve vivo sobre cualquier color de prenda."
  },

  ventajas: [
    "Playera 100% algodón",
    "Estampado DTF de alta calidad",
    "Todos los colores",
    "100% satisfacción garantizada"
  ],

  serviciosIntro: "Tú nos mandas el diseño y nosotros lo estampamos con tecnología DTF.",
  servicios: [
    { nombre: "Playeras personalizadas", texto: "100% algodón, en todos los colores. Tallas Ch, M, G y XL." },
    { nombre: "Sudaderas personalizadas", texto: "Con tu diseño al frente o en la espalda, en todos los colores." },
    { nombre: "Gorras personalizadas", texto: "Tu logo o diseño al frente." },
    { nombre: "Mayoreo", texto: "Desde 6 piezas en adelante tienes precio especial. Cotízalo aquí o por WhatsApp." }
  ],
  pasos: [
    { titulo: "Cuéntanos qué necesitas", texto: "Cotiza aquí o por WhatsApp y manda tu diseño." },
    { titulo: "Confirmamos tu pedido", texto: "Revisamos tu diseño y acordamos precio y tiempo de entrega." },
    { titulo: "Imprimimos y entregamos", texto: "Tu pedido listo con estampado DTF de alta calidad." }
  ],

  /* Precios por pieza en pesos MXN. Cada lista sigue el orden de "rangos".
     Si pones null en un precio, la página muestra "Cotiza por WhatsApp".
     Cuando tengas tus precios de mayoreo, cambia los null por el número. */
  rangos: [
    { min: 1, etiqueta: "1 a 5 piezas" },
    { min: 6, etiqueta: "6 o más (mayoreo)" }
  ],
  prendas: [
    { id: "playera",  nombre: "Playera",  precios: [280, null] },
    { id: "sudadera", nombre: "Sudadera", precios: [580, null] },
    { id: "gorra",    nombre: "Gorra",    precios: [130, null] }
  ],
  notasPrecio: [
    "<strong>Precios en pesos mexicanos</strong>, por pieza.",
    "<strong>Mayoreo desde 6 piezas.</strong> Pide tu cotización por WhatsApp o con el formulario de abajo."
  ],

  /* Trabajos realizados.
     Para agregar uno, copia un bloque completo { ... } y cambia sus datos.
     - imagenes: lista de rutas de fotos, ej. "imagenes/trabajos/mi-foto.jpg". La primera es la portada;
       si hay más de una, aparecen miniaturas para cambiar de foto.
       (Guarda tus fotos nuevas en la carpeta imagenes/trabajos.)
     - Si "imagenes" va vacía se muestra un dibujo de la prenda (usa prenda, color y arte).
     - categoria: se crean filtros automáticos si hay 3 o más categorías distintas. */
  trabajos: [
    { titulo: "Retrato a todo color", descripcion: "Estampado DTF grande en playera negra.", categoria: "Playeras", prenda: "playera", color: "#14172A", arte: "sol",
      imagenes: ["imagenes/trabajos/retrato-1.jpg"] },
    { titulo: "Collage tipográfico", descripcion: "Diseño en blanco sobre playera negra.", categoria: "Playeras", prenda: "playera", color: "#14172A", arte: "texto",
      imagenes: ["imagenes/trabajos/collage-1.jpg", "imagenes/trabajos/collage-2.jpg"] },
    { titulo: "Ilustración en espalda", descripcion: "Diseño a todo color atrás y logo pequeño en el pecho.", categoria: "Playeras", prenda: "playera", color: "#14172A", arte: "sol",
      imagenes: ["imagenes/trabajos/ilustracion-1.jpg", "imagenes/trabajos/ilustracion-2.jpg"] },
    { titulo: "México 2026", descripcion: "Diseño a color en la espalda y CDMX en el pecho.", categoria: "Playeras", prenda: "playera", color: "#14172A", arte: "sol",
      imagenes: ["imagenes/trabajos/mexico2026-1.jpg", "imagenes/trabajos/mexico2026-2.jpg", "imagenes/trabajos/mexico2026-3.jpg"] },
    { titulo: "Ángel de la Independencia", descripcion: "Monumento en la espalda y letras tricolor en el pecho.", categoria: "Playeras", prenda: "playera", color: "#14172A", arte: "rayas",
      imagenes: ["imagenes/trabajos/angel-1.jpg", "imagenes/trabajos/angel-2.jpg", "imagenes/trabajos/angel-3.jpg"] },
    { titulo: "Uniforme de piloto", descripcion: "Estampado completo en playera blanca.", categoria: "Playeras", prenda: "playera", color: "#FFFFFF", arte: "rayas",
      imagenes: ["imagenes/trabajos/piloto-1.jpg", "imagenes/trabajos/piloto-2.jpg"] },
    { titulo: "Iglesia ilustrada", descripcion: "Pintura a color en la espalda y texto en el pecho.", categoria: "Playeras", prenda: "playera", color: "#14172A", arte: "sol",
      imagenes: ["imagenes/trabajos/iglesia-1.jpg", "imagenes/trabajos/iglesia-2.jpg"] },
    { titulo: "Sudadera combi retro", descripcion: "Diseño retro al frente y en la esplada.", categoria: "Sudaderas", prenda: "sudadera", color: "#FFFFFF", arte: "rayas",
      imagenes: ["imagenes/trabajos/playera_combi.png", "imagenes/trabajos/playeracombi1.jpg", "imagenes/trabajos/playeracombi2.jpg"] },
    { titulo: "Gym Collection", descripcion: "Frase en el pecho ", categoria: "Playeras", prenda: "playera", color: "#14172A", arte: "sol",
      imagenes: ["imagenes/trabajos/gym1.png", "imagenes/trabajos/gym2.jpg", "imagenes/trabajos/gym3.jpg"] },
    { titulo: "Gym Collection", descripcion: "Frase en el pecho ", categoria: "Playeras", prenda: "playera", color: "#14172A", arte: "rayas",
      imagenes: ["imagenes/trabajos/gym1.1.png", "imagenes/trabajos/gym1.2.jpg", "imagenes/trabajos/gym1.3.jpg"] },
      { titulo: "Gym Collection", descripcion: "Frase en el pecho ", categoria: "Playeras", prenda: "playera", color: "#14172A", arte: "sol",
      imagenes: ["imagenes/trabajos/gym2.1.png", "imagenes/trabajos/gym2.2.jpg", "imagenes/trabajos/gym2.3.jpg"] },
      { titulo: "Gorra", descripcion: "Logotipo en el frente", categoria: "Gorras", prenda: "gorra", color: "#14172A", arte: "rayas",
      imagenes: ["imagenes/trabajos/gorra.png", "imagenes/trabajos/gorra1.png"] },
  ],

  contactoTexto: "Cuéntanos qué quieres imprimir y te respondemos con precio y tiempo de entrega."
};
/* ==================== FIN DE LA CONFIGURACIÓN ==================== */
