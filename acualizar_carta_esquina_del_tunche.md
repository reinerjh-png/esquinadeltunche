# Prompt definitivo: actualización de la carta digital de La Esquina del Tunche

## Rol y objetivo

Actúa como un desarrollador frontend sénior especializado en React, TypeScript, diseño de interfaces, experiencia de usuario (UX/UI) y cartas digitales para restaurantes.

Debes auditar, corregir y ampliar la carta digital existente de **La Esquina del Tunche**:

- Sitio publicado: https://esquinadeltunche.vercel.app/
- Proyecto: el código que está abierto en el editor.

**Implementa los cambios directamente en el proyecto.** No te limites a proponer un plan, explicar pasos ni devolver fragmentos aislados de código.

---

## 1. Contexto técnico y restricciones

La carta es una aplicación web estática y **no utiliza una base de datos**. Los productos, precios y categorías se encuentran en archivos o componentes del frontend.

### Antes de editar

1. Inspecciona la estructura del proyecto.
2. Localiza dónde se definen actualmente los productos, precios, categorías, descripciones, imágenes y variantes.
3. Averigua cómo funcionan la navegación por categorías, los selectores de productos, el carrito y el envío de pedidos, si existen.
4. Compara el catálogo actual con el catálogo oficial detallado en este documento.
5. Identifica productos duplicados, nombres incorrectos, precios distintos y categorías inadecuadas.

### Restricciones obligatorias

- No reconstruyas la web desde cero.
- No añadas una base de datos, backend, API, autenticación, migraciones ni servicios externos.
- No cambies de framework ni alteres innecesariamente la arquitectura actual.
- No instales dependencias innecesarias.
- No cambies innecesariamente la identidad visual, los colores, el logotipo ni el diseño general.
- No elimines funcionalidades que ya funcionen.
- No inventes productos, precios, ingredientes, tamaños, descripciones, fotografías ni afirmaciones nutricionales.
- No cambies los precios proporcionados en este documento.
- No crees productos duplicados.
- No reemplaces fotografías con imágenes que no correspondan al producto.
- No afirmes que una funcionalidad funciona si no la has probado.
- Si falta información comercial, conserva lo que esté confirmado y documenta la duda en el informe final en vez de inventar una respuesta.

Usa los archivos de datos existentes. Si la información está repetida en distintos componentes, puedes centralizar el catálogo en una estructura local de datos si eso facilita el mantenimiento y no rompe la aplicación. No dupliques la misma fuente de información.

---

## 2. Categorías principales y orden

La carta debe tener estas **14 categorías**, exactamente en este orden:

1. Desayunos
2. Poké Bowls
3. Pescados y Mariscos
4. De la Casa
5. Salteados al Wok
6. Pastas y al Grill
7. Alitas
8. Hamburguesas
9. Salchipapas
10. Jugos
11. Bebidas
12. Frozen
13. Fresh Tea
14. Frappés

Elimina **Del Barrio** como categoría principal y distribuye sus productos en las tres categorías independientes: **Alitas**, **Hamburguesas** y **Salchipapas**.

Cada producto debe pertenecer a la categoría adecuada. Evita duplicar un producto solo para mostrarlo en dos categorías, salvo que el comportamiento actual lo requiera expresamente.

---

## 3. Catálogo oficial: Desayunos

Registra o corrige los siguientes productos y precios:

- **Combito del Tunche — S/ 15**
  - Descripción: Tacacho y juanecito con cecina ahumada, chorizo artesanal o chicharrón.
- **Juanecito — S/ 5**
- **Tacacho con chicharrón — S/ 16**
- **Tacacho con cecina — S/ 14**
- **Tacacho con chorizo — S/ 14**
- **Tacacho combinado — S/ 18**
  - Descripción: Dos presas a elección.
- **Tacacho mixto — S/ 22**
  - Descripción: Tres presas.

Elimina el producto genérico **Tacacho amazónico** si actualmente agrupa las presentaciones individuales anteriores. Sustitúyelo por los productos separados indicados.

Conserva selectores de presas únicamente si ya existen o si pueden implementarse de forma coherente con el catálogo real. No inventes opciones adicionales.

---

## 4. Catálogo oficial: Poké Bowls

- **Poké Bowl — S/ 16**
  - Descripción: Ármalo a tu gusto.

Conserva la personalización que ya tenga el proyecto. No inventes ingredientes ni complementos.

---

