const { fizzBuzz } = require('../../src/challenges');

describe('Verifica os retorno da função "catAndMouse"', () => {

  const resultForFizz = fizzBuzz([3, 18, 33]);
  const resultForBuzz = fizzBuzz([5, 25, 35]);
  const resultForFizzBuzz = fizzBuzz([3, 15, 30]);
  const resultForBug = fizzBuzz([2, 8, 91]);

  it('Testa se todos os retornos são uma "arrays"', () => {
    expect(resultForFizz).toBeInstanceOf(Array);
    expect(resultForBuzz).toBeInstanceOf(Array);
    expect(resultForFizzBuzz).toBeInstanceOf(Array);
    expect(resultForBug).toBeInstanceOf(Array);
  });
  it('Testa se o retorno é "fizz" se todos os elementos no array são diviziveis por 3', () => {
    const result = resultForFizz.every((element) => element === "fizz");
    expect(result).toBeTruthy();
  });
  it('Testa se o retorno é "buzz" se todos os elementos no array são são diviziveis por 5', () => {
    const result = resultForBuzz.every((element) => element === "buzz");
    expect(result).toBeTruthy();
  });
  it('Testa se o retorno contem "fizzBuzz" se algum dos elementos no array são são diviziveis por 3 e 5', () => {
    const result = resultForFizzBuzz.some((element) => element === "fizzBuzz");
    const containFizzBuzz = resultForFizzBuzz.includes('fizzBuzz')
    expect(result).toBeTruthy();
    expect(containFizzBuzz).toBeTruthy();
    expect(resultForFizzBuzz).toContain('fizzBuzz');
  });
  it('Testa se o retorno contem "bug!" se algum os elementos no array são são diviziveis por 3 e 5', () => {
    const result = resultForBug.some((element) => element === "bug!");
    const containBug = resultForBug.includes('bug!')
    expect(result).toBeTruthy();
    expect(containBug).toBeTruthy();
    expect(resultForBug).toContain('bug!')
  });
});