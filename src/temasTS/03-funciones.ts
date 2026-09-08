let x=8
let y=2

function sumar(x:number,y:number):number{
    let a=6
    let b=7
    let res= a+b
console.log('la suma es '+res)
return x+y
}

let resultado = sumar(x,y)
console.log(resultado)

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean,
    mostrar:()=>void
}

const nuevaMascota:Mascotas={
    nombre: "papoi",
    edad: 5,
    raza:"pastor aleman",
    vacunado:true,
    mostrar() {
        console.log('la edad de ${this.nombre} es ${this.edad}')
    },
}

function mostrarMascota(mascota:Mascotas, x:number):void{
    mascota.edad+=x //mascota.edad=mascota.edad+x
    console.log(mascota)
   //onsole.log(mascota.mostrar())
}

mostrarMascota(nuevaMascota,3)