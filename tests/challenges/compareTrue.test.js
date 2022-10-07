const challenge = require('../../src/challenges')

describe('Verifica se a função tes os retornos experados.', () => {
  it('Ao ser passado parametros "true" em ambos os parametros retorna true.', () => {
    expect(challenge.compareTrue(true, true)).toBe(true);
  });
  it('Ao ser passado parametros "false" em ambos os parametros retorna false.', () => {
    expect(challenge.compareTrue(false, false)).toBe(false);
  });
});
