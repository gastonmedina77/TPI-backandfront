CREATE TABLE producto (
 productos_id     integer   not null,
 nombre    varchar(20)  not null,
 stock    integer   not null,
 precio    decimal(12,2) not null,
 categoria   varchar(20)  null,
 fecha_actualizacion timestamp   null
);

ALTER TABLE producto
 ADD CONSTRAINT pk_productos 
  PRIMARY KEY (productos_id);
 

CREATE TABLE compras (
 id     integer   not null,
 fecha    timestamp   not null,
 proveedor   varchar(50)  null
);

ALTER TABLE compras 
 ADD CONSTRAINT pk_compras 
  PRIMARY KEY (id);
 
CREATE TABLE linea_compras (
 compraComprasId   integer   not null,
 linea_id    integer   not null AUTO_INCREMENT,
 productoProdutoId   integer   not null,
 cantidad   integer   not null,
 precio_unitario  decimal(12,2) not null
 PRIMARY KEY (linea_id)
);
 
ALTER TABLE linea_compras
 ADD CONSTRAINT pk_linea_compras 
  PRIMARY KEY (compraComprasId, lineacompra_id);
  
ALTER TABLE linea_compras
    ADD CONSTRAINT fk_linea_compras_ref_producto 
    FOREIGN KEY (productoProdutoId) 
    REFERENCES productos (producto_id);
   
ALTER TABLE linea_compras
    ADD CONSTRAINT fk_linea_compras_ref_compras 
    FOREIGN KEY (compraComprasId) 
    REFERENCES compras (compras_id);
    
CREATE TABLE venta (
 ventas_id     integer   not null,
 fecha    timestamp   not null,
 cliente    varchar(50)  null
); 

ALTER TABLE venta 
  ADD CONSTRAINT pk_ventas 
  PRIMARY KEY (ventas_id);
 
CREATE TABLE linea_venta (
 ventas_id   integer   not null,
 lineas_id   integer   not null,
 productos_id   integer   not null,
 cantidad   integer   not null,
 precio_unitario  decimal(12,2) not null
);
 
ALTER TABLE linea_venta 
 ADD CONSTRAINT pk_linea_ventas 
  PRIMARY KEY (ventas_id, lineas_id);
  
ALTER TABLE linea_venta
    ADD CONSTRAINT fk_linea_venta_ref_producto
    FOREIGN KEY (productoProductoId) 
    REFERENCES productos (producto_id);

ALTER TABLE linea_venta
    ADD CONSTRAINT fk_linea_venta_ref_venta
    FOREIGN KEY (ventaVentasId) 
    REFERENCES venta (ventas_id);



SELECT  `productos`.`producto_id`, 
        `productos`.`producto_nombre`, 
        `productos`.`stock`, 
        `productos`.`precio`, 
        `productos`.`categoria`, 
        `productos`.`fecha_actualizacion`, 
        `linea_venta`.`ventaVentasId` AS `linea_venta.ventaVentasId`, 
        `linea_venta`.`lineas_id` AS `linea_venta.lineas_id`, 
        `linea_venta`.`productoProductoId` AS `linea_venta.productoProductoId`, 
        `linea_venta`.`cantidad` AS `linea_venta.cantidad`, 
        `linea_venta`.`precio_unitario` AS `linea_venta.precio_unitario` 
        FROM `productos` AS `productos` 
        LEFT OUTER JOIN `linea_venta` AS `linea_venta` 
        ON `productos`.`producto_id` = `linea_venta`.`productoProductoId`;