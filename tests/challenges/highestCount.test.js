const { highestCount } = require('../../src/challenges');

describe('Verifica o retorno da função "highestCount"', () => {
  const arrayToBeTested = [1, 5, 8, 7, 9, 5, 1, 3, 9, 9, 4]
  const result = highestCount(arrayToBeTested);
  const expectResult = 3;
  it('Verifica se o retorno é um number', () => {
    expect(typeof result).toBe('number');
  });
  it('Verifica que o retorno seja 3', () => {
    expect(result).toEqual(expectResult);
  });
});