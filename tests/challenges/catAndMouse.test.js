const { catAndMouse } = require('../../src/challenges');

describe('Verifica os retorno da função "catAndMouse"', () => {
  it('Testa se o retorno é uma string', () => {
    const result = catAndMouse(3, 4, 1);
    expect(typeof result).toBe('string');
  });
  it('Testa se com os parametros corretos o retorno pe "cat1"', () => {
    const result = catAndMouse(3, 4, 1);
    expect(result).toBe('cat1');
  });
  it('Testa se com os parametros corretos o retorno pe "cat2"', () => {
    const result = catAndMouse(3, 1, 4);
    expect(result).toBe('cat2');
  })
  it('Testa se com os parametros corretos o retorno pe "os gatos trombam e o rato foge"', () => {
    const result = catAndMouse(3, 4, 4);
    expect(result).toBe('os gatos trombam e o rato foge');
  })
});