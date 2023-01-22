-- users table 
-- public.cita definition
-- Drop table
-- DROP TABLE public.cita;
CREATE TABLE public.cita (
  cita_id serial4 NOT NULL,
  id_cliente text NULL,
  id_servicio text NULL,
  nombres_cliente varchar(40) NOT NULL,
  apellidos_cliente varchar(40) NOT NULL,
  email varchar(255) NOT NULL,
  direccion_cliente varchar(40) NULL,
  tipo_servicio varchar(40) NULL,
  fecha_servicio date NULL DEFAULT CURRENT_DATE,
  descripcion_cita text NULL,
  telefono_cita varchar(20) NOT NULL,
  estado_cita varchar(20) NOT NULL DEFAULT 'Pendiente' :: character varying
);

-- public.login_admin definition
-- Drop table
-- DROP TABLE public.login_admin;
CREATE TABLE public.login_admin (
  email varchar(50) NOT NULL,
  contrasena varchar(200) NOT NULL,
  CONSTRAINT login_admin_email_key UNIQUE (email),
  CONSTRAINT login_admin_password_key UNIQUE (contrasena)
);

CREATE TABLE log_admin (
  serial_log serial,
  token VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  ip VARCHAR(255) NOT NULL,
  is_valid BOOLEAN NOT NULL,
  last_access TIMESTAMPTZ DEFAULT Now(),
  PRIMARY KEY (token, ip, username)
);

-- public.registro_usuario definition
-- Drop table
-- DROP TABLE public.registro_usuario;
CREATE TABLE public.registro_usuario (
  user_id serial NOT NULL,
  nombres varchar(40) NOT NULL,
  apellidos varchar(40) NOT NULL,
  email varchar(255) NOT NULL,
  telefono varchar(255) NOT NULL,
  direccion varchar(40) NULL,
  created_at date NULL DEFAULT CURRENT_DATE,
  CONSTRAINT registro_usuario_email_key UNIQUE (email),
  CONSTRAINT registro_usuario_pkey PRIMARY KEY (user_id)
);

INSERT INTO
  login_admin(email, contrasena)
VALUES
  (
    'reactwcs22@gmail.com',
    '$2a$12$2q2VAu9yX1nEVN1YF6F9O.M6sjXkOOQi65NXOPci5uYxd1fAtwGUO'
  );

-- public.servicio definition
-- Drop table
-- DROP TABLE public.servicio;
CREATE TABLE public.servicio (
  servicio_id serial NOT NULL,
  tipo_servicio varchar(40) NOT NULL,
  descripcion_servicio text NULL,
  CONSTRAINT servicio_pkey PRIMARY KEY (servicio_id)
);

-- DROP SCHEMA PUBLIC CASCADE;
-- CREATE SCHEMA PUBLIC;
CREATE TABLE IF NOT EXISTS Phone(
  phone_id INT PRIMARY KEY UNIQUE,
  telephone_No VARCHAR(255) NULL
);

CREATE TABLE IF NOT EXISTS Customer(
  customer_id INT PRIMARY KEY NOT NULL UNIQUE,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  addres VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone INT NULL,
  customer_appoitment_fk INT NULL,
  FOREIGN KEY (phone) REFERENCES Phone(phone_id) -- FOREIGN KEY (customer_appoitment_id) REFERENCES Customer_Apoitment(customer_appoitment_id)
);

CREATE TABLE IF NOT EXISTS Appoitmant(
  appoitmant_id INT PRIMARY KEY NOT NULL UNIQUE,
  sheduling_date VARCHAR(255) NOT NULL,
  application_date VARCHAR(255) NOT NULL,
  day_time DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS Customer_Apoitment(
  customer_appoitment_id INT PRIMARY KEY NOT NULL UNIQUE,
  customer_id INT NOT NULL,
  appoitmant_id INT NULL,
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
  FOREIGN KEY (appoitmant_id) REFERENCES Appoitmant(appoitmant_id)
);

ALTER TABLE
  Customer
ADD
  FOREIGN KEY (customer_appoitment_fk) REFERENCES Customer_Apoitment(customer_appoitment_id);

CREATE TABLE IF NOT EXISTS Services_Offered(
  tipe_service VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
  initial_date VARCHAR(255) NOT NULL,
  work_description VARCHAR(255) NOT NULL,
  finish_date VARCHAR(255) NOT NULL,
  appoitmant_service_fk INT NOT NULL -- FOREIGN KEY (appoitmant_service_id) REFERENCES Appoitmant_Service(appoitmant_service_id)
);

CREATE TABLE IF NOT EXISTS Appoitmant_Service(
  appoitmant_service_id INT PRIMARY KEY NOT NULL UNIQUE,
  appoitmant_id INT NULL,
  tipe_service VARCHAR(255) NOT NULL,
  FOREIGN KEY (appoitmant_id) REFERENCES Appoitmant(appoitmant_id),
  FOREIGN KEY (tipe_service) REFERENCES Services_Offered(tipe_service)
);

ALTER TABLE
  Services_Offered
ADD
  FOREIGN KEY (appoitmant_service_fk) REFERENCES Appoitmant_Service(appoitmant_service_id);