interface Reproductor{
    volumen: number,
    segundo:number,
    cancion:string,
    detalles:Detalles
}

interface Detalles{
    autor:string,
    anio:number
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:"Mess",
    detalles:{
        autor:"Ed sheeran",
        anio:2015
    }
}

console.log("El volumen actual es: ",reproductor.volumen)
console.log("Segundo: ",reproductor.segundo)
console.log("Cancion: ",reproductor.cancion)
console.log("Autor: ",reproductor.detalles.autor)
console.log("Año: ",reproductor.detalles.anio)

const{volumen,segundo,cancion}=reproductor
const{autor,anio}=reproductor.detalles

console.log("El volumen actual es: ",volumen);
console.log("El segundo actual es: ",segundo);
console.log("El autor es: ",autor);
console.log("El año es: ",anio);

const dbz:string[]=['Goku','Vegeta','Trunks','Piccolo']
console.log(dbz[1])

const[p1,,,p2]=dbz
console.log(p2)
