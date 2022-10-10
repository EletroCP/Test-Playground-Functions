const { hydrate } = require('../../src/challenges2');

describe('Testa os retornos da função hydrate', () => {
  const resultOneCup = '1 copo de água';
  const manyCups = {
    sevenCups: '7 copos de água',
    sixCups: '6 copos de água',
  }

  const oneDrink = {
    bear: '1 cerveja',
    vodka: '1 vodka',
    pinaColada: '1 pina colada',
  };

  const manyDrinksOrder = {
    firstTest: '1 cachaça, 5 cervejas e 1 caipirinha',
    secondTest: '4 copos de vinho e 2 cervejas',
  }

  it('Caso a quantidade de bebidas seja igual a 1, retorna "1 copo de água"', () => {
    const firstTest = hydrate(oneDrink.bear);
    expect(typeof firstTest).toEqual('string');
    expect(firstTest).toEqual(resultOneCup);

    const secondTest = hydrate(oneDrink.vodka);
    expect(typeof secondTest).toEqual('string');
    expect(secondTest).toEqual(resultOneCup);

    const lastTest = hydrate(oneDrink.pinaColada);
    expect(typeof lastTest).toEqual('string');
    expect(lastTest).toEqual(resultOneCup);
  });

  it('Caso a quantidade de bebidas seja maior que um, o numero recomendado seja o numeros de bebidas tomadas', () => {
    const firstTest = hydrate(manyDrinksOrder.firstTest);
    expect(typeof firstTest).toEqual('string');
    expect(firstTest).toEqual(manyCups.sevenCups);

    const secondTest = hydrate(manyDrinksOrder.secondTest);
    expect(typeof secondTest).toEqual('string');
    expect(secondTest).toEqual(manyCups.sixCups);
  })
});