## 5. Catálogo oficial: Pescados y Mariscos

Registra o corrige los siguientes productos y precios:

- **Leche de tigre carretillero — S/ 20**
  - Cremosa, con pescado y chicharrón de pota.
- **Ceviche de barrio — S/ 24**
  - Ceviche de pescado acompañado de chicharrón de pota crocante.
- **Causa de tigre — S/ 22**
  - Causa rellena con leche de tigre y chicharrón de pota.
- **Causa acevichada — S/ 24**
  - Causa rellena de palta, acompañada de ceviche de pescado.
- **Causa de langostinos — S/ 25**
  - Roll de causa con langostinos, salsa golf y palta.
- **Arroz con mariscos — S/ 25**
  - Arroz cremoso con mixtura marina y zarza criolla.
- **Chaufa de mariscos — S/ 22**
  - Arroz frito con mixtura marina y maduros fritos.
- **Chaufa de langostinos — S/ 25**
  - Arroz frito con langostinos y maduros fritos.
- **Chicharrón de pescado — S/ 25**
  - Pesca del día crocante, con yucas fritas, chifles y zarza criolla.
- **Jalea mixta — S/ 30**
  - Pesca del día y mixtura marina crocantes, con yucas fritas, chifles y zarza criolla.
- **Chicharrón de pota — S/ 15**
  - Pota crocante servida con yucas fritas y zarza criolla.
- **Dúo marino — S/ 30**
- **Trío marino — S/ 40**

### Selectores de los combos marinos

Las opciones indicadas en el catálogo comercial son:

1. Chicharrón de pota
2. Chicharrón de pescado
3. Chaufa de mariscos
4. Aeropuerto de mariscos
5. Arroz con mariscos
6. Causa rellena
7. Ceviche clásico
8. Leche de tigre

El Dúo Marino debe permitir elegir **exactamente dos** alternativas y el Trío Marino **exactamente tres**.

Implementa o adapta el selector de acuerdo con las capacidades actuales del frontend. Valida la cantidad seleccionada antes de permitir añadir el combo al carrito. No permitas seleccionar menos o más opciones de las requeridas.

No asumas que las ocho alternativas existen también como productos individuales. Si una alternativa no existe como producto individual, no la añadas automáticamente al catálogo como producto independiente: puede figurar como opción del combo si la estructura local lo permite.

No inventes nuevas alternativas. Si la funcionalidad no puede implementarse de forma segura con la arquitectura actual, documenta exactamente qué falta.

---

## 6. Catálogo oficial: De la Casa

Mantén estos productos, precios y descripciones:

- **Chaufa del Tunche — S/ 25**
  - Arroz frito con cecina ahumada, chorizo artesanal, langostinos y toque de mishquina.
- **Fetuccini del Tunche — S/ 25**
  - Cecina ahumada, chorizo artesanal y langostinos en salsa de la casa.
- **Saltado del Tunche — S/ 25**
  - Cecina ahumada y langostinos flameados, acompañados de yucas fritas y patacones.
- **Saltado amazónico — S/ 25**
  - Cecina ahumada y chorizo regional flameados al wok, acompañados de patacones y yucas fritas.
- **Ceviche del Tunche — S/ 30**
  - Pesca local con limón mandarina y leche de tigre amazónica, acompañada de yucas fritas y trozos de chicharrón de pescado.
- **Costillas BBQ — S/ 28**
  - Costillas ahumadas en salsa BBQ, acompañadas de papas nativas.
- **Costillas en miel de maracuyá — S/ 28**
  - Costillas ahumadas en salsa de miel de maracuyá, acompañadas de papas nativas.

Elimina duplicados accidentales de estos productos, sin eliminar los productos legítimos que estén definidos una sola vez.

---

## 7. Catálogo oficial: Salteados al Wok

Registra o corrige:

- **Lomo saltado — S/ 35**
  - Descripción: 200 gramos de lomo fino.
- **Tallarines saltados de lomo fino — S/ 35**
- **Tallarines saltados de pollo — S/ 22**
- **Saltado de pollo — S/ 22**
- **Chaufa de pollo — S/ 17**
- **Chaufa amazónico — S/ 22**
  - Descripción: Cecina ahumada, chorizo artesanal y chicharrón.
- **Chaufa de cecina — S/ 20**
- **Chaufa de chancho — S/ 20**
- **Chaufa mar y selva — S/ 25**

El producto **Fetuccini a la huancaína con lomo saltado** pertenece a **Pastas y al Grill**, no a esta categoría.

