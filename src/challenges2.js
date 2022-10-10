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
/*
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if(lineA < (lineB + lineC) && Math.abs(lineC - lineB) < lineA){
    return true
  }  else if(lineB < (lineA + lineC) && Math.abs(lineC - lineA) < lineB){
    return true
  } else if(lineC < (lineB + lineA) && Math.abs(lineB - lineA) < lineC){
    return true
  }else {
    return false
  }
}

// Desafio 13
function hydrate(quantidade) {
  //material para apoio: https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript
  //elimina o text
  let numbers = quantidade.replace(/[^0-9]/g, '')
  let valores = numbers.split("")
  let soma = 0
  for(let index = 0; index < valores.length; index+=1){
    soma = soma + parseInt(valores[index])
  }
  if(soma === 1){
    return soma + " copo de água"
  } else {
    return soma + " copos de água"
  }
}
*/
module.exports = {
  generatePhoneNumber,
  techList,
  // hydrate,
  // triangleCheck,
};
