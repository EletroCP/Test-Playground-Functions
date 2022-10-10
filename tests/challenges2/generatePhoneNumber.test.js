const { generatePhoneNumber } = require('../../src/challenges2');

describe('Testa os retornos da função generatePhoneNumber', () => {
  const wrongSize = 'Array com tamanho incorreto.';
  const repetedNumbersMessage = 'não é possível gerar um número de telefone com esses valores';

  const wrongNumbers = {
    bigger: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    smaller: [1, 2],
    manyRepeatedNumbers: [1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 7],
    maxNumberOfEqualRepeatedNumbers: [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  }

  const correctNumbers = {
    phoneNumber1: [1, 7, 9, 9, 3, 1, 5, 5, 0, 2, 2],
    phoneNumber2: [1, 8, 9, 8, 4, 6, 2, 5, 0, 6, 5],
    phoneNumber3: [2, 6, 9, 7, 1, 8, 3, 3, 1, 2, 6],
  }

  const expectedOutput = {
    phoneNumber1: '(17) 99315-5022',
    phoneNumber2: '(18) 98462-5065',
    phoneNumber3: '(26) 97183-3126'
  }

  it('Ao receber um array com mais ou menos que 11 numeros retorna uma menssagem', () => {
    const resultBigger = generatePhoneNumber(wrongNumbers.bigger);
    expect(typeof resultBigger).toEqual('string');
    expect(resultBigger).toEqual(wrongSize);

    const resultSmaller = generatePhoneNumber(wrongNumbers.smaller);
    expect(typeof resultSmaller).toEqual('string');
    expect(resultSmaller).toEqual(wrongSize);
  });

  it('Ao receber um array com 3 ou mais numeros repetidos retorna uma menssagem', () => {
    const manyRepeatedNumbers = generatePhoneNumber(wrongNumbers.manyRepeatedNumbers);
    expect(typeof manyRepeatedNumbers).toEqual('string');
    expect(manyRepeatedNumbers).toEqual(repetedNumbersMessage);

    const maxRepetedNumbers = generatePhoneNumber(wrongNumbers.maxNumberOfEqualRepeatedNumbers);
    expect(typeof maxRepetedNumbers).toEqual('string');
    expect(maxRepetedNumbers).toEqual(repetedNumbersMessage);
  });

  it('Ao receber um array com as condições corretas retornoa o telefone formatado', () => {
    const testPhoneNumber1 = generatePhoneNumber(correctNumbers.phoneNumber1);
    expect(typeof testPhoneNumber1).toEqual('string');
    expect(testPhoneNumber1).toEqual(expectedOutput.phoneNumber1)

    const testPhoneNumber2 = generatePhoneNumber(correctNumbers.phoneNumber2);
    expect(typeof testPhoneNumber2).toEqual('string');
    expect(testPhoneNumber2).toEqual(expectedOutput.phoneNumber2)

    const testPhoneNumber3 = generatePhoneNumber(correctNumbers.phoneNumber3);
    expect(typeof testPhoneNumber3).toEqual('string');
    expect(testPhoneNumber3).toEqual(expectedOutput.phoneNumber3)
  })
});
