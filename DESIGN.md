# Forja — gimnasio de barrio

Sistema definido antes del HTML, 6 de noviembre de 2026. Vidriera ficticia de Nexvia IA. Molde exclusivo: **Agenda de entrenamiento**. La página resuelve qué clase probar y cuándo; la grilla semanal es la primera sección tras el hero.

## Dirección y estructura

El lenguaje es el de una cartelera de gimnasio: titulares contundentes, horas alineadas, separadores claros y acciones inequívocas. El horario es el elemento distintivo; no se agregan comparadores, reseñas, cifras de resultados ni filtros de catálogo.

1. Header compacto con wordmark Forja y accesos a Horarios, Actividades y Planes. En celular se priorizan Horarios y Planes.
2. Hero compacto: titular «ENTRENÁ FUERTE, SIN VUELTAS», explicación de musculación, clases y seguimiento, CTA de prueba y ancla a horarios. Fotografía horizontal de entrenamiento, sin marco decorativo ni tarjetas superpuestas.
3. Agenda semanal: seis pestañas rectangulares Lun–Sáb, filas alineadas con hora, actividad, duración, intensidad y pedido específico. En celular cada fila usa hora a la izquierda, información a la derecha y botón debajo. No se necesita desplazar la página lateralmente. Se ven cinco clases por día, salvo el sábado (tres).
4. Actividades: seis fichas breves, con una foto de entrenamiento en barra fija acompañando el conjunto. Sin CTA en este bloque.
5. Planes: tres tarjetas comparables con listas y tildes SVG. Pase libre tiene borde naranja y etiqueta lima. Precios exactos del brief, sin precios calculados ni descuentos inventados.
6. Cómo empezás: tres pasos concretos, numerados. Sin retratos ni nombres de entrenadores inventados.
7. Preguntas: seis preguntas en acordeón nativo, sin dependencia de JavaScript.
8. Cierre naranja, CTA oscuro y ancla secundaria. Footer grafito con zona, horarios, Instagram ficticio, nota exacta y espacio para el flotante.

### Esquema

```text
FORJA                         Horarios  Actividades  Planes
ENTRENÁ FUERTE,       Musculación, clases y seguimiento.
SIN VUELTAS           [Probar una clase gratis] [Horarios]
──────────────── foto de entrenamiento ───────────────────
ELEGÍ TU DÍA. VENÍ A ENTRENAR.
Lun   Mar   Mié   Jue   Vie   Sáb
07:00  Actividad   Duración   Intensidad       [Probar]
... filas de agenda ...
Actividades → Planes comparables → Pasos → Preguntas → Cierre
```

## Tokens

| Token | Valor | Uso |
| --- | --- | --- |
| Grafito | `#16181D` | Fondo global, hero, planes, footer y texto sobre naranja |
| Superficie | `#1E2126` | Agenda, fichas, FAQ y plan destacado |
| Tinta clara | `#F2F2ED` | Texto principal y titulares sobre oscuro |
| Naranja energía | `#FF5C1A` | CTA principal, pestaña activa, borde de plan y cierre |
| Lima | `#C8F04B` | Etiquetas pequeñas e intensidad suave; nunca fondo de sección |
| Texto secundario | `#BFC1BF` | Párrafos y metadatos sobre grafito |
| Línea | `#3B3E43` | Separación de filas y tarjetas |
| Blanco | `#FFFFFF` | Logo oficial de WhatsApp en botones oscuros y flotante |
| WhatsApp | `#25D366` | Solo círculo flotante |

