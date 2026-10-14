# La Esquina del Tunche — Carta Digital

Carta digital premium para **La Esquina del Tunche**, restaurante de cocina amazónica y marina peruana en Tingo María. Construida con Next.js 16, Tailwind CSS v4 y TypeScript.

## 🚀 Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📋 Cómo editar el menú

**Archivo:** `data/menu.ts`

Cada plato tiene esta estructura:

```ts
{
  id: "ceviche-del-tunche",      // ID único (también nombre de la imagen)
  name: "Ceviche del Tunche",    // Nombre visible
  description: "...",            // Descripción (opcional)
  price: 30,                     // Precio en soles (number) o null
  image: "/img/dishes/ceviche-del-tunche.jpg", // Ruta de la foto (opcional)
  tags: ["recomendado", "marino"],// Etiquetas opcionales
  options: [...]                 // Opciones/variantes (ver ejemplo de alitas)
}
```

**Para cambiar un precio:** busca el plato por nombre y cambia el número en `price`.  
**Para agregar un plato:** copia un objeto `Dish` existente, cambia el `id`, `name`, `price` y demás campos.  
**Para agregar una categoría:** agrega un objeto `Category` al array `menu` en el mismo archivo.

---

## ⚙️ Configuración del negocio

**Archivo:** `data/config.ts`

Campos que debes completar:

| Campo | Descripción |
|-------|-------------|
| `whatsapp` | Número sin + ni espacios (ej: `51977480721`) |
| `address` | Dirección escrita (para mostrar en la carta) |
| `mapsEmbedUrl` | `src` del iframe de Google Maps (ver abajo) |
| `schedule` | Horario de atención (ej: `"Lun–Dom: 8:00 am – 10:00 pm"`) |
| `takeawayNote` | Nota de envío/delivery (opcional) |
| `social.instagram` | URL de Instagram si la tienen |

### 🗺️ Cómo obtener el src del mapa

1. Ve a [maps.google.com](https://maps.google.com) y busca **La Esquina del Tunche**
2. Haz clic en **Compartir** → **Insertar un mapa**
3. Copia el valor del atributo `src` del `<iframe>`
4. Pégalo en `data/config.ts` → campo `mapsEmbedUrl`

---

## 🖼️ Cómo reemplazar las fotos de platos

Las imágenes van en `public/img/dishes/` con el nombre `<id-del-plato>.jpg` (o `.webp`).

**Ejemplo:** Para cambiar la foto del Ceviche del Tunche, reemplaza:
```
public/img/dishes/ceviche-del-tunche.jpg
```

El nombre del archivo debe coincidir con el `id` del plato en `menu.ts`. Si agregas un plato nuevo con `id: "lomo-especial"`, pon la foto en:
```
public/img/dishes/lomo-especial.jpg
```

Si no hay foto, el componente muestra un placeholder elegante automáticamente.

---

## 📱 Generar el código QR

Una vez desplegado en Vercel, usa [qr-code-generator.com](https://www.qr-code-generator.com) o [qrcodemonkey.com](https://www.qrcodemonkey.com) con la URL de tu carta (ej: `https://tunche.vercel.app`).

Imprime el QR en tamaño mínimo de 3×3 cm para que sea escaneable cómodamente.

---

## 🌐 Desplegar en Vercel

1. Sube el proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com) → **New Project** → importa el repositorio
3. Vercel detecta Next.js automáticamente — haz clic en **Deploy**
4. En ~2 minutos tendrás tu URL pública

No se necesita configuración adicional.

---

## 📂 Estructura del proyecto

```
tunche-app/
├── app/
│   ├── layout.tsx          # Fuentes, metadata, PWA
│   ├── page.tsx            # Página principal (scroll-spy, búsqueda)
│   └── globals.css         # Tokens CSS + design system
├── components/
│   ├── Header.tsx          # Barra superior fija
│   ├── HeroSection.tsx     # Portada / hero
│   ├── CategoryNav.tsx     # Chips de categorías (sticky + scroll-spy)
│   ├── FeaturedCarousel.tsx# Carrusel "Los favoritos del Tunche"
│   ├── MenuSection.tsx     # Sección de una categoría
│   ├── DishCard.tsx        # Tarjeta de plato
│   ├── DishSheet.tsx       # Bottom sheet de plato con opciones
│   ├── CartButton.tsx      # Botón flotante de WhatsApp/pedido
│   ├── CartSheet.tsx       # Bottom sheet del pedido completo
│   ├── MapSection.tsx      # Sección "Visítanos" con mapa
│   ├── Footer.tsx          # Pie de página
│   ├── Toast.tsx           # Notificaciones
│   └── DishImage.tsx       # Imagen con fallback elegante
├── data/
│   ├── menu.ts             # ← EDITA AQUÍ los platos y precios
│   └── config.ts           # ← EDITA AQUÍ la configuración del negocio
├── lib/
│   ├── cart.tsx            # Context del carrito con localStorage
│   └── whatsapp.ts         # Generador del mensaje de WhatsApp
└── public/
    ├── img/
    │   ├── logo.webp
    │   └── dishes/         # Fotos de platos (nombre = id del plato)
    └── manifest.json       # PWA manifest
```

---

*Carta digital por R.DEV*
