const { triangleCheck } = require('../../src/challenges2');

describe('Testa os retornos da função triangleCheck', () => {
  it('Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois', () => {
    expect(triangleCheck(16, 9, 2)).toBeFalsy();
    expect(triangleCheck(10, 3, 4)).toBeFalsy();
    expect(triangleCheck(6, 2, 2)).toBeFalsy();
  });

  it('Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas', () => {
    expect(triangleCheck(10, 13, 2)).toBeFalsy();
    expect(triangleCheck(12, 17, 4)).toBeFalsy();
    expect(triangleCheck(5, 10, 3)).toBeFalsy();
  });

  it('Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas', () => {
    expect(triangleCheck(10, 14, 8)).toBeTruthy();
    expect(triangleCheck(2, 3, 4)).toBeTruthy();
    expect(triangleCheck(16, 20, 30)).toBeTruthy();
  });
});
