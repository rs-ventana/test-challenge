//utilicé una función que habia hecho para la tarea del 26 de abril. y le modifiqué algunos detalles

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Factorial de 0 y 1 es 1
    } else {
        return n * factorial(n - 1); // En otros casos, multiplicar por n - 1
    }
}

function getFactorial(numero) {
    // Verificar si el número es un entero positivo
    if (isNaN(numero) || numero < 1 || !Number.isInteger(numero)) {
       return null;
    }

    // Calcular el factorial del número
    return factorial(numero);
}

module.exports = getFactorial;


// funcionó en positivos
// funcionó en negativos
// funcionó para un caso extremo de un numero muy grande