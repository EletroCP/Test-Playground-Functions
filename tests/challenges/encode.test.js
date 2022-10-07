const { encode, decode } = require('../../src/challenges');

describe('Verifica os retornos da função "encode"', () => {
  const phraseToEncode = 'frase indicada para testar a funçao';
  const expectReturn = 'fr1s2 3nd3c1d1 p1r1 t2st1r 1 f5nç14';
  const result = encode(phraseToEncode);
  it('Verifica se o retorno é uma string', () => {
    expect(typeof result).toBe('string')
  });
  it('Verifica se a frase foi codificada corretamente', () => {
    expect(result).toEqual(expectReturn)
  });
})

describe('Verifica os retornos da função "decode"', () => {
  const phraseToDecode = 'fr1s2 3nd3c1d1 p1r1 t2st1r 1 f5nç14';
  const expectReturn = 'frase indicada para testar a funçao';
  const result = decode(phraseToDecode)
  it('Verifica se o retorno é uma string', () => {
    expect(typeof result).toBe('string')
  });
  it('Verifica se a frase foi codificada corretamente', () => {
    expect(result).toEqual(expectReturn)
  });
});
