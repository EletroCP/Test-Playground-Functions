// Desafio 10
function techList(tech, name) {
  let sortArray = [];
  let array = [];
  let list = {};
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    sortArray.push(tech[index]);
  }
  sortArray.sort();
  // eslint-disable-next-line guard-for-in
  for (let add in sortArray) {
    list.tech = sortArray[add];
    list.name = name;
    array.push(list);
    list = {};
  }
  return array;
}
// Desafio 11
const checkNumber = (number) => {
  const checkRepeted = number.reduce((accumulator, value) => (
    { ...accumulator, [value]: (accumulator[value] || 0) + 1 }
  ), {});

  const objectToArray = Object.values(checkRepeted);
  const final = objectToArray.some((element) => element >= 3);
  return final;
};

const invalidPhoneNumber = (number) => {
  for (let index of number) {
    if (number[index] > 9 || number[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
};

const createPhoneNumber2 = (telefone, numbers, index) => {
  if (index >= 2 && index <= 6) {
    telefone += numbers[index];
  }
  if (index === 7) {
    telefone += `-${numbers[index]}`;
  }
  if (index > 7) {
    telefone += numbers[index];
  }
  return telefone;
};

const createPhoneNumber = (numbers) => {
  let telefone = '';
  for (let index = 0; index < numbers.length; index += 1) {
    if (index === 0) {
      telefone = `(${numbers[index]}`;
    }
    if (index === 1) {
      telefone += `${numbers[index]}) `;
    }
    telefone = createPhoneNumber2(telefone, numbers, index);
  }
  return telefone;
};

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // verifica se existem repetidos;
  if (checkNumber(numbers)) return 'não é possível gerar um número de telefone com esses valores';
  invalidPhoneNumber(numbers);
  const telefone = createPhoneNumber(numbers);
  return telefone;
}

// Desafio 12
const checkLine = (lineToCheck, otherLine1, otherLine2) => {
  if (lineToCheck < (otherLine1 + otherLine2) && Math.abs(otherLine2 - otherLine1) < lineToCheck) {
    return true;
  }
  return false;
};

function triangleCheck(lineA, lineB, lineC) {
  const checkLineA = checkLine(lineA, lineB, lineC);
  const checkLineB = checkLine(lineB, lineA, lineC);
  const checkLineC = checkLine(lineC, lineA, lineB);
  if (checkLineA && checkLineB && checkLineC) return true;
  return false;
}

// Desafio 13
function hydrate(quantidade) {
  // material para apoio: https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript
  // elimina o text
  let numbers = quantidade.replace(/[^0-9]/g, '');
  let valores = numbers.split('');
  let soma = 0;
  for (let index = 0; index < valores.length; index += 1) {
    soma += parseInt(valores[index], 10);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
