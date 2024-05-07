
const isValidDNA = require("../dna.js");

describe('isValidDNA', () => {
  it('should return true for valid DNA sequence', () => {
    expect(isValidDNA("CTAG")).toBe(true);
  });

  it('should return false due to other' , () => {
    expect(isValidDNA("CTXG")).toBe(false);
  });

  it('should return false due to lowercase', () => {
    expect(isValidDNA("ctag")).toBe(false);
  });

  it('should return false for empty string', () => {
    expect(isValidDNA("")).toBe(false);
  });
});