No mantengas un chaufa genérico que oculte las variantes y sus precios si no hay un selector claro y funcional. Prioriza las presentaciones individuales enumeradas aquí. Antes de crear productos, comprueba que no existan ya con otros identificadores o nombres equivalentes.

---

## 8. Catálogo oficial: Pastas y al Grill

Registra o corrige estas presentaciones:

- **Fetuccini Alfredo clásico — S/ 20**
- **Fetuccini Alfredo con pechuga al grill — S/ 25**
- **Fetuccini Alfredo con brochetas de pollo — S/ 25**
- **Fetuccini Alfredo con lomo fino al grill — S/ 37**
- **Fetuccini a la huancaína con pechuga al grill — S/ 25**
- **Fetuccini a la huancaína con brochetas de pollo — S/ 26**
- **Fetuccini a la huancaína con lomo fino al grill — S/ 37**
- **Fetuccini a la huancaína con lomo saltado — S/ 37**
- **Pechuga al grill — S/ 22**
- **Lomo fino al grill — S/ 35**
- **Brochetas de pollo — S/ 24**

Si hay productos genéricos de fetuccini con variantes, evalúa si los selectores actuales permiten mostrar claramente cada presentación y su precio. Conserva el selector si es claro, preciso y funcional; de lo contrario, crea presentaciones individuales.

El cliente debe saber qué preparación compra y cuánto cuesta antes de añadirla al carrito. No muestres un precio inicial que pueda confundirse con el precio de otra variante.

---

## 9. Catálogo oficial: Alitas

Esta categoría tiene dos presentaciones:

### Alitas personal
- **Precio: S/ 20**
- **Cantidad: 6 unidades**
- **Selección: un solo sabor**

### Alitas para picar
- **Precio: S/ 35**
- **Cantidad: 12 unidades**
- **Selección: hasta tres sabores**

Sabores disponibles:

1. Lemon Nikkei
2. Acevichadas
3. BBQ
4. Maracuyá
5. Mango Hot
6. Crispi
7. Anticucheras

Implementa o conserva un selector de sabores que respete estas restricciones. Si el sistema permite configurarlo, utiliza dos productos configurables en vez de crear un producto independiente para cada combinación.

Muestra claramente la cantidad de unidades, el precio y las restricciones de selección. Valida la selección antes de añadir el producto al carrito.

---

## 10. Catálogo oficial: Hamburguesas

Crea o corrige estas seis presentaciones:

- **Clásica — S/ 16**
- **Doble — S/ 27**
- **Palteada — S/ 17**
- **Hawaiana — S/ 18**
- **A lo pobre — S/ 18**
- **Crispi — S/ 15**

La lista original tenía un formato ambiguo para «A lo pobre», interpretado aquí como S/ 18. Revisa si el código actual contiene un precio distinto y señala la discrepancia en el informe final. No inventes ingredientes ni descripciones.

---

## 11. Catálogo oficial: Salchipapas

Crea o corrige:

- **Clásica — S/ 16**
  - Salchichas arrebozadas con huevo, servidas con papas nativas.
- **Parrillera — S/ 18**
  - Chorizo arrebozado con huevos, servido con papas nativas y trozos de pollo al grill.
- **Amazónica — S/ 20**
  - Cecina ahumada y chorizo artesanal arrebozados, servidos con papas nativas.
- **Crispi Chicken — S/ 18**
  - Salchichas arrebozadas con huevo y pollo crocante.

---

## 12. Nueva categoría: Jugos

Crea la categoría **Jugos** y registra:

| Producto | Precio |
|---|---:|
| Papaya | S/ 6 |
| Piña | S/ 6 |
| Mango | S/ 7 |
| Surtido | S/ 7 |
| Plátano con leche | S/ 7 |
| Especial | S/ 8 |
| Papaya con leche | S/ 8 |
| Fresa con leche | S/ 8 |
| Lúcuma con leche | S/ 8 |
| Guanábana con leche | S/ 8 |
| Mango con leche | S/ 8 |
| Jugos Mix al gusto | S/ 9 |

Puedes normalizar mayúsculas y ortografía, pero conserva la identidad de cada nombre. No inventes ingredientes para «Surtido», «Especial» ni «Jugos Mix al gusto». Si ya existe un selector de ingredientes, reutilízalo solo con opciones confirmadas.

---

## 13. Nueva categoría: Bebidas

