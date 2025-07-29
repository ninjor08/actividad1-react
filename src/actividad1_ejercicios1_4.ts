
// actividad1_ejercicios1_4.ts
// Autor: [Darío Herrera]
// Descripción: Ejercicios 1 al 4 de lógica básica en TypeScript aplicando buenas prácticas.

// Ejercicio 1: Función que calcula el área de un cuadrado
function calcularAreaCuadrado(lado: number): number {
    return lado * lado;
}

// Ejercicio 2: Función que suma los elementos de un arreglo
function sumarElementos(arreglo: number[]): number {
    return arreglo.reduce((acumulador, valor) => acumulador + valor, 0);
}

// Ejercicio 3: Devolver nuevo arreglo con los valores divididos para 5
const arregloOriginal: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const arregloDividido: number[] = arregloOriginal.map((valor) => valor / 5);

// Ejercicio 4: Calcular el promedio de calificaciones
type Alumno = {
    nombre: string;
    edad: number;
    calificacion: number;
};

const alumnos: Alumno[] = [
    { nombre: "Viviana", edad: 19, calificacion: 10 },
    { nombre: "Wendy", edad: 20, calificacion: 8 },
    { nombre: "Gerson", edad: 18, calificacion: 9 },
];

function calcularPromedio(alumnos: Alumno[]): number {
    const total = alumnos.reduce((sum, alumno) => sum + alumno.calificacion, 0);
    return parseFloat((total / alumnos.length).toFixed(2));
}

// Pruebas de consola (puedes comentar o descomentar según lo necesites)
console.log("Área del cuadrado (lado = 4):", calcularAreaCuadrado(4));
console.log("Suma de [1, 2, 3, 4]:", sumarElementos([1, 2, 3, 4]));
console.log("Arreglo dividido entre 5:", arregloDividido);
console.log("Promedio de calificaciones:", calcularPromedio(alumnos));
