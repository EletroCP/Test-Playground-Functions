const { techList } = require('../../src/challenges2');

describe('Testa os retornos da função techList', () => {
  const emptyArrayTech = [];
  const arrayTechList = ['Unix', 'Bash', 'JavaScript', 'HTML', 'CSS']
  const name = 'Breno';
  const expectedObject = [
    { tech: 'Bash', name: 'Breno' },
    { tech: 'CSS', name: 'Breno' },
    { tech: 'HTML', name: 'Breno' },
    { tech: 'JavaScript', name: 'Breno' },
    { tech: 'Unix', name: 'Breno' }
  ];
  it('Ao enviar um array de tecnologias vazio, retorna "Vazio!"', () => {
    const result = techList(emptyArrayTech, name);
    expect(typeof result).toEqual('string');
    expect(result).toBe('Vazio!')
  });
  it('Ao enviar um array com as tecnologias, retorna um array de objetos', () => {
    const result = techList(arrayTechList, name);
    expect(result).toBeInstanceOf(Array);
    expect(result).toMatchObject(expectedObject);
  })
});