Crea la categoría **Bebidas** y registra:

| Producto | Precio |
|---|---:|
| Cocona — 1 litro | S/ 17 |
| Cocona — Vaso | S/ 8 |
| Camu Camu — 1 litro | S/ 18 |
| Camu Camu — Vaso | S/ 8|
| Chicha Morada — 1 litro | S/ 17 |
| Chicha Morada — Vaso | S/ 8 |
| Coca-Cola personal | S/ 4 |
| Inca Kola personal | S/ 4 |
| Agua mineral | S/ 4 |

Los tamaños de 1 litro y ½ litro deben ser visibles y no ambiguos. Puedes utilizar variantes con precios separados si la estructura existente lo permite; en caso contrario, crea productos individuales.

No inventes los volúmenes de las bebidas personales ni del agua mineral.

---

## 14. Nueva categoría: Frozen

Crea la categoría **Frozen** y registra:

| Producto | Precio |
|---|---:|
| Limonada Frozen — 1 litro | S/ 17 |
| Limonada Frozen — ½ litro | S/ 9 |
| Maracuyá Frozen — 1 litro | S/ 18 |
| Maracuyá Frozen — ½ litro | S/ 9 |
| Mango Frozen — 1 litro | S/ 18 |
| Mango Frozen — ½ litro | S/ 9 |
| Fresa Frozen — 1 litro | S/ 18 |
| Fresa Frozen — ½ litro | S/ 9 |
| Maracumango Frozen — 1 litro | S/ 18 |
| Maracumango Frozen — ½ litro | S/ 9 |

Los tamaños y precios deben verse claramente antes de añadir el producto al carrito. Puedes agrupar por sabor con variantes si el sistema permite manejar cada precio correctamente; si no, usa productos independientes.

---

## 15. Nueva categoría: Fresh Tea

Crea la categoría **Fresh Tea** y registra:

| Producto | Precio |
|---|---:|
| Negro Clásico | S/ 8 |
| Piña y Jengibre | S/ 9 |
| Maracuyá | S/ 9 |
| Fresa | S/ 10 |
| Limón y Miel | S/ 10 |
| Menta y Jengibre | S/ 10 |
| Mango | S/ 10 |

No inventes tamaños, ingredientes adicionales ni opciones de personalización. Normaliza mayúsculas y tildes sin cambiar la identidad comercial.

---

## 16. Nueva categoría: Frappés

Crea la categoría **Frappés** y registra:

| Producto | Precio |
|---|---:|
| Frappé clásico |S/ 13|
| Frappé de Piña | S/ 13|
| Frappé de Fresa | S/ 13 |
| Frappé de Mango | S/ 14 |
| Frappé Oreo | S/ 15 |
| Frappé de Lúcuma | S/ 15 |
| Frappé Protein-Fit | S/ 16 |

Conserva los once productos y sus precios. No inventes ingredientes, tamaños, suplementos, cantidades de proteína ni afirmaciones nutricionales. Mantén el nombre comercial **Protein-Fit** sin añadir promesas nutricionales no verificadas.

---

## 17. Requisitos de UX/UI y diseño adaptable

Conserva la identidad visual actual de La Esquina del Tunche. Haz solo los cambios visuales necesarios para que el catálogo ampliado sea claro, ordenado y fácil de utilizar.

La web debe seguir funcionando en móviles, tabletas y computadoras.

### Navegación por categorías

- Muestra las 14 categorías en el orden especificado.
- Permite cambiar de categoría de forma intuitiva.
- Si existe una barra horizontal de categorías, permite desplazarse por ella en móviles.
- Evita que los nombres largos se corten o se superpongan.
- Si hay navegación por anclas o desplazamiento automático, evita que los títulos queden ocultos bajo una barra fija.
- Mantén un comportamiento consistente entre categorías.

### Tarjetas de productos

Muestra, según las capacidades actuales del proyecto:

- Nombre del producto.
- Fotografía correspondiente.
- Descripción.
- Precio.
- Selector de variante, tamaño o personalización, cuando aplique.
- Acción para añadir al pedido.

Si falta una fotografía adecuada, conserva una imagen válida existente o utiliza el mecanismo de respaldo del proyecto. No uses una foto que represente otro producto.

### Selectores y precios

