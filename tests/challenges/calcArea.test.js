const { calcArea } = require('../../src/challenges');

describe('Verifica se a função retorna a área de um quadrado', () => {
  it('Se ao passar uma base de "20" e uma altura de "40" o retorno é "400"', () => {
    expect(calcArea(20, 40)).toEqual(400);
  });
});
