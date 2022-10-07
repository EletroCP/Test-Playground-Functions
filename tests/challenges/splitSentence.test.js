const { splitSentence } = require('../../src/challenges');

describe('Verifica se o retorno da função "splitSentence"', () => {

    const phraseToSplit = 'frase de teste para verificar o output da função';
    const arrayLength = 9;

    it('Verifica se um array é retornado ao chamar a função', () => {
      expect(splitSentence(phraseToSplit)).toBeInstanceOf(Array);
    });

    it('Verfirica se possui a quantidade correta de palavras', () => {
      expect(splitSentence(phraseToSplit)).toHaveLength(arrayLength);
    });
    it('Verfirica se a primeira palavra do array é "frase"', () => {
      expect(splitSentence(phraseToSplit)[0]).toBe("frase");
    });
    it('Verfirica se a ultima palavra do array é "função"', () => {
      expect(splitSentence(phraseToSplit)[arrayLength - 1]).toBe("função");
    });
  });