/*
  Ejercicio 1: Reverse a String
  Escribe una función reverseString que tome una cadena como entrada y devuelva la cadena invertida.
*/

function reverseString(str) {
  // Tu solución acá
  return str.split("").reverse().join("");
}

/*
  Ejercicio 2: Check for Palindrome
  Escribe una función isPalindrome que tome una cadena como entrada 
  y devuelva true si la cadena es un palíndromo, y false en caso contrario.
*/
function isPalindrome(str) {
  // Tu solución acá
  if (reverseString(str) === str) return true;
  return false;
}

/*
  Ejercicio 3: Find the Nearest Pair
  Dado un array de números enteros, 
  encuentra el par de elementos cuya diferencia es mínima. 
  En otras palabras, encuentra dos números en el array que 
  estén más cerca el uno del otro en términos de valor absoluto.

  Ejemplo:

  Entrada: [4, 2, 1, 7, 9, 10]
  Salida: [1, 2]
*/

function closestPair(arr) {
  // Tu solución acá
  //ordeno el array
  arrsort = arr.sort(function (a, b) {
    return a - b;
  });

  //creo las variables de referencia
  let minDif = Infinity;
  let eleMinDif = [];

  //recorro el arreglo ordenado calculando de diferencia entre elementos consecutivos
  for (let i = 0; i < arrsort.length - 1; i++) {
    const currentDif = arrsort[i + 1] - arrsort[i];

    // actualizamos las variables con los elementos que estan mas proximos el uno del otro
    if (currentDif < minDif) {
      minDif = currentDif;
      eleMinDif = [arrsort[i], arrsort[i + 1]];
    }
  }
  return eleMinDif;
}

/*
  Ejercicio 4: Calculadora - Programación Orientada a Objetos
  La calculadora debe ser capaz de realizar operaciones aritméticas básicas, 
  como suma, resta, multiplicación y división. 
  Además, debe mantener un registro del último resultado calculado 
  para que los usuarios puedan acceder a él si es necesario.

  La calculadora debe ser una clase llamada Calculator, que tenga los siguientes métodos:
  - add(a, b): Este método toma dos números como argumentos y devuelve la suma de los mismos. 
    Además, actualiza el último resultado calculado.

  - subtract(a, b): Este método toma dos números como argumentos y devuelve la resta del primero menos el segundo. 
    Además, actualiza el último resultado calculado.

  - multiply(a, b): Este método toma dos números como argumentos y devuelve el producto de los mismos. 
    Además, actualiza el último resultado calculado.

  - divide(a, b): Este método toma dos números como argumentos y devuelve el cociente del primero dividido por el segundo.
    Si el segundo número es cero, se debe lanzar un error indicando que la división por cero no está permitida. 
    Además, actualiza el último resultado calculado.

  - getLastResult(): Este método devuelve el último resultado calculado por la calculadora, simulando un historial.

  Además de estos métodos, debes agregar una función más compleja a la clase Calculator, 
  que calcule la potencia de un número. 
  Esta función debe ser asignada al prototipo de la clase y se llamará exponentiate(base, exponent). 
  Esta función toma dos argumentos: la base y el exponente, y devuelve la base elevada a la potencia del exponente. 
  La función debe manejar correctamente los casos donde el exponente es cero o negativo, lanzando un error en este último caso.
  Además, actualiza el último resultado calculado.

*/

class Calculator {
  // Tu solución acá
  constructor() {}
  add(a, b) {
    return (this.result = a + b);
  }
  subtract(a, b) {
    return (this.result = a - b);
  }
  multiply(a, b) {
    return (this.result = a * b);
  }
  divide(a, b) {
    if (b === 0) throw new Error("Division by zero is not allowed");
    return (this.result = a / b);
  }
  getLastResult() {
    return this.result;
  }
}

Calculator.prototype.exponentiate = function (base, exponent) {
  if (exponent < 0)
    throw new Error("Exponentiation with negative exponent is not allowed");
  return (this.result = Math.pow(base, exponent));
};

module.exports = {
  closestPair,
  isPalindrome,
  reverseString,
  Calculator,
};