- Las opciones deben ser fáciles de entender y utilizar.
- Indica límites de selección y cantidades cuando correspondan.
- Valida las selecciones antes de permitir añadir al carrito.
- Muestra el precio de la presentación seleccionada.
- No permitas que una variante seleccionada se pierda al añadir el producto.
- Evita que el cliente confunda el precio base con el precio de una variante más costosa.

### Carrito y pedido

Si la carta tiene carrito o envío de pedidos:

- Conserva el comportamiento existente.
- Verifica que los productos nuevos puedan añadirse.
- Conserva el nombre, el precio, el tamaño y las opciones elegidas en cada línea del pedido.
- Verifica los subtotales y el total.
- Asegúrate de que las variantes del mismo producto no se mezclen si sus selecciones son distintas.
- Conserva el envío por WhatsApp u otra integración existente, si la hay.
- No cambies la integración ni su configuración salvo que sea necesario para mantener la compatibilidad.

---

## 18. Calidad y estructura del código

- Reutiliza los componentes y estilos existentes.
- Mantén los datos del catálogo en una estructura coherente y fácil de mantener.
- Evita definir los mismos productos en varios archivos.
- Utiliza identificadores internos únicos y estables.
- No dependas exclusivamente del nombre visible como identificador.
- Si el proyecto usa TypeScript, define o conserva tipos adecuados para productos, categorías y variantes.
- No agregues complejidad que no necesita una carta estática.
- No introduzcas dependencias innecesarias.
- No elimines código o funcionalidades sin comprobar primero su uso.

---

## 19. Validación obligatoria

Después de implementar los cambios:

1. Ejecuta los comandos de lint disponibles.
2. Ejecuta la comprobación de tipos si está configurada.
3. Ejecuta la compilación de producción.
4. Corrige los errores causados por tus cambios.
5. Comprueba que aparezcan las 14 categorías en el orden indicado.
6. Verifica que todos los productos del catálogo estén representados.
7. Comprueba los nombres, descripciones y precios frente a este documento.
8. Busca productos duplicados y nombres genéricos que oculten precios o variantes.
9. Comprueba las restricciones del selector de alitas.
10. Comprueba el número de alternativas del Dúo Marino y Trío Marino.
11. Comprueba las presentaciones y precios de los fetuccini.
12. Comprueba los tamaños de Bebidas y Frozen.
13. Comprueba que los productos nuevos se añadan correctamente al carrito.
14. Comprueba los subtotales y el total.
15. Comprueba la vista móvil y que la navegación por categorías no se rompa.
16. Comprueba que no haya imágenes rotas.
17. Comprueba que las funciones de pedido existentes sigan funcionando.

Si existen pruebas automatizadas, ejecútalas. No elimines pruebas para lograr una compilación exitosa.

Si no tienes herramientas para probar visualmente la web o no puedes probar una integración externa, dilo expresamente en el informe final.

---

## 20. Criterios de aceptación

La tarea se considera terminada cuando:

- Existen las 14 categorías especificadas y están ordenadas correctamente.
- «Del Barrio» ya no aparece como categoría principal.
- Alitas, Hamburguesas y Salchipapas están separadas.
- Todos los productos del catálogo de este documento están representados.
- Los precios coinciden exactamente con los indicados.
- Los productos genéricos no ocultan variantes o precios que el cliente necesita conocer.
- No se han creado duplicados.
- Las personalizaciones respetan las restricciones indicadas.
- Jugos, Bebidas, Frozen, Fresh Tea y Frappés están implementadas.
- El diseño sigue siendo adaptable y mantiene la identidad visual actual.
- El carrito y el flujo de pedido existentes siguen funcionando.
- La compilación termina correctamente, sin errores atribuibles a los cambios.

---

## 21. Informe final requerido

Cuando termines, presenta un resumen conciso que incluya:

1. Archivos modificados y propósito de cada cambio.
2. Categorías creadas, eliminadas o reorganizadas.
3. Productos añadidos, modificados o eliminados.
4. Duplicados encontrados y cómo se resolvieron.
5. Discrepancias comerciales que requieren confirmación, incluida cualquier diferencia en el precio de «A lo pobre».
6. Pruebas ejecutadas y resultados.
7. Problemas que no pudiste resolver.
8. Cualquier paso manual que todavía sea necesario.

**Instrucción final:** inspecciona primero el proyecto abierto, modifica directamente los archivos existentes y valida el resultado. No reconstruyas la web, no implementes una base de datos y no te limites a explicar qué harías. Ejecuta los cambios que puedas completar de forma segura y comunica con precisión cualquier limitación.