- **Anton 400**, Google Fonts: wordmark, titulares en mayúsculas, horas y precios. H1 50–92 px; H2 36–60 px; títulos de planes 28–34 px. Interlineado de títulos 1.04–1.12.
- **Manrope 400/500/600/700/800**, Google Fonts: párrafos, navegación, botones y tablas. Cuerpo 16 px/1.65; metadatos 13–14 px; botones 14–15 px/1.25. Líneas de texto de hasta 62 caracteres.
- Escala espacial: 4, 8, 12, 16, 24, 32, 48, 64, 88 px. Contenedor máximo 1184 px; márgenes 20 px en 430 y 32 px en escritorio. Secciones 64 px móvil / 88 px escritorio.
- Radios: 4 px botones y fotos, 8 px planes, 2 px pestañas, 999 px etiquetas y flotante. Sin glassmorphism ni sombras decorativas; sombra suave únicamente en el flotante.
- Todos los anclajes con `scroll-margin-top: 100px`. Header de 68–76 px. Footer con al menos 100 px inferiores; flotante de 58 px, SVG blanco de 28 px, margen 20 px.
- Naranja con texto grafito para contraste. Los botones claros usan el SVG en color del texto; los oscuros lo usan en blanco. Íconos interiores 20 px. SVG oficial exacto proporcionado por Tomas, una sola definición `i-wa` y referencias `use`.

## Fotografías elegidas y verificadas antes de programar

Todas descargadas de Pexels y abiertas como imágenes reales. Se optimizan a WebP en `assets/`, sin agregar marcas ni modificar personas. No son fotografías de un negocio real llamado Forja.

