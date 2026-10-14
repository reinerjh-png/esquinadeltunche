# PROMPT: Carta digital premium — La Esquina del Tunche

Actúa como un diseñador UI/UX senior y desarrollador front-end experto. Construye una **carta digital premium, mobile-first**, para el restaurante **La Esquina del Tunche** (cocina amazónica y marina peruana: tacacho, cecina, juanes, ceviches, chifas, pastas, alitas, hamburguesas).

**Usa la skill `ui-ux-pro-max` que ya está en el proyecto** para todas las decisiones de diseño (paleta, tipografía, espaciado, componentes, accesibilidad) antes de escribir código. Si la skill y este prompt se contradicen, prioriza la skill salvo en el contenido de la carta.

---

## 1. Objetivo

Los clientes escanean un QR en la mesa y ven la carta en su celular. Debe verse como una marca gastronómica de primer nivel, ser rapidísima, muy fácil de usar con una mano y permitir **armar un pedido y enviarlo por WhatsApp**. Debe transmitir identidad amazónica: selva, fuego/brasa, frescura del mar, calidez.

Referencia de UX (no copiar el diseño, solo el patrón): app móvil con barra superior con logo y buscador, chips de categorías horizontales, tarjetas de plato con foto a la izquierda, nombre, descripción corta, precio en soles y botón "+" para agregar.

---

## 2. Stack técnico (compatible con Vercel)

- **Next.js (App Router) + TypeScript + Tailwind CSS**. Exportable/desplegable en Vercel sin configuración extra.
- **Framer Motion** para animaciones (sutiles, rápidas, respetando `prefers-reduced-motion`).
- Iconos: `lucide-react`.
- Fuentes con `next/font` (Google Fonts). Elige un par con carácter: una display para títulos y una sans muy legible para texto. Evita Inter/Roboto genéricas como fuente de títulos.
- Imágenes con `next/image`, formato WebP/AVIF, `loading="lazy"` salvo el hero.
- Sin backend ni base de datos: **todo el contenido en un archivo de datos** (`/data/menu.ts`) y la configuración del negocio en `/data/config.ts`. Que editar un precio o un plato sea cambiar una línea.
- Estado del carrito en React (Context o Zustand) con persistencia en `localStorage` (con try/catch).
- SEO y compartir: metadata, Open Graph con imagen, `manifest` PWA básico (nombre, íconos desde el logo, `theme-color`), idioma `es-PE`.
- Lighthouse objetivo: Performance, Accesibilidad y SEO ≥ 90 en móvil.

---

## 3. Identidad visual

- **Logo**: está en `img/logo.png`. Úsalo en el header, en la portada y como favicon/ícono PWA. **Analiza sus colores y deriva la paleta del propio logo.** Si no se pueden extraer, propón: verde selva profundo, ocre/dorado cálido, terracota, crema, y un oscuro casi negro con matiz verdoso.
- Estilo: **oscuro-cálido premium con acentos dorados**, texturas sutiles (patrón de hojas, trama o papel), bordes suaves, sombras elegantes. Cálido y apetitoso, no frío ni "template".
- Define todos los colores, radios y sombras como **tokens** (variables CSS / config de Tailwind) para poder cambiarlos en un solo lugar.
- Tipografía con jerarquía clara: nombre de plato destacado, precio inconfundible en `S/`, descripciones en tono secundario.
- Contraste AA mínimo. Áreas táctiles de al menos 44×44 px.

---

## 4. Estructura y pantallas

**4.1 Portada / hero** (primer pantallazo)
- Logo grande, nombre "La Esquina del Tunche", eslogan corto (propón uno; por ejemplo "Sabores de la selva y del mar").
- Imagen o ilustración de fondo con overlay, y dos botones: **"Ver carta"** (baja a la carta) y **"Pedir por WhatsApp"**.
- Datos rápidos: horario, dirección, botón de cómo llegar (según `config.ts`).

**4.2 Barra superior fija**
- Logo compacto, **buscador** que filtra platos en tiempo real (por nombre y descripción, sin distinguir tildes) y botón del carrito con contador.

**4.3 Navegación de categorías**
- Chips horizontales con scroll, **sticky** bajo el header, con **scroll-spy**: la categoría activa se resalta mientras se hace scroll, y al tocar un chip hace scroll suave a esa sección.
- Cada categoría con un ícono o emoji discreto.

