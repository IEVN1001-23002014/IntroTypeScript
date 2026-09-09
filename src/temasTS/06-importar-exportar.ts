import { type Producto, calcularISV2 } from "./05-desestructuracion-funciones";

const carrito:Producto[]=[
    {
        desc:"Telefono1",
        precio:1000
    },
    {
        desc:"Telefono3",
        precio:2300
    },
    {
        desc:"Telefono3",
        precio:2388
    }
]
const[total,isv]=calcularISV2(carrito)
console.log("Total carrito: ",total)
console.log("ISV carrito: ",isv)
    