| Archivo publicado | Fuente / autor | Ubicación y encuadre |
| --- | --- | --- |
| `assets/entrenamiento-mancuernas.webp` | [Pexels 6550837, Andres Ayrton](https://www.pexels.com/photo/crop-man-with-dumbbell-in-gym-6550837/) | Hero. Detalle lateral/de espaldas de entrenamiento con mancuerna. Foto horizontal, sin rostros ni marcas; únicamente el número de peso del equipo. |
| `assets/entrenamiento-barra.webp` | [Pexels 31500885, Ventara Films](https://www.pexels.com/photo/female-athlete-lifting-barbell-in-gym-31500885/) | Actividades. Persona de espaldas entrenando en barra fija, sin textos ni marcas; object-position 50% 10% para conservar manos y torso. |

Licencia: [Pexels](https://www.pexels.com/license/). Descargas correctas, sin sustituciones por fallos. En la ampliación final previa al código se descartó también 4720780 por inscripciones en los discos de la barra; el hero pasa a la foto de bandas, de espaldas. Otras candidatas descartadas: 17210050 por marca de máquina, 20594792 por cartel y remera con marca; 14209295 por la composición posada y elementos de vestuario; 4164519 por calzado de marca y rostro; 6390228 por encuadre frontal lejano. No se publican descartes.

**Pulido tras la primera captura:** la foto de bandas 8436157 funcionó en celular, pero el recorte panorámico de escritorio acercaba demasiado la cabeza y quitaba contexto de entrenamiento. Se seleccionaron y revisaron ampliadas dos nuevas fotos antes de editar ese bloque: 6550837 para hero y 31500885 para actividades. La foto 16513598 de mancuernas, válida pero menos expresiva, también queda fuera del resultado final. No hubo errores de descarga; los cambios se debieron al encuadre.

## Interacciones y contenido

- Las 28 clases se guardan como HTML semántico: 5 de lunes a viernes y 3 los sábados. Sin JS se leen todos los días; con JS el selector muestra un día sin recargar. Navegación con flechas, Inicio/Fin, foco visible, `aria-selected` y paneles asociados.
- Cada clase abre el placeholder `https://wa.me/5491100000000` con mensaje que incluye actividad, día y hora. No se envía nada automáticamente ni se confirma un cupo.
- Tres planes exactos: Musculación $48.000/mes; Pase libre $68.000/mes; Trimestral pase libre $180.000 o 3 cuotas de $66.000. Botón por plan con mensaje específico.
- Hero, cierre y flotante llevan pedidos de clase de prueba. Total: 34 enlaces WhatsApp (28 clases + 3 planes + 3 generales). Ninguno fuera de estos lugares.
- Horario del gimnasio: lun–vie 7–22 h, sábados 9–14 h, domingos cerrado. Zona Colegiales, CABA; no se inventa dirección puntual. Instagram `@forja.gym` mostrado como ficticio, sin enlazar a un eventual tercero.
- FAQ de pagos: efectivo, transferencia y tarjeta son datos ficticios de la muestra; cuotas solamente las indicadas para el trimestral. No hay checkout, cobros, datos bancarios, reservas automáticas ni integración de pagos. Política PAGOS-CUIDADOS revisada: controles de integración no aplican, porque no existe una integración ni se activa dinero real.
- Sin servicios extra, credenciales, reseñas, falsas urgencias ni promesas de resultados. Copy en voseo.

## Movimiento y fallbacks

GSAP 3.15.1 + ScrollTrigger y Lenis 1.3.27 desde CDN, versiones fijas. Integración basada en documentación oficial de Lenis (consultada mediante Context7) y `gsap.matchMedia`. Lenis tiene una sola fuente de frames (ticker GSAP), duración corta, rueda a velocidad 1 y gesto táctil nativo. Anclas con `anchors: true`: Lenis respeta los 100 px de scroll-margin CSS, sin sumar otro offset (evita duplicar la distancia). Nunca doble bucle de animación.

Revelados cortos de 0,45 s y 16 px, una vez por grupo; sin ocultar contenido en CSS. `prefers-reduced-motion` desactiva Lenis y animaciones, incluso si cambia con la página abierta. No hay vídeo, autoplay, paralaje ni scroll secuestrado. Si falla el CDN, la agenda y el acordeón funcionan y el contenido sigue visible.

## Referencias y revisión del plan

Del brief: Qivox para comparación de planes, Invictus para tabla de horarios, Black Center para pasos concretos, Start-Fit para la prueba y Elite para precios claros. Se estudió contenido público disponible; no se copian textos, imágenes ni datos de esas empresas. Black Center no resultó accesible mediante lectura web; la pauta suministrada por Tomas basta para el proceso solicitado.

La paleta oscura/naranja y los titulares contundentes son requisitos de este rubro, no el elemento diferenciador. Para evitar repetir las otras siete muestras, el foco se concentra en el tablero operativo de clases y no en una sucesión de tarjetas fotográficas. La navegación de días parece una agenda, no pastillas de catálogo. Las tarjetas se reservan para las actividades breves y la comparación de planes que exige el brief.

## Criterios de verificación

430 px primero; luego 390, 768 y 1440 px. Sin overflow horizontal, imágenes válidas, texto hero y CTA completos, títulos visibles al navegar, footer sin obstrucción. Se revisan las seis pestañas y los 28 mensajes, los 3 precios y cuotas, noindex/nofollow, nota ficticia, acordeones, teclado, movimiento reducido, caída de CDN y JS deshabilitado. La URL pública debe servir el commit y verse renderizada antes del reporte. No se graba video.

## Resultado del molde

Agenda de entrenamiento: hero compacto de fuerza, grilla de clases inmediatamente debajo, días como navegación funcional, pedidos específicos por clase y planes comparables con precios visibles. Mantiene Anton + Manrope y la paleta grafito/naranja con lima solo en detalles. Sin comparador ni filtros de catálogo.

Verificación local completada a 320, 390, 430, 768 y 1440 px: sin desborde, dos fotos cargadas, 28 horarios y mensajes comparados contra el brief original, 34 enlaces al placeholder, navegación por teclado, seis acordeones, footer legible y CTA del hero en una línea. Rueda de 600 px produce 600 px de desplazamiento; anclas quedan a 100 px bajo el borde superior. Cambio de preferencia de movimiento desactiva Lenis y ScrollTrigger. Sin CDN siguen funcionando los días; sin JS se ven las 28 clases. Cero errores de ejecución o solicitudes fallidas en la prueba con red normal. Logo oficial comprobado también con capturas ampliadas.
