interface IAlumno{
    nombre: string,
    apellido:string,
    edad:number,
    email:'lopez@gmail.com',
    nota:number
}
const alumno={
    nombre: 'Mario',
    apellido: 'Lopez',
    edad: 22,
    email: 'lopez@gmail.com',
    nota:5
}

console.log(alumno)

let mascotas=['perro','gato','perico']
console.log(mascotas)
mascotas[1]="Nuevo Gato"
console.log(mascotas)
mascotas.push('leon')
console.log(mascotas)

let tem:(number|string)[]=[]
tem.push(11)
tem.push('once')
console.log(tem)