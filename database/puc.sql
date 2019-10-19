create database puc
use puc

create table usuario(
  id int (2) not null auto_increment primary key,
  nombre varchar (50) not null,
  apellidos varchar (50) not null,
  correo varchar (50) not null,
  contrasena varchar (50) not null
);

ALTER TABLE usuario ADD CONSTRAINT email_uk UNIQUE (correo);

  