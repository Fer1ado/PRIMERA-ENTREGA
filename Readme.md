<h1  style="text-align:center" > <font color="red">npm start</font> para levantar el programa </h1> 

---
<h3  style="text-align:center" >----> TESTING ENTREGABLE 1 <---</h3> 


<br>
<br>
<h5 style="text-align:center" >Listado de rutas sobre las que se trabajo para la entrega y comentarios</h5> 

<h6 style="text-align:center"> server levantado en (http://localhost:8080) <h6>

| METODO | RUTA | DESCRIPCION | COMMENTARIOS |
| :--- | :---: | :---: |:---: |
| GET  | /  | Saludo  | "Hola Mundo"  |
| GET | /api/products/:pid | Devuelve el producto que matchee el id ingresado | |
| GET | /api/products/list/:limit?|  Devuelve listado de productos con limite de registros| si se hace la busqueda con el numero 0 devuelve listado completo de productos |
| GET POST| /api/products| POST: Recibe un body con información y genera una entrada nueva en la base de datos GET: Devuelve el listado completod e productos | Realiza algunos chequeos básicos para evitar entradas repetidas y que no falten campos |
| PUT DELETE | /api/products/:id | DELETE borra item que coincida con el ID ingresado de la base de datos, PUT modifica el item que coincida con el ID ingresado en la base de datos | Realiza chequeos básicos para que no falten campos  |
| POST| /api/cart | Crea un carrito nuevo | |
| POST | /api/cart/:cid/product/:pid| Agrega productos al carrito de acuerdo al Id de carrito y producto a agregar | |
| GET DELETE | /api/cart/:cid | GET: Devuelve el contenido del carrito, DELETE: borra el carrito de la base de datos | |

