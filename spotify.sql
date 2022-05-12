create schema bank;

use bank;

create table manager (
	id int(11) auto_increment,
    usuario char(20),
    pass char(64),
    email char(50),
    PRIMARY KEY(id)
);

create table message (
	id int(11)auto_increment,
    id_origin int(11),
    id_dest int(11),
    texto char(140),
    fecha datetime,
    PRIMARY KEY(id)
);


create table cliente (
	id int(11),
	id_manager int(11),
    usuario char(20),
    pass char(64),
    email char(50),
    balance double,
	PRIMARY KEY (id)
    
);

create table transferencia (
	id int(11),
	id_order int(11),
    id_benefit int(11),
	importe double,
    concept varchar(40),
	fecha datetime,
    PRIMARY KEY(id)
);

create table prestamo_relacion (
	id_prestamo int(11),
	id_client int(11)
    
);
create table prestamo (
	id int(11),
    nombre char(20),
    comision double,
    months int(11),
    PRIMARY KEY(id)
);

ALTER TABLE transferencia
ADD FOREIGN KEY (id_order) REFERENCES cliente(id);

ALTER TABLE transferencia
ADD FOREIGN KEY (id_benefit) REFERENCES cliente(id);



















