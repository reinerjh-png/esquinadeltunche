# Prompt para actualizar bebidas y corregir el footer — La Esquina del Tunche

## Rol y objetivo

Actúa como desarrollador frontend sénior con experiencia en React, TypeScript, CSS responsive y diseño UX/UI.

Trabaja directamente sobre el proyecto existente de la carta digital de **La Esquina del Tunche**:

- Sitio publicado: https://esquinadeltunche.vercel.app/
- Proyecto: el código abierto en el editor.

Implementa los cambios indicados a continuación. No te limites a describirlos ni a devolver fragmentos de código.

## 1. Inspecciona el proyecto antes de modificarlo

1. Revisa la estructura del proyecto y localiza los archivos que definen el catálogo de bebidas y el footer.
2. Identifica cómo se representan los productos y sus precios en la carta.
3. Comprueba cómo está construido y estilizado el footer, incluidos sus contenedores, columnas, alineación, márgenes, espaciados, enlaces y comportamiento responsive.
4. Revisa la captura de pantalla adjunta por el usuario como referencia visual del problema del footer. Utilízala para identificar los desajustes concretos. Si la captura no está disponible en el contexto del editor, inspecciona el footer existente y corrige los problemas de alineación sin inventar elementos nuevos.
5. Conserva el framework, la estructura y los estilos existentes siempre que sea posible.

### Restricciones

- La carta es una aplicación estática: no utiliza base de datos.
- No agregues backend, base de datos, APIs ni servicios externos.
- No reconstruyas la web desde cero.
- No cambies innecesariamente la identidad visual, el logotipo, los colores ni el diseño general.
- No elimines funcionalidades existentes.
- No instales dependencias innecesarias.
- No modifiques otras categorías o productos que no estén relacionados con esta tarea.
- No cambies los precios solicitados.
- No afirmes que has probado algo que no hayas verificado.

---

## 2. Actualiza la categoría «Bebidas»

Busca los productos actuales de la categoría **Bebidas** y actualiza el catálogo para que contenga las siguientes presentaciones y precios.

### Chicha morada

| Presentación | Precio |
|---|---:|
| 1 litro | S/ 16 |
| ½ litro | S/ 8 |
| 1 vaso | S/ 5 |

### Cocona

| Presentación | Precio |
|---|---:|
| 1 litro | S/ 16 |
| ½ litro | S/ 8 |
| 1 vaso | S/ 5 |

### Camu Camu

| Presentación | Precio |
|---|---:|
| 1 litro | S/ 16 |
| ½ litro | S/ 8 |
| 1 vaso | S/ 5 |

### Gaseosas y agua

| Producto | Precio |
|---|---:|
| Coca-Cola personal | S/ 5 |
| Inca Kola personal | S/ 5 |

### Reglas para el catálogo de bebidas

1. Actualiza los precios existentes en lugar de crear productos duplicados.
2. Añade la presentación **1 vaso** para Chicha morada, Cocona y Camu Camu.
3. Elimina o sustituye las presentaciones anteriores de estos productos si ya no coinciden con la lista indicada.
4. No añadas «Agua mineral» a esta modificación ni elimines ese producto si ya existe: el usuario no ha solicitado cambiarlo.
5. Si la carta utiliza variantes, asegúrate de que cada tamaño muestre el precio correcto y que el precio seleccionado sea el que se añada al carrito.
6. Si el modelo actual no permite variantes con precios diferentes, crea presentaciones independientes, reutilizando los componentes existentes.
7. Muestra los tamaños de manera inequívoca: **1 litro**, **½ litro** y **1 vaso**.
8. Usa la moneda y el formato de precio que utiliza actualmente la carta, manteniendo los valores numéricos exactos.
9. Comprueba que el nombre, la presentación y el precio se mantengan correctamente en el carrito y en el mensaje de pedido, si estas funciones existen.
10. No inventes volúmenes para Coca-Cola personal o Inca Kola personal.

El resultado esperado para estas bebidas es de **11 entradas comerciales**: tres presentaciones de Chicha morada, tres de Cocona, tres de Camu Camu, Coca-Cola personal e Inca Kola personal. Si el agua mineral ya existe, debe conservarse sin cambios.

---

## 3. Corrige la distribución y alineación del footer

El footer actual tiene contenidos que no están bien acomodados. Corrige su estructura visual basándote en la captura de pantalla adjunta y en el diseño existente.

### Objetivos visuales

- Alinear correctamente los textos, enlaces, iconos y demás elementos del footer.
- Corregir márgenes, padding, separación entre columnas, alineación vertical y distribución horizontal cuando sean la causa del problema.
- Evitar que los elementos se superpongan, se corten, queden demasiado separados o se desplacen fuera de su contenedor.
- Mantener una jerarquía visual clara y espaciado consistente.
- Mantener los contenidos dentro del ancho de la página y respetar el diseño general de la web.
- Corregir cualquier desbordamiento horizontal en pantallas pequeñas.
- Mantener un aspecto coherente con la identidad visual actual de La Esquina del Tunche.

