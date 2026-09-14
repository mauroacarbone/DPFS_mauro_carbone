# RendiYa

Proyecto final Full Stack de Digital House (DPFS). Son **7 sprints**.

La idea es un e-commerce para **alquilar autos y motos** el día que tenés que rendir la **prueba de manejo** en **CABA o GBA**.

Arranqué con esto porque mi primo tiene una autoescuela. Ahí se ve todo el tiempo el mismo problema: hay gente que está lista para el práctico y **no tiene auto ni moto**. A veces el familiar no presta el vehiculo, o no quieren rendir con uno que no conocen. Un rent-a-car común no sirve para eso: te alquilan por días, no por el rato del examen, y no está pensado para ir hasta el centro de emisión. **RendiYa** es para cubrir esa falta.

---

## Temática del sitio

No queremos armar “otro Hertz”. El sitio vende **un turno con un vehículo** para el trámite del carnet.

### Qué ofrecemos

- Autos y motos que sirvan para rendir en CABA y GBA.
- Horarios cortos: una práctica antes, o directo el día del examen.
- Podés llevar solo el vehículo o sumar un instructor.
- Cosas extras, tipo casco, o que te dejen cerca del lugar donde rendís.

En el e-commerce cada producto es un auto o una moto con su modalidad. Por ejemplo: un Fiat Cronos para examen en CABA, o una Honda Wave para moto. El carrito es la reserva: fecha, zona y extras.

### A quién le apuntamos

- Gente que ya está por rendir (teórico hecho o fecha de práctico cerca) y no tiene vehículo propio.
- Alumnos de autoescuela que quieren algo parecido a lo que vinieron manejando.
- Por ahora, CABA y GBA. Si anda, se puede ir sumando zona.

### Cómo se lo armamos a esa gente

Van a entrar apurados, no a mirar un catálogo de lujo. Entonces:

- Hablar claro: “reservá el auto para tu prueba”, sin vueltas raras.
- Filtrar por auto o moto, CABA o GBA, y la fecha.
- El precio es por turno, no por kilómetro ni con letra chica.
- En pocos clics: vehículo, horario y listo.

---

## Sobre mí

Soy Mauro Carbone, estoy finalizando el curso de Full Stack en Digital House. Este proyecto me sirve para aplicar Node y React, pero también sale de algo que veo de verdad: en la autoescuela de mi primo falta un servicio simple para el que está a punto de rendir y no tiene con qué presentarse, asi como tambien a aquellos que se prensentan a rendir sin un vehiculo pertinente. 

---

## Referentes

Me fijé sobre todo en alquiler de autos, porque el flujo (elegir, ver ficha, reservar) es el que más se parece. Después sumé dos sitios más del mundo del carnet.

1. **[Localiza Argentina](https://www.localiza.com/argentina/es-ar)**  
   La uso mucho de guía para el catálogo: categorías, fechas y ficha del auto. Ahí se entiende cómo mostrar cada “producto” nuestro.

2. **[Hertz Argentina](https://www.hertz.com.ar)**  
   El paso a paso clásico (lugar, fechas, extras). De acá saco la idea de meter el instructor o el casco como extra en el carrito, no como páginas aparte.

3. **[Sixt](https://www.sixt.com.ar)**  
   Se ve más actual, con filtros fáciles. No quiero que RendiYa parezca un sitio viejo.

4. **[Turo](https://turo.com)**  
   Cada auto tiene su ficha con fotos, datos y calendario. Eso me sirve para el detalle de producto.

5. **[Rentalcars](https://www.rentalcars.com)**  
   Buscás, comparás y reservás rápido. Justo lo que hace falta cuando ya tenés fecha de examen.

6. **[Argentina.gob.ar — Licencia de conducir](https://www.argentina.gob.ar/seguridadvial/licencianacionalconducir)**  
   Es el trámite de verdad. Me ayuda a no inventar el público: quién rinde, qué pide CABA/GBA, cómo habla la gente cuando googilea esto.

7. **[Automóvil Club Argentino (ACA)](https://www.aca.org.ar)**  
   Referente de acá, más institucional. Lo miré por el tono de confianza, que en un tema de carnet viene bien.

---

## Wireframes

Están en [`wireframes/`](wireframes/). Son el dibujo de la estructura (escritorio y celular, cajas simples), no el diseño final.

Las fotos que pide la consigna:

- Home → [wireframe-home.png](wireframes/wireframe-home.png) · [home.html](wireframes/home.html)
- Detalle de producto → [wireframe-detalle.png](wireframes/wireframe-detalle.png) · [detalle-producto.html](wireframes/detalle-producto.html)
- Carrito → [wireframe-carrito.png](wireframes/wireframe-carrito.png) · [carrito.html](wireframes/carrito.html)
- Registro → [wireframe-registro.png](wireframes/wireframe-registro.png) · [registro.html](wireframes/registro.html)
- Login → [wireframe-login.png](wireframes/wireframe-login.png) · [login.html](wireframes/login.html)

También hay un índice: [wireframes/index.html](wireframes/index.html).

---

## Design (opcional)

Carpeta [`design/`](design/). El look lo armé pensando en PedidosYa (el rojo, el “Ya”, el ícono tipo app) y en Mercado Libre (el amarillo, que se sienta cercano).

Para verlo todo junto: [design/index.html](design/index.html).

- Logo: [logo.svg](design/logo.svg) · versión sobre rojo: [logo-rojo.svg](design/logo-rojo.svg)
- Ícono: [isotipo.svg](design/isotipo.svg) · [isotipo-amarillo.svg](design/isotipo-amarillo.svg)
- Imagen: [logo-rendiya.png](design/logo-rendiya.png)

Colores: rojo `#E81C3A`, amarillo `#FFE600`, azul `#3483FA`, negro `#121212`.  
Fuentes: Nunito para el logo y los títulos, Inter para el resto de los textos.

---

## Tablero de trabajo

https://github.com/users/mauroacarbone/projects/1/views/1

---

## Sprint 2 — Maqueta HTML y CSS

- Retrospectiva: `retro.md`
- Tablero: https://github.com/users/mauroacarbone/projects/1/views/1
- Copia local: `tablero.html`
- Páginas en `Views/` y estilos en `styles/main.css`

| Página | Archivo |
|---|---|
| Home | Views/index.html |
| Detalle de producto | Views/productDetail.html |
| Carrito | Views/productCart.html |
| Registro | Views/register.html |
| Login | Views/login.html |

