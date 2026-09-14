USE rendiya;

INSERT INTO user_categories (id, name) VALUES
  (1, 'admin'),
  (2, 'client'),
  (3, 'instructor');

INSERT INTO product_categories (id, name) VALUES
  (1, 'Auto'),
  (2, 'Moto');

INSERT INTO brands (id, name) VALUES
  (1, 'Toyota'),
  (2, 'Volkswagen'),
  (3, 'Ford'),
  (4, 'Fiat'),
  (5, 'Honda'),
  (6, 'Yamaha'),
  (7, 'Chevrolet');

INSERT INTO colors (id, name) VALUES
  (1, 'Blanco'),
  (2, 'Gris'),
  (3, 'Rojo'),
  (4, 'Plata'),
  (5, 'Negro'),
  (6, 'Azul');

INSERT INTO zones (id, name) VALUES
  (1, 'CABA'),
  (2, 'GBA');

INSERT INTO users (id, first_name, last_name, email, password, image, user_category_id) VALUES
  (1, 'Mauro', 'Carbone', 'mauro@rendiya.ar', '$2b$10$kUVI/8fjPJPmk1ZY8rSagOZHlxOUXXKdjxLWFKVGcEAxRWU4WMPly', '/images/favicon.png', 1),
  (2, 'Lucía', 'Benítez', 'lucia.benitez@mail.com', '$2b$10$YSxQQY74GmGMzTv7QwF2AecbsNc.fVW/OFIQi1dzY1jmNZYUkg9Ei', '/images/favicon.png', 2),
  (3, 'Diego', 'Fernández', 'diego.fernandez@mail.com', '$2b$10$8YYqGiNy2s8gxOMzmgxrn.UJZd8ibHpm3xvF19DaiimMWSu5SAr76', '/images/favicon.png', 2),
  (4, 'Camila', 'Sosa', 'camila.sosa@mail.com', '$2b$10$DoJJ0.8iq/Ul9dea8gJZduQbUARFV2vKzGtvwfNR6oBkn0rYMKywu', '/images/favicon.png', 3),
  (5, 'Nicolás', 'Paz', 'nicolas.paz@mail.com', '$2b$10$bV2WbUZCJwH5jPuxpOtmKuPlJgmdXIDlGllKQdrTPAkfmYD7EMZ/y', '/images/favicon.png', 2),
  (6, 'Sofía', 'Ramos', 'sofia.ramos@mail.com', '$2b$10$U6q3yD7SYVqM5SrG6sBpJebHplaqdcyHQQzhxS3trimfnmQszJG8q', '/images/favicon.png', 2);

INSERT INTO products (id, name, description, image, price, product_category_id, brand_id, color_id, zone_id, transmission, license, vtv, insurance) VALUES
  (1, 'Toyota Etios', 'Uno de los autos más usados en el práctico de CABA: compacto, visibilidad alta y caja simple. VTV y seguro de examen incluidos.', '/images/etios.jpg', 42000, 1, 1, 1, 1, 'Manual', 'Clase B', 1, 1),
  (2, 'Volkswagen Gol Trend', 'Clásico de las autoescuelas porteñas. Dirección liviana y tamaño cómodo para maniobras en el circuito de CABA.', '/images/gol-tred.jpg', 40000, 1, 2, 2, 1, 'Manual', 'Clase B', 1, 1),
  (3, 'Ford Ka', 'Chico, fácil de estacionar y habitual en turnos de GBA. Ideal si practicaste con un auto corto.', '/images/ford-ka.jpg', 38000, 1, 3, 3, 2, 'Manual', 'Clase B', 1, 1),
  (4, 'Fiat Cronos', 'Sedán automático, aire y papeles al día. Opción cómoda para rendir en CABA si preferís no pelearte con el embrague.', '/images/cronos.jpg', 45000, 1, 4, 4, 1, 'Automática', 'Clase B', 1, 1),
  (5, 'Honda Wave', 'La moto más pedida para el examen clase A: liviana, baja y estable. Casco disponible como extra.', '/images/ona-wave.jpg', 28000, 2, 5, 5, 1, 'Manual', 'Clase A', 1, 1),
  (6, 'Honda Titan', 'Cub 150 habitual en CABA y GBA. Un poco más de peso que la Wave; sirve si ya viniste practicando en Titan.', '/images/titan.jpg', 30000, 2, 5, 3, 2, 'Manual', 'Clase A', 1, 1),
  (7, 'Yamaha Fazer', 'Moto de mayor porte para quienes rinden con una unidad similar a la que usan en la calle. Seguro de examen incluido.', '/images/fazer600.jpg', 35000, 2, 6, 6, 1, 'Manual', 'Clase A', 1, 1),
  (8, 'Chevrolet Prisma', 'Sedán de escuela, muy usado en GBA para clase B. Documentación y VTV al día.', '/images/etios.jpg', 41000, 1, 7, 1, 2, 'Manual', 'Clase B', 1, 1);

INSERT INTO carts (id, user_id, total, status) VALUES
  (1, 2, 70000.00, 'open');

INSERT INTO cart_items (id, cart_id, product_id, quantity, unit_price, subtotal) VALUES
  (1, 1, 1, 1, 42000.00, 42000.00),
  (2, 1, 5, 1, 28000.00, 28000.00);
