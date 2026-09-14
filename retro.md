# Retrospectiva — Sprint 1

Dinámica de la **estrella de mar**. El objetivo es mejorar la organización personal de cara al Sprint 2 (maqueta HTML y CSS).

## Comenzar a hacer

- Revisar la consigna completa **antes** de nombrar archivos o carpetas, para no rehacer entregables.
- Definir desde el inicio el nombre de la marca y no cambiarlo a mitad del sprint.
- Subir avances al repositorio cuando una parte ya está cerrada, no solo al final.

## Hacer más

- Contrastar cada entregable con el resumen de la consigna (README, referentes, fotos de wireframes, carpeta `design`).
- Mantener un tono formal y correcto en la documentación, alineado con una entrega académica.
- Dejar los wireframes en formato imagen **y** HTML, para poder consultarlos al maquetar.

## Continuar haciendo

- Trabajar por etapas: temática, referentes, estructura y recién después el diseño.
- Apoyar las decisiones en referentes reales (alquiler de autos y trámite del carnet).
- Registrar el origen del proyecto (autoescuela, CABA/GBA) para no perder el foco del usuario.

## Hacer menos

- Reescribir el README varias veces por cambios de tono. Conviene acordar el registro de voz una sola vez.
- Abrir el mismo proyecto en varias herramientas a la vez si no aporta a la entrega.

## Dejar de hacer

- Asumir datos de la consigna (por ejemplo, la cantidad de sprints) sin verificarlos.
- Tratar el diseño visual como un detalle menor: en este sprint la estética ya es parte del entregable.

## Conclusión

El Sprint 1 cumplió lo pedido: repositorio, temática, referentes, wireframes y boceto de identidad. Lo que hay que mejorar es la cadencia de commits y el respeto estricto de nombres y carpetas que pide cada iteración. Eso es justamente lo que el Sprint 2 exige (`Views/`, `styles/`, `retro.md` y el tablero).

---

# Retrospectiva — Sprint 2

Estrella de mar, a partir de la maqueta HTML y CSS.

## Comenzar a hacer

- Completar el tablero de GitHub **al inicio** del sprint (issues con estado), no al final.
- Hacer `git pull` antes de trabajar, sobre todo si el README se edita desde GitHub o desde otra PC.
- Levantar el sitio en el navegador (escritorio y ancho de celular) antes de dar por cerrada una página.

## Hacer más

- Commits con mensaje claro cuando cierra un entregable (retro, vistas, estilos).
- Comentarios breves en los HTML que indiquen qué historia cubre cada página.
- Usar **Create new issue** en el Project, para que las tarjetas queden también en Issues.

## Continuar haciendo

- Respetar los nombres que pide la consigna (`Views/`, `styles/`, `retro.md`).
- Maquetar primero (enlaces, errores visibles, menú mobile) y dejar la lógica para más adelante.
- Tomar la identidad ya definida (RendiYa, rojo/amarillo) y no rediseñar en cada sprint.

## Hacer menos

- Dejar el Project vacío hasta el último momento.
- Mezclar en un solo paso documentación, maqueta y publicación.

## Dejar de hacer

- Editar el README en GitHub y en local **sin** sincronizar después.
- Tratar el tablero como un adorno: si no tiene tarjetas, no sirve para el corrector.

## Conclusión

El Sprint 2 entregó la maqueta, la retro del Sprint 1, los estilos y el enlace al tablero. El atraso estuvo en organizar el Project y en no traer a tiempo los cambios hechos en GitHub. En el Sprint 3 conviene armar Express + EJS **por etapas** (retro y tablero, motor de plantillas, carpetas, parciales, altas/edición), para no romper la maqueta de un saque.

---

# Retrospectiva — Sprint 4

Estrella de mar, a partir del JSON y el CRUD de productos.

## Comenzar a hacer

- Armar el tablero del sprint **antes** de tocar código.
- Probar POST, PUT y DELETE en el mismo proceso de Node que se acaba de levantar.

## Hacer más

- Dejar las rutas REST como las pide Digital House (`/products/:id`, `/products/:id/edit`).
- Documentar en el README las rutas que el corrector va a abrir.

## Continuar haciendo

- `git pull` antes de trabajar si el README se toca en GitHub.
- Reusar el CSS y los parciales, no rehacer páginas.

## Hacer menos

- Tener dos servidores (puerto 3000 y 3001) al mismo tiempo.

## Dejar de hacer

- Dejar el Sprint commiteado solo en local.

## Conclusión

El Sprint 4 cerró el CRUD sobre JSON. El Sprint 5 pide la misma disciplina para usuarios: servicio, controlador, middlewares y tablero al inicio.

---

# Retrospectiva — Sprint 5

Estrella de mar, a partir de registro, login y rutas protegidas.

## Comenzar a hacer

- Definir de entrada qué rutas son de huésped, cuáles de usuario y cuáles públicas.
- Hashear las contraseñas de los usuarios de prueba, no dejar texto plano.

## Hacer más

- Mostrar el nombre en el header cuando hay sesión, para que se note el login.
- Probar el checkbox “Recordarme” cerrando el navegador o borrando la cookie de sesión.

## Continuar haciendo

- Replicar la estructura de productos (servicio JSON + multer + vistas).
- Actualizar el Project de GitHub con issues del sprint.

## Hacer menos

- Dejar vistas de error “de maqueta” en login/registro cuando ya hay validación real.

## Dejar de hacer

- Confundir “levantar el servidor” con “subir a GitHub”.

## Conclusión

El Sprint 5 suma sesión, cookies y middlewares. Lo importante para la corrección es que el registro encripte, el login persista y las rutas redirijan bien.

---

# Retrospectiva — Sprint 6

Estrella de mar, a partir de la base de datos y Sequelize.

## Comenzar a hacer

- Dibujar el DER antes de escribir `CREATE TABLE`, para no rehacer claves foráneas.
- Acordar nombres de tablas en inglés desde el primer día, porque Sequelize las replica.

## Hacer más

- Dejar `structure.sql` y `data.sql` listos para el corrector, aunque en local se use SQLite.
- Sembrar la base al arrancar si está vacía, para que `npm start` muestre el catálogo.

## Continuar haciendo

- Reutilizar las mismas vistas del CRUD JSON y solo cambiar el origen de los datos.
- Proteger alta/edición/baja con sesión.

## Hacer menos

- Inventar tablas N:M si el JSON ya trae un solo valor (color, zona, categoría).

## Dejar de hacer

- Dejar el CRUD apuntando a JSON cuando el sprint pide Sequelize.

## Conclusión

El Sprint 6 cierra el back-end: esquema, modelos y CRUD sobre base relacional. Lo que queda para el último sprint es pulir validaciones y lo que pida la consigna de cierre.

