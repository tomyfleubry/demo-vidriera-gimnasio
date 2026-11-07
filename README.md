# Forja · Vidriera de gimnasio

Página de demostración de Nexvia IA con marca, personas y datos ficticios.

Publicación: https://tomyfleubry.github.io/demo-vidriera-gimnasio/

## Contenido

- Agenda semanal con 28 clases, selector de lunes a sábado y pedido por clase, día y hora.
- Seis actividades, tres planes con precios de ejemplo, proceso de inicio y seis preguntas frecuentes.
- 34 enlaces al número ficticio `https://wa.me/5491100000000`: 28 clases, 3 planes, hero, cierre y flotante.
- Logo oficial de WhatsApp en un símbolo SVG reutilizado, `noindex, nofollow` y aviso explícito de demostración.
- Fotografías libres de Pexels optimizadas a WebP. Fuentes y selección en [DESIGN.md](DESIGN.md).

## Implementación

HTML, CSS y JavaScript en `index.html`, sin build. GitHub Pages publica `main` desde `/`. GSAP, ScrollTrigger y Lenis usan versiones fijas por CDN. La agenda se mejora con JavaScript: sin él se leen los seis días completos. Acordeones nativos. Movimiento reducido respetado.

Los enlaces preparan mensajes; la página no envía mensajes, confirma reservas ni procesa pagos. No hay base de datos, secretos ni automatizaciones.

Esta entrega no incluye video de recorrido, por pedido explícito de Tomas.
