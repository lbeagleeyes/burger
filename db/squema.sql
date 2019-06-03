DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers
(
 burger_id   int NOT NULL AUTO_INCREMENT ,
 burger_name  varchar(50) NOT NULL ,
 devoured     bit ,
 primary key(burger_id)
);