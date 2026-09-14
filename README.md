# RendiYa

Proyecto final Full Stack — Digital House (DPFS), desarrollado en **7 sprints**.

E-commerce para el **alquiler de autos y motos** destinados a rendir la **prueba de manejo** del carnet en **CABA y GBA**.

El proyecto surge de un contexto cercano: mi primo tiene una **autoescuela**. Desde ese lugar se observa con claridad la falta de un servicio específico. Quien está por rendir el **examen práctico** en CABA o GBA, con frecuencia, **no dispone de automóvil ni de moto**, no puede utilizar el vehículo de un familiar, o prefiere no presentarse con uno que no conoce. Las empresas de alquiler tradicionales no resuelven esa necesidad: trabajan con plazos largos, no con un turno breve, y no están pensadas para acercarse al centro de emisión. **RendiYa** nace para cubrir exactamente ese servicio.

---

## Temática del sitio

**RendiYa** no es un rent-a-car genérico. Es un sitio de **reserva de vehículo y turno** para el trámite del registro de conducir.

### Qué ofrecemos

- Alquiler de **autos** y **motos** aptos para rendir en centros de CABA y GBA.
- Turnos por franja horaria (práctica previa y/o día de examen).
- Packs: solo vehículo, o vehículo con instructor.
- Extras: casco, documentación a bordo y acercamiento al centro de emisión.

Cada producto del e-commerce es un **vehículo con su modalidad**. Por ejemplo: Fiat Cronos para examen de auto en CABA, o Honda Wave para examen de moto. El carrito conforma la reserva: fecha, sede y extras.

### Público objetivo

- Personas que **están por rendir** (teórico aprobado o fecha de práctico próxima) y no tienen auto o moto propios, o no desean usar el de un familiar.
- Alumnos de escuelas de manejo que necesitan un vehículo **similar** al que utilizaron durante las clases.
- Residentes de CABA y GBA (en una primera etapa, CABA y Zona Norte; luego, el resto del conurbano).

### Cómo ajustamos la oferta a ese público

- Lenguaje claro, sin jerga de agencia: “reservá el auto para tu prueba”.
- Filtros por **tipo de licencia** (auto / moto), **zona** (CABA o GBA) y **fecha**.
- Precio por turno, sin condiciones poco transparentes.
- Recorrido breve: en pocos pasos se elige el vehículo, la sede y el horario.

---

## Sobre mí

Soy **Mauro Carbone** y estoy finalizando el curso de Full Stack en Digital House. Este proyecto me sirve para aplicar Node.js y React, pero también surge de algo que veo de verdad: en la autoescuela de mi primo falta un servicio simple para quien está a punto de rendir y no tiene con qué presentarse, así como para quienes se presentan al examen sin un vehículo pertinente.

---

## Referentes del mercado

Revisé sitios de los que tomo ideas de catálogo, reserva, estética y público. La mayoría corresponden a **alquiler de autos**; los últimos dos, al trámite del carnet y a un referente local de movilidad.

1. **[Localiza Argentina](https://www.localiza.com/argentina/es-ar)**  
   Catálogo por categoría, fechas de retiro y ficha del vehículo. Sirve de guía para armar nuestros productos (auto o moto + turno).

2. **[Hertz Argentina](https://www.hertz.com.ar)**  
   Recorrido clásico de alquiler (sucursal, fechas, extras). Inspiración para el carrito: instructor o casco como adicionales, no como páginas separadas.

3. **[Sixt](https://www.sixt.com.ar)**  
   Estética más actual y filtros claros. Referente de interfaz para que RendiYa no se perciba desactualizado.

4. **[Turo](https://turo.com)**  
   Cada unidad tiene ficha completa, fotos y calendario. De ahí tomo el detalle de producto (características y precio por período).

5. **[Rentalcars](https://www.rentalcars.com)**  
   Buscar, comparar y reservar en pocos pasos. Es el tipo de experiencia que necesita alguien con fecha de examen próxima.

6. **[Argentina.gob.ar — Licencia Nacional de Conducir](https://www.argentina.gob.ar/seguridadvial/licencianacionalconducir)**  
   El trámite real del carnet. Orienta el **público objetivo** (quién rinde, qué documentación, CABA/GBA) y el lenguaje de búsqueda habitual.

7. **[Automóvil Club Argentino (ACA)](https://www.aca.org.ar)**  
   Referente local de movilidad y formación vial. Útil para el tono de confianza que debe transmitir el sitio.

---

## Wireframes

Carpeta [`wireframes/`](wireframes/). Representan la estructura general del sitio (escritorio y celular), no el diseño final. Las **imágenes** son el entregable que solicita la consigna:

| Sección | Imagen | Versión navegable |
|---|---|---|
| Home | [wireframe-home.png](wireframes/wireframe-home.png) | [home.html](wireframes/home.html) |
| Detalle de producto | [wireframe-detalle.png](wireframes/wireframe-detalle.png) | [detalle-producto.html](wireframes/detalle-producto.html) |
| Carrito | [wireframe-carrito.png](wireframes/wireframe-carrito.png) | [carrito.html](wireframes/carrito.html) |
| Registro | [wireframe-registro.png](wireframes/wireframe-registro.png) | [registro.html](wireframes/registro.html) |
| Login | [wireframe-login.png](wireframes/wireframe-login.png) | [login.html](wireframes/login.html) |

Índice: [wireframes/index.html](wireframes/index.html).

---

## Design (opcional)

Carpeta [`design/`](design/). La identidad toma como referencia a **PedidosYa** (rojo, el “Ya”, ícono tipo aplicación) y a **Mercado Libre** (amarillo y un tono cercano).

Tablero completo: [design/index.html](design/index.html).

| Elemento | Archivo |
|---|---|
| Logo | [logo.svg](design/logo.svg) |
| Logo sobre rojo | [logo-rojo.svg](design/logo-rojo.svg) |
| Isotipo rojo | [isotipo.svg](design/isotipo.svg) |
| Isotipo amarillo | [isotipo-amarillo.svg](design/isotipo-amarillo.svg) |
| Imagen del logo | [logo-rendiya.png](design/logo-rendiya.png) |

- **Colores:** rojo `#E81C3A` · amarillo `#FFE600` · azul `#3483FA` · negro `#121212`
- **Tipografías:** Nunito ExtraBold (logo y títulos) · Inter (textos)
