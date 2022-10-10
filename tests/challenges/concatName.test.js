const { concatName } = require('../../src/challenges');

describe('Verifica se o retorno da função "concatName', () => {
  const nameArray = ['Lopes', 'Breno'];
  const expectOutput = 'Breno, Lopes';

  it('Verifica se um array é retornado ao chamar a função', () => {
    expect(typeof concatName(nameArray)).toBe('string');
  });

  it('Verifica se o retorno é o nome completo', () => {
    expect(concatName(nameArray)).toEqual(expectOutput)
  })
});