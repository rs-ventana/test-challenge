// casos extremos
const calcularFactorial = require('../factorial');

describe('obtenerFactorial', () => {
    it('should return infinity', () => {
        expect(calcularFactorial(100000)).toBe(null);
    });
});