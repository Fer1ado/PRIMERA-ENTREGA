import { promises as fs } from "fs";
import { _dirname } from "../path.js";
import Product from "./Product.js";

export default class ProductManager {
  
  constructor() {
    (this.products = []), 
    (this.ruta = `${_dirname}/Json/products.json`);
    (this.mockObject = {   
      "title": "string",
      "description": "string",
      "price": 123,
      "thumbnail": ["string1","string2","string3"],
      "code": "string",
      "stock": 123,
      "status": "boolean"})
  }

  async addProduct(input) {
    //chequeo si todos los campos estan completos para agregar el producto
    const integrity = input.hasOwnProperty("title" && "description" && "price" && "thumbnail" && "code" && "stock" && "status")
    const check = Object.values(input).some((valor) => valor === undefined);
    
    //transformo a objeto el archivo json para chequear por duplicados
    const producto = JSON.parse(await fs.readFile(this.ruta, "utf-8"));
    //chequeo si el producto no esta repetido
    const prod = producto.some((prod) => prod.code === input.code);

    console.log(producto);


    try{
      if (!integrity){
        console.log("Información erroena o incompleta")
        return {status: "failed", message: "INFORMACIÓN ERRONEA: EL POSTEO DEBE TENER EL SIGUIENTE FORMATO", objetoEjemplo: this.mockObject}
      }

      if (check) {
        console.log("Producto Incompleto");
        return{status: "failed", message: "PRODUCTO INCOMPLETO, FALTAN RELLENAR CAMPOS"}
      }

      if (prod) {
        console.log("Producto ya agregado");
        return{status: "failed", message: "PRODUCTO YA AGREGADO"}
      } else {
        const newProduct = new Product(input.title, input.description, input.price, input.thumbnail, input.code, input.stock, input.status)
        console.log(newProduct)
        this.products.push(...producto, newProduct);
        await fs.writeFile(this.ruta, JSON.stringify(this.products))
        return{status: "success", message: "NUEVO PRODUCTO AGREGADO A LA BASE DE DATOS", product: newProduct};
      }
    }
    catch(e){
      console.error("ERROR AL REALIZAR OPERACION", e.message)
    }
  }

  async getProducts(limit) {
    const producto = JSON.parse(await fs.readFile(this.ruta, "utf-8"));
   
    try{  
      if(!limit) {
        console.log("LISTADO COMPLETO DE PRODUCTOS");
        console.table(producto);
        return {status: "success", message: "LISTADO COMPLETO DE PRODUCTOS", Listado: producto}
      }else{
          let respuesta = []
          for(let i=0; i< limit; i++){ 
          respuesta = respuesta.concat(producto[i])
          }
      console.table(respuesta)
      return {status: "success", message: `LISTADO DE ${limit} PRODUCTOS ECONTRADOS`, Listado: respuesta}
      }
    } 

    catch(e){
    console.error("ERROR AL CONSULTAR LISTADO", e.message);}
  }

  async getProductById(id) {
    const ID = parseInt(id)
    const producto = JSON.parse(await fs.readFile(this.ruta, "utf-8"));
    const produ = producto.find((prod) => prod.id === ID);
  
    try{
      if (produ) {
        console.log(`ENCONTRAMOS EL SIGUIENTE PRODUCTO CON ID: ${id}`);
        console.table(produ);
        return {status: "success", message: "ENCONTRAMOS EL SIGUIENTE PRODUCTO EN LA BASE DE DATOS", product: produ}
      } else {
        console.error(`NO HAY PRODUCTOS CON ID ${id} EN LA BASE DE DATOS `)
        return{status: "failed", message: "NO SE ENCONTRARON PRODUCTOS CON ESE ID EN LA BASE DE DATOS"}
      }
      }

    catch(e){
    console.error("Error al intentar operación", e.message);}
  }
  

  async updateProduct(id, edicion) {
    const integrity = edicion.hasOwnProperty("title" && "description" && "price" && "thumbnail" && "code" && "stock" && "status")
    const ID = parseInt(id)
    const producto = JSON.parse(await fs.readFile(this.ruta, "utf-8"));
    const index = producto.findIndex((prod) => {return prod.id === ID;});

    try{
      if (!integrity){
        console.log("Información erronea o incompleta")
        return {status: "failed", message: "INFORMACIÓN ERRONEA O INCOMPLETA EL POSTEO DEBE TENER EL SIGUIENTE FORMATO", objetoEjemplo: this.mockObject}
      }
      if (index !== -1) {
        const prodOriginal = producto[index]
        producto[index] = { ...producto[index], ...edicion };
        console.log(` EL PRODUCTO CON ID: ${id} FUE MODIFICADO `);
        console.log(producto[index]);
        await fs.writeFile(this.ruta, JSON.stringify(producto));
        return {status: "success", message: "PRODUCTO MODIFICADO CON EXITO", producto : producto[index]}
        } else {
          return{status: "failed", message: "NO SE ENCONTRARON PRODUCTOS CON ESE ID EN LA BASE DE DATOS"}
      }
    }

    catch(e){
    console.error("Error al actualizar producto:", e.message);
  }

  }

  async deleteProduct(id) {
    const ID = parseInt(id)
    const producto = JSON.parse(await fs.readFile(this.ruta, "utf-8"));
    const produ = producto.find((prod) => prod.id === ID);

    try{
      if (produ) {
        console.log(`EL SIGUIENTE PRODUCTO HA SIDO ELIMINADO CON EXITO`);
        console.log(produ);
        await fs.writeFile(
          this.ruta,
          JSON.stringify(producto.filter((prod) => prod.id != id))
        )
        return {status: "success", msg: "PRODUCTO ELIMINADO CON EXITO", item: {produ} }
        
      } else {
        return {status: "failed", msg: "PRODUCTO NO ENCONTRADO" };
      }
    }

    catch(e){
      console.error("Error al realizar la operacion", e.message)
    }
  }
}