**4.4 Tarjetas de plato**
- Foto, nombre, descripción, precio, botón "+".
- Etiquetas opcionales: "Recomendado", "Picante", "Amazónico", "Marino", "Nuevo".
- Tocar la tarjeta abre un **bottom sheet** (modal inferior) con foto grande, descripción completa, selector de cantidad, campo "Nota para cocina" y botón "Agregar S/ XX".
- Platos con variantes u opciones (alitas por sabor, "Dúo/Trío marino", poké bowl) deben tener **selector de opciones** dentro del bottom sheet (ver sección 6).

**4.5 Sección destacada: "Los favoritos del Tunche"**
- Carrusel horizontal arriba de la carta con 5–6 platos estrella (Combito del Tunche, Ceviche del Tunche, Chaufa del Tunche, Saltado amazónico, Costillas en miel de maracuyá, Jalea mixta).

**4.6 Selección de platos y pedido por WhatsApp (funcionalidad clave)**

Flujo completo, pensado para usarse con una mano:

1. **Seleccionar platos**: en cada tarjeta, el botón "+" agrega el plato. Si el plato tiene opciones (alitas, dúo/trío marino, poké bowl), el "+" abre primero el bottom sheet para elegirlas. Una vez agregado, el "+" se convierte en un control `− 1 +` en la misma tarjeta. Feedback inmediato: animación del botón y toast corto ("Agregado").
2. **Botón flotante de WhatsApp** (esquina inferior, siempre visible): icono de WhatsApp en verde, **contador de ítems** y **total en S/**. Si el carrito está vacío, aparece atenuado o con el texto "Arma tu pedido"; al tocarlo no abre WhatsApp, solo muestra un mensaje breve indicando que agregue platos.
3. **Al tocar el botón flotante se despliega el pedido** (bottom sheet a pantalla casi completa) con:
   - Lista de platos con cantidad editable (`− +`), opciones elegidas, nota por plato, botón de quitar, subtotal por línea y **total**.
   - Botón "Vaciar pedido" (con confirmación).
   - Selector obligatorio de **tipo de pedido** (dos botones grandes tipo segmented control):
     - **"Para llevar"** → aparece el campo **Dirección** (obligatorio, con texto de ayuda: calle, número, referencia).
     - **"Comer en el restaurante"** → aparece el campo **Número de mesa** (obligatorio, teclado numérico).
   - Campo opcional **Nombre** y campo opcional **Comentario general**.
   - Validación en línea: el botón **"Enviar pedido por WhatsApp"** permanece deshabilitado hasta que haya al menos un plato, se haya elegido el tipo de pedido y se haya completado el dato que corresponde (dirección o mesa). Mostrar mensajes de error claros y amables bajo el campo.
4. **Enviar**: al presionar "Enviar pedido por WhatsApp" se abre `https://wa.me/<config.whatsapp>?text=<mensaje codificado con encodeURIComponent>` en una pestaña nueva, con el **mensaje predeterminado** (plantilla editable en `config.ts`, ver abajo). Después de enviar, mostrar confirmación ("Revisa WhatsApp y pulsa enviar") y mantener el pedido guardado hasta que el usuario lo vacíe.
5. El pedido se guarda en `localStorage` (con try/catch) para que no se pierda si cierran la carta por accidente.

**Plantilla del mensaje predeterminado** (generada por una función `buildWhatsAppMessage(order)` en `/lib/whatsapp.ts`, con saltos de línea y negritas de WhatsApp `*así*`):

```
¡Hola, La Esquina del Tunche! 👋
Quiero hacer el siguiente pedido:

*Tipo de pedido:* Para llevar            (o: Comer en el restaurante)
*Dirección:* <dirección>                 (solo si es para llevar)
*Mesa:* <número>                         (solo si es en el restaurante)
*Nombre:* <nombre>                       (solo si lo escribió)

*Detalle del pedido:*
2 x Ceviche del Tunche — S/ 60.00
1 x Alitas Para picar (Maracuyá, BBQ, Crispi) — S/ 35.00
   Nota: sin ají
...

*Total: S/ 95.00*

Comentario: <comentario>                 (solo si lo escribió)
¡Gracias! 🙏
```

Reglas: no mostrar líneas vacías de campos no usados; formatear montos con 2 decimales; escapar correctamente tildes y emojis con `encodeURIComponent`; nunca enviar el mensaje si falla la validación.

**4.7 Sección "Visítanos" con mapa (obligatoria)**
- Antes del pie de página, una sección con **mapa de Google Maps embebido** (iframe responsive, bordes redondeados, `loading="lazy"`, `title` accesible), la dirección, el horario y dos botones: **"Cómo llegar"** (abre `config.mapsUrl`) y **"Llamar / WhatsApp"**.
- El enlace de Maps entregado es un enlace corto (`maps.app.goo.gl`) que **no se puede incrustar directamente en un iframe**. Resuélvelo así, en este orden:
  1. Si `config.mapsEmbedUrl` tiene valor, úsalo como `src` del iframe.
  2. Si tienes acceso a red, abre el enlace corto, obtén las coordenadas o la dirección y construye `https://www.google.com/maps?q=<lat>,<lng>&z=17&output=embed`.
  3. Si no puedes resolverlo, muestra una **tarjeta de mapa estilizada** (fondo con patrón, pin con el logo y el botón "Cómo llegar") y deja un `TODO` visible en `config.ts` explicando que debo pegar el `src` desde Google Maps → Compartir → Insertar un mapa. Nunca dejes un iframe roto o vacío.

**4.8 Pie de página**
- Horario, dirección, redes sociales (Facebook y TikTok, con iconos), WhatsApp, y crédito discreto "Carta digital por R.DEV".

---

## 5. Microinteracciones y pulido

- Animación de entrada escalonada de las tarjetas al aparecer en pantalla.
- Feedback al agregar: el contador del carrito "salta" y aparece un toast corto ("Agregado").
- Skeleton/blur-up mientras cargan las imágenes.
- Transiciones suaves en chips, bottom sheet y carrito (150–300 ms).
- Modo oscuro-cálido como diseño principal; no hace falta alternar tema.
- Accesibilidad: navegación por teclado, `aria-label` en botones de icono, foco visible, `alt` en imágenes.
- Todo debe verse perfecto desde 360 px de ancho; en escritorio, centrar un contenedor tipo móvil o adaptar a grilla de 2–3 columnas.

---

## 6. Contenido de la carta (ya normalizado)

Reglas de normalización que apliqué a la carta original (respétalas):
- Se corrigió ortografía y se estandarizaron nombres.
- Se eliminó el bloque duplicado de Combito/Tacacho que aparecía dos veces (en Desayunos y en De la Casa): **va solo en Desayunos**.
- Los precios están en soles. Muestra siempre el formato `S/ 25.00`.
- Donde no hay descripción, **redacta una breve y apetitosa de una línea** coherente con el nombre, sin inventar ingredientes que contradigan la carta.

Escribe esto en `/data/menu.ts` con un tipo fuerte, por ejemplo:

```ts
type Dish = {
  id: string; name: string; description?: string; price: number | null;
  image?: string; tags?: ("recomendado"|"picante"|"amazonico"|"marino"|"nuevo")[];
  options?: { label: string; choices: string[]; min: number; max: number }[];
};
type Category = { id: string; name: string; icon: string; note?: string; dishes: Dish[] };
```

### DESAYUNOS
- Combito del Tunche — S/ 15 — Tacacho + juanecito con cecina ahumada, chorizo artesanal o chicharrón *(opción: elegir 1 proteína)*
- Juanecito — S/ 5
- Tacacho con chicharrón — S/ 16
- Tacacho con cecina — S/ 14
- Tacacho con chorizo — S/ 14
- Tacacho combinado — S/ 18 — 2 presas a elección
- Tacacho mixto — S/ 22 — 3 presas

### POKÉ BOWLS
- Poké bowl "Arma el tuyo" — S/ 16 — Arma tu bowl a tu gusto. *(Ingredientes pendientes; ver sección de datos faltantes. Mientras tanto, crea un constructor con opciones placeholder en `config`.)*

### PESCADOS Y MARISCOS
- Leche de tigre carretillero — S/ 20 — Cremosa, con pescado y chicharrón de pota
- Ceviche de barrio — S/ 24 — Ceviche de pescado con crocante chicharrón de pota
- Causa de tigre — S/ 22 — Causa rellena con leche de tigre y chicharrón de pota
- Causa acevichada — S/ 24 — Causa rellena de palta acompañada de ceviche de pescado
- Causa de langostinos — S/ 25 — Roll de causa con langostinos, salsa golf y palta
- Arroz con mariscos — S/ 25 — Cremoso arroz con mistura marina y salsa criolla
- Chaufa de mariscos — S/ 22 — Arroz frito con mistura marina y maduros fritos
- Chaufa de langostinos — S/ 25 — Arroz frito con langostinos y maduros fritos
- Chicharrón de pescado — S/ 25 — Pesca del día crocante, con yucas fritas, chifles y salsa criolla
- Jalea mixta — S/ 30 — Pesca del día y mistura marina crocante, con yucas fritas, chifles y salsa criolla
- Chicharrón de pota — S/ 15 — Crocante de pota con yucas fritas y salsa criolla
- **Dúo marino — S/ 30 — "2 a elegir"** entre las opciones del combo (selector con máx. 2)
- **Trío marino — S/ 40 — "3 a elegir"** entre las opciones del combo (selector con máx. 3)
  - Opciones del combo: chicharrón de pota, chicharrón de pescado, chaufa de mariscos, aeropuerto de mariscos, arroz con mariscos, causa rellena, ceviche clásico, leche de tigre.

### DE LA CASA
- Chaufa del Tunche — S/ 25 — Arroz frito con cecina ahumada, chorizo artesanal, langostinos y un toque de mishquina
- Fetuccini del Tunche — S/ 25 — Cecina ahumada, chorizo artesanal y langostinos en salsa de la casa
- Saltado del Tunche — S/ 25 — Cecina ahumada y langostinos flameados, con yucas fritas y patacones
- Saltado amazónico — S/ 25 — Cecina ahumada y chorizo regional flameados al wok, con patacones y yucas fritas
- Ceviche del Tunche — S/ 30 — Pesca local con limón mandarina y leche de tigre amazónica, con yucas fritas y trozos de chicharrón de pescado
- Costillas BBQ — S/ 28 — Costillas ahumadas en salsa BBQ, con papas nativas
- Costillas en miel de maracuyá — S/ 28 — Costillas ahumadas en salsa de miel de maracuyá, con papas nativas

### SALTEADOS AL WOK
- Lomo saltado — S/ 35 — 200 g de lomo fino
- Fetuccini a la huancaína con lomo saltado — S/ 37 — Con lomo fino
- Tallarines saltados de lomo fino — S/ 35
- Tallarines saltados de pollo — S/ 22
- Saltado de pollo — S/ 22
- Chaufa de pollo — S/ 17
- Chaufa amazónico — S/ 22 — Con cecina ahumada, chorizo artesanal y chicharrón
- Chaufa de cecina — S/ 20
- Chaufa de chancho — S/ 20
- Chaufa mar y selva — S/ 25

### PASTAS Y AL GRILL
- Fetuccini a lo Alfredo clásico — S/ 20
- Fetuccini a lo Alfredo con pechuga al grill — S/ 25
- Fetuccini a lo Alfredo con brochetas de pollo — S/ 25
- Fetuccini a lo Alfredo con lomo fino al grill — S/ 37
- Fetuccini a la huancaína con pechuga al grill — S/ 25
- Fetuccini a la huancaína con brochetas de pollo — S/ 26
- Fetuccini a la huancaína con lomo fino al grill — S/ 37
- Pechuga al grill — S/ 22
- Lomo fino al grill — S/ 35
- Brochetas de pollo — S/ 24

### DEL BARRIO

**Alitas** (selector de sabores)
- Sabores: Lemon Nikkei, Acevichadas, BBQ, Maracuyá, Mango hot, Crispi, Anticucheras
- Personal — 6 unidades, 1 solo sabor — S/ 20 *(elegir exactamente 1 sabor)*
- Para picar — 12 unidades, 3 sabores — S/ 35 *(elegir hasta 3 sabores)*

**Hamburguesas**
- Clásica S/ 16 · Doble S/ 27 · Palteada S/ 17 · Hawaiana S/ 18 · A lo pobre S/ 18 · Crispi S/ 15

**Salchipapas**
- Clásica — S/ 16 — Salchichas arrebozadas con huevo, con papas nativas
- Parillera — S/ 18 — Chorizo arrebozado con huevo, con papas nativas y trozos de pollo al grill
- Amazónica — S/ 20 — Cecina ahumada y chorizo artesanal arrebozados, con papas nativas
- Crispi chicken — S/ 18 — Salchichas arrebozadas con huevo y pollo crocante

> Si una descripción no está en la carta, escribe una breve; no cambies precios ni nombres de platos.

---

## 7. Imágenes (importante)

1. **Logo**: usa `img/logo.png` tal cual. No lo regeneres ni lo redibujes.
2. **Imágenes de platos**: genera imágenes para los platos destacados si tu entorno tiene una herramienta de generación de imágenes (fotografía gastronómica realista, luz cálida, fondo de madera/piedra oscura, vista 3/4 o cenital, sin texto ni marcas de agua). Mínimo 8 imágenes: hero, Combito del Tunche, Ceviche del Tunche, Chaufa del Tunche, Saltado amazónico, Costillas en miel de maracuyá, Jalea mixta, Alitas.
3. **Si no puedes generar imágenes**: no dejes tarjetas rotas. Crea un componente `DishImage` con **ilustración/placeholder elegante** (degradado de marca + ícono del tipo de plato) y deja todo listo para reemplazar con fotos reales colocando archivos en `public/img/dishes/<id>.webp`. El componente debe detectar si existe la imagen y, si no, mostrar el placeholder.
4. Guarda las imágenes en `public/img/` con nombres basados en el `id` del plato, y documenta en el README cómo reemplazarlas.
5. Genera también un **patrón/textura de fondo** sutil de hojas o trama amazónica en SVG, liviano.

---

## 8. Configuración editable (`/data/config.ts`)

Crea este archivo con estos datos reales. Lo que sigue marcado `TODO` lo completaré yo después:

```ts
export const config = {
  name: "La Esquina del Tunche",
  slogan: "Sabores de la selva y del mar", // puedes proponer uno mejor
  whatsapp: "51977480721",      // +51 977 480 721 (formato wa.me: sin + ni espacios)
  whatsappDisplay: "+51 977 480 721",
  address: "TODO: dirección escrita (si no la puedes obtener del enlace de Maps)",
  mapsUrl: "https://maps.app.goo.gl/Ngs9JfRKwAreCER58?g_st=ic", // botón "Cómo llegar"
  mapsEmbedUrl: "TODO: src del iframe de Google Maps (ver sección 4.7)",
  schedule: "TODO: horario de atención",
  orderTypes: { takeaway: true, dineIn: true }, // "Para llevar" (pide dirección) y "En el restaurante" (pide mesa)
  tableCount: 0,                                // TODO: si se conoce, limitar el número de mesa (0 = sin límite)
  takeawayNote: "TODO: zonas y costo de envío (opcional, se muestra bajo el campo Dirección)",
  orderGreeting: "¡Hola, La Esquina del Tunche! 👋\nQuiero hacer el siguiente pedido:", // editable
  orderFooter: "¡Gracias! 🙏",                  // editable
  social: {
    facebook: "https://www.facebook.com/share/1FKygWXNao/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@esquinadeltunche?_r=1&_t=ZS-9AVqDaacohI",
    instagram: "", // no tiene: no mostrar el icono si está vacío
  },
  currency: "S/",
};
```

Las redes con valor vacío **no deben renderizarse**. Los enlaces de redes y de Maps abren en pestaña nueva con `rel="noopener noreferrer"`.

---

## 9. Entregables y criterios de aceptación

- Proyecto Next.js que corre con `npm run dev` y se despliega en Vercel sin ajustes.
- Archivo `README.md` corto: cómo editar el menú, cambiar precios, cambiar el número de WhatsApp, reemplazar imágenes y generar el QR (enlace a la URL final).
- Probado visualmente en 360 px, 390 px y escritorio.
- Buscador, chips con scroll-spy, bottom sheet y el flujo completo de pedido (agregar platos, botón flotante, para llevar con dirección / en el restaurante con mesa, validación y mensaje de WhatsApp) funcionando.
- Sin errores de consola, sin warnings de accesibilidad graves.

**Antes de escribir código**, entrégame un plan breve (paleta elegida a partir del logo, par tipográfico, estructura de carpetas) y luego construye todo de una vez. No me hagas preguntas que se puedan resolver con los placeholders de la sección 8.

---

## Datos que faltan en la carta original (para completar después)

- **Bebidas, jugos, postres y entradas**: no aparecen en la carta; añadir cuando estén disponibles (dejar la estructura lista para nuevas categorías).
- **Poké bowls**: ingredientes, bases y salsas para el constructor.
- Confirmar el nombre exacto del sabor de alitas "Lemon Nikkei".
- Descripción de "Chaufa mar y selva" y de los platos de wok sin descripción.
- Horario de atención, dirección escrita y, si el enlace de Maps no se puede incrustar, el `src` del iframe.
- Zonas y costo de envío para pedidos "Para llevar" (opcional) y cantidad de mesas (opcional).
- Instagram (no tiene por ahora).
