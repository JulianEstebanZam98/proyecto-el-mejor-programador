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

// Usando forEach
let numerillos = [6, 7, 8, 9, 10, 11];
numerillos.forEach((numero, index) => {
  console.log("Numerillos " + (index + 1) + ": " + numero);
});

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
    persona.habilidades.join(", ")
  );
}
console.log(presentarPersona(persona));

//Vamos a usar operadores lógicos &&, ||, ! (and, or, not)
if (persona.esDesarrollador && persona.edad >= 18) {
  console.log(
    persona.nombre +
      " " +
      persona.apellido +
      " es desarrollador y mayor de edad"
  );
} else {
  console.log(
    persona.nombre + " " + persona.apellido + " no cumple con los criterios"
  );
}

if (persona.esDesarrollador || persona.edad < 18) {
  console.log(
    persona.nombre +
      " " +
      persona.apellido +
      " es desarrollador o es menor de edad."
  );
} else {
  console.log(
    persona.nombre +
      " " +
      persona.apellido +
      " es mayor de edad y no es desarrollador."
  );
}

if (!persona.esDesarrollador) {
  console.log(
    persona.nombre + " " + persona.apellido + " no es desarrollador."
  );
} else {
  console.log(persona.nombre + " " + persona.apellido + " es desarrollador.");
}

//Ejemplos mezclando todo lo visto anteriormente

let libro = {
  titulo: "Practicando programación desde cero",
  autor: "Julián Zambrano",
  añoDePublicación: 2024,
  disponible: true,
};

if (libro.disponible) {
  console.log(
    libro.titulo +
      " del autor " +
      libro.autor +
      " publicado en el año " +
      libro.añoDePublicación +
      " está disponible."
  );
} else {
  console.log(
    libro.titulo +
      " del autor " +
      libro.autor +
      " publicado en el año " +
      libro.añoDePublicación +
      " no está disponible."
  );
}

if (libro.disponible) {
  console.log(
    libro.titulo +
      " del autor " +
      libro.autor +
      " publicado en el año " +
      libro.añoDePublicación +
      " no está disponible."
  );
} else {
  console.log(
    !libro.titulo +
      " del autor " +
      libro.autor +
      " publicado en el año " +
      libro.añoDePublicación +
      " está disponible."
  );
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " es número par.");
  } else {
    console.log(i + " no es par.");
  }
}

function sumaNumeros(array) {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}

let numeritos = [1, 2, 3, 4, 5, 6];
console.log(sumaNumeros(numeritos));

// Usando reduce para sumar todos los números
let numerotes = [1, 2, 3, 4, 5, 6];
let sumita = numerotes.reduce((acumulador, numeroActual) => {
  return acumulador + numeroActual;
}, 0);
console.log("La suma total es: " + sumita);
