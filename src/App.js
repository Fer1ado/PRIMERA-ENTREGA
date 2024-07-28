import cartRoute from "./routes/cart.routes.js";
import prodRoute from "./routes/products.routes.js";
import routeMap from "express-routemap"


///IMPORTACIONES Y SERVIDORES
import express from "express";

const PORT = 8080;
const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// SETEO DE PUERTO
app.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}`)
  routeMap(app)
})


//Saludo
app.get("/", (req,res)=>{
  res.send(`<h1>¡Hola Mundo!</h1>`)
})

//ROUTES
app.use("/api/products", prodRoute);
app.use("/api/cart", cartRoute)




