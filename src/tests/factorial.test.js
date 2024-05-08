// casos positivos
const getFactorial = require("../factorial.js");

describe('obtenerFactorial', () => {
    it('should return the correct factorial (positive integers)', () => {
        expect(getFactorial(2)).toBe(2); // lo que debe de ser de lo contrario se muestra el error en la consola. 
        expect(getFactorial(10)).toBe(3628800);
    });
});


