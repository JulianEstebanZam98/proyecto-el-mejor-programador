// Ejercicio 1: Crear un array de 5 números y usar un bucle for para imprimir cada número.
let numeros = [5, 10, 15, 20, 25, 26, 30, 35];

for (let i = 0; i < numeros.length; i++) {
  console.log("Número " + (i + 1) + ": " + numeros[i]);
}

// Ejercicio 2: Definir una función que acepte un nombre y una edad, y que retorne un mensaje personalizado.
function saludar(nombre, edad) {
  return "Hola, " + nombre + " , tienes " + edad + " años.";
}

console.log(saludar("Andrea", 26));
console.log(saludar("Julián", 25));

// Definimos un objeto que representa a una persona
let persona = {
  nombre: "Julián",
  apellido: "Zambrano",
  edad: 25,
  esDesarrollador: true,
  habilidades: ["JavaScript", "React", "Node.js", "Express.js", "TypeScript"],
};

// Mostrar información de la persona
console.log("Nombre: " + persona.nombre);
console.log("Apellido: " + persona.apellido);
console.log("Edad: " + persona.edad);
console.log("Es desarrollador: " + persona.esDesarrollador);
console.log("Habilidades: " + persona.habilidades.join("<> "));

// Verificar si la persona es mayor de edad
if (persona.edad >= 18) {
  console.log(persona.nombre + " Es mayor de edad.");
} else {
  console.log(persona.nombre + " Es menor de edad.");
}

// Usando un bucle for para imprimir habilidades
for (let i = 0; i < persona.habilidades.length; i++) {
  console.log("Habilidades " + (i + 1) + " // " + persona.habilidades[i]);
}

// Usando un bucle while para contar habilidades
let contador = 0;

while (contador < persona.habilidades.length) {
  console.log(
    "Habilidad " + (contador + 1) + " => " + persona.habilidades[contador]
  );
  contador++;
}

//Vamos a crear una función que acepte un objeto persona y devuelva un mensaje personalizado.
function presentarPersona(persona) {
  return (
    "Hola, mi nombre es " +
    persona.nombre +
    " " +
    persona.apellido +
    " y tengo " +
    persona.edad +
    " años" +
    " y tengo habilidades en " +
    persona.habilidades
  );
}
console.log(presentarPersona(persona));
