const { footballPoints } = require('../../src/challenges');

describe('Verifica se o retorno da função "footballPoints"', () => {
  const expectResult = 19;
  const result = footballPoints(5, 4);
  it('Verifica se o retorno é um numero', () => {
    expect(typeof result).toBe('number')
  })
  it('Verifica se ao inserir "5" vitorias e "4" empates o retorno é "19"', () => {
    expect(result).toEqual(expectResult)
  })
})