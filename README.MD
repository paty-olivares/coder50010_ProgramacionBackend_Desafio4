DESAFIO 3: Servidores con express
OBJETIVO: Desarrollar el servidor basado en Node.JS y express, que escuche en el puerto 8080 y disponga de dos grupos de rutas: /products y /carts. 

Patricia Olivares - 23/12/2023

ENTREGABLE:
Se instalaron las dependencias a partir del comando npm install
npm start - arranca el servidor
products.json - Archivo de Productos
Cart.json  - Archivo del carrito
Se configuró el servidor para que esté corriendo en el puerto 8080.
Escenarios de Test: 
 ->  Ejecute la url http://localhost:8080/api/carts                 Para busca un cart nuevo
 ->  Ejecute la url http://localhost:8080/api/carts/3               Para Buscar  un cart por Id
 ->  Ejecute la url http://localhost:8080/api/carts/3/products/3    Para agregar un producto Id a una Cart Id
 -> Ejecute la url http://localhost:8080/api/products/ sin query, eso debe devolver todos los 10 productos.
 -> Ejecute la url http://localhost:8080/api/products/?limit=5 , eso debe devolver sólo los primeros 5 de los 10 productos.
 -> Ejecute la url http://localhost:8080/api/products/4, eso debe devolver sólo el producto con id=2.
 -> Ejecute la url http://localhost:8080/api/products/89, al no existir el id del producto, debe devolver un objeto con un error indicando que el producto no existe.
