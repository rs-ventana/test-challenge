// casos negativos
const calcularFactorial = require('../factorial');

describe('obtenerFactorial', () => {
    it('should return the correct factorial (negative integers)', () => {
        expect(calcularFactorial(-2)).toBe(null);
        expect(calcularFactorial(-10)).toBe(null);
    });
});
