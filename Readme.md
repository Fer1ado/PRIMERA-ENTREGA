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
| GET | /api/products/list/:limit?|  Devuelve listado de productos con limite de registros| El limit no esta pedido, pero hice este curso en otra oportunidad y se que hay que incluir la funcionalidad mas adelante|
| GET POST| /api/products| POST: Recibe un body con información y genera una entrada nueva en la base de datos GET: Devuelve el listado completod e productos | El POST ealiza algunos chequeos básicos para evitar entradas repetidas y que no falten campos |
| PUT DELETE | /api/products/:id | DELETE borra item que coincida con el ID ingresado de la base de datos, PUT modifica el item que coincida con el ID ingresado en la base de datos | El PUT realiza chequeos básicos para evitar agregar productos con campos incompletos |
| GET POST| /api/cart | POST: Crea un carrito nuevo GET: Devuelve listado completo de carritos creados | El GET no esta pedido pero es mas simple para el testing |
| POST | /api/cart/:cid/product/:pid| Agrega productos al carrito de acuerdo al Id de carrito y producto a agregar | |
| GET DELETE | /api/cart/:cid | GET: Devuelve el contenido del carrito, DELETE: borra el carrito de la base de datos | |