### Comportamiento responsive

Verifica el footer al menos en estos escenarios:

- **Móvil:** los elementos deben apilarse o reorganizarse de forma ordenada, con textos legibles y sin desbordamiento horizontal.
- **Tablet:** las columnas deben conservar una distribución equilibrada.
- **Escritorio:** los elementos deben alinearse y aprovechar el espacio sin quedar comprimidos ni excesivamente separados.

Utiliza las herramientas de estilos y los componentes que ya existen. Evita aplicar ajustes improvisados que solo funcionen en una resolución concreta. No agregues contenido nuevo al footer, salvo el cambio de autor especificado en la siguiente sección.

---

## 4. Sustituye «R.DEV» por «Reiner Jimenez» y enlázalo a LinkedIn

En el footer, busca el texto **R.DEV** y sustitúyelo por:

**Reiner Jimenez**

El nombre debe ser un enlace interactivo que lleve a este perfil de LinkedIn:

https://www.linkedin.com/in/reiner-jairo-jim%C3%A9nez-huaman-9234a9388

### Requisitos del enlace

- El texto visible debe ser exactamente **Reiner Jimenez**.
- El destino debe ser exactamente el perfil de LinkedIn proporcionado.
- Si el enlace se abre en una pestaña nueva, utiliza `target="_blank"` junto con `rel="noopener noreferrer"`.
- Debe poder activarse con teclado y tener un estilo visible al recibir el foco.
- Mantén un contraste adecuado y un indicador visual de que el nombre es un enlace, sin romper el diseño del footer.
- Añade un atributo `aria-label` solo si aporta una descripción accesible útil; no lo uses para sustituir un texto visible correcto.
- No cambies otros enlaces, logotipos o créditos del footer.
- No muestres simultáneamente «R.DEV» y «Reiner Jimenez»: el texto anterior debe quedar sustituido.

---

## 5. Calidad del código

- Reutiliza los componentes y las convenciones de estilos del proyecto.
- Evita duplicar los datos de bebidas en distintos archivos.
- Si los productos se definen en un archivo local de datos, actualiza ese archivo y no dupliques el catálogo dentro de los componentes.
- Conserva los identificadores existentes cuando sea posible para no romper referencias.
- No hagas un rediseño completo del footer si bastan correcciones puntuales.
- No agregues dependencias innecesarias.
- No cambies la configuración de despliegue ni otras partes no relacionadas.

---

## 6. Pruebas y validación obligatorias

Después de realizar los cambios:

1. Ejecuta el linter disponible en el proyecto.
2. Ejecuta la comprobación de tipos si está configurada.
3. Ejecuta la compilación de producción.
4. Comprueba que Chicha morada, Cocona y Camu Camu tengan las tres presentaciones y los precios indicados.
5. Comprueba que Coca-Cola personal e Inca Kola personal cuesten S/ 5.
6. Verifica que no se hayan creado bebidas duplicadas.
7. Si existe carrito, verifica que cada presentación añada el precio correcto.
8. Comprueba que el footer ya no tenga desalineaciones ni desbordamientos evidentes.
9. Revisa el footer en tamaños de pantalla móvil, tablet y escritorio, mediante navegador o herramientas de prueba disponibles.
10. Comprueba que «Reiner Jimenez» sea visible y que el enlace lleve al perfil correcto de LinkedIn.
11. Comprueba que el enlace sea accesible mediante teclado.
12. Asegúrate de que los cambios no afecten otras secciones de la carta.

Si no tienes acceso a un navegador o no puedes comprobar visualmente la página, indícalo claramente en el informe final.

---

## 7. Criterios de aceptación

La tarea estará terminada cuando:

- Los precios y presentaciones de las bebidas coincidan exactamente con este documento.
- Existan las tres presentaciones solicitadas para Chicha morada, Cocona y Camu Camu.
- Coca-Cola personal e Inca Kola personal cuesten S/ 5.
- No existan duplicados causados por la actualización.
- El footer tenga una distribución clara y funcione en móvil, tablet y escritorio.
- «R.DEV» haya sido sustituido por «Reiner Jimenez».
- El nombre «Reiner Jimenez» enlace al perfil de LinkedIn proporcionado.
- La aplicación compile sin errores atribuibles a los cambios.
- Las demás funcionalidades y el resto del catálogo permanezcan intactos.

---

## 8. Informe final

Al terminar, informa brevemente:

1. Qué archivos modificaste y por qué.
2. Qué precios y presentaciones de bebidas actualizaste.
3. Qué cambios realizaste en el footer para corregir su distribución.
4. Cómo implementaste el enlace de LinkedIn.
5. Qué pruebas ejecutaste y cuáles fueron sus resultados.
6. Si queda algún problema sin resolver o alguna verificación que no pudiste realizar.

## Instrucción final

Inspecciona primero el proyecto, implementa los cambios directamente en los archivos existentes y valida el resultado. No uses base de datos ni backend, no reconstruyas la web y no te limites a dar recomendaciones. Conserva intactas las partes no relacionadas con esta tarea.
