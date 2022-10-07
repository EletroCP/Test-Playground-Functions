// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  let resultado = 0;
  resultado = (base * height) / 2;
  return resultado;
}
// Desafio 3
function splitSentence(frase) {
  const splitString = frase.split(' ');
  return splitString;
}
// Desafio 4
function concatName(name) {
  let concat = `${name[name.length - 1]}, ${name[0]}`;
  return concat;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pointWin = wins * 3;
  let pointTies = ties;
  let points = pointWin + pointTies;
  return points;
}
// Desafio 6
function highestCount(numbers) {
  let highest = Math.max.apply(null, numbers);
  let compare = 0;
  numbers.forEach((element) => {
    if (element === highest) {
      compare += 1;
    }
  });
  return compare;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;
  if (distanciaCat1 < 0) {
    distanciaCat1 *= -1;
  }
  if (distanciaCat2 < 0) {
    distanciaCat2 *= -1;
  }
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz(param) {
  let result = param.map((element) => {
    const for3 = element % 3;
    const for5 = element % 5;
    if (!for3 && !for5) {
      return 'fizzBuzz';
    }
    if (!for3) {
      return 'fizz';
    }
    if (!for5) {
      return 'buzz';
    }
    return 'bug!';
  });
  return result;
}
// Desafio 9

// as funções encode e decode normalmente seriam feitas com .replaceAll(num, letr),
// porem o método não estava podendo ser aplicado.
const replaceOthers = (string) => {
  const secondCode = string.map((element) => {
    if (element === 'i') return '3';
    if (element === 'o') return '4';
    if (element === 'u') return '5';
    return element;
  });
  return secondCode;
};

const replaceAeE = (arr) => {
  const firstCode = arr.map((element) => {
    if (element === 'a') return '1';
    if (element === 'e') return '2';
    return element;
  });
  const secondCode = replaceOthers(firstCode);
  return secondCode;
};

function encode(arr) {
  const stringToArray = arr.split('');
  const coded = replaceAeE(stringToArray);
  const reString = coded.toString().replace(/,/g, '');
  return reString;
}

const replaceNumbers = (string) => {
  const secondDecode = string.map((element) => {
    if (element === '3') return 'i';
    if (element === '4') return 'o';
    if (element === '5') return 'u';
    return element;
  });
  return secondDecode;
};

const replace1e2 = (string) => {
  const firstCode = string.map((element) => {
    if (element === '1') return 'a';
    if (element === '2') return 'e';
    return element;
  });
  const secondCode = replaceNumbers(firstCode);
  return secondCode;
};

function decode(string) {
  const stringToArray = string.split('');
  const decoded = replace1e2(stringToArray);
  const reString = decoded.toString().replace(/,/g, '');
  return reString;
}
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
/*
console.log(`A area de um tringulo de base: 3 e altura 5 deve ser 7.5: ${calcArea(3, 5)}`);

console.log(`Deve retornar "cat1" ${catAndMouse(0, 1, 2)}`);
console.log(`Deve retornar "cat2" ${catAndMouse(0, 2, 1)}`);
console.log(`Deve retornar "os gatos trombam e o rato foje" ${catAndMouse(0, 2, 2)}`);

console.log(`Deve retornar "false": ${compareTrue(true, false)}`);
console.log(`Deve retornar "true": ${compareTrue(true, true)}`);

console.log(
  `Deve retornar "Lopes, Breno ao passar [Breno, Laskavski, Lopes]"
${concatName(['Breno', 'Laskavski', 'Lopes'])}`,
);

console.log(`Deve codificara frase "Não consigo ler nada": ${encode('Nao consigo ler nada')}`);
console.log(`Deve decodificar frase "N14 c4ns3g4 l2r n1d1": ${decode('N14 c4ns3g4 l2r n1d1')}`);

console.log(`Deve retornar "fizz" ao passar "3": ${fizzBuzz([3])}`);
console.log(`Deve retornar "buzz" ao passar "5": ${fizzBuzz([5])}`);
console.log(`Deve retornar "fizzbuzz" ao passar "15": ${fizzBuzz([15])}`);
console.log(`Deve retornar "bug" ao passar "2": ${fizzBuzz([2])}`);

console.log(`Deve retornar "50" se o time tiver 14 vitorias e 8 empates: ${footballPoints(14, 8)}`);

console.log(`Deve terotnar 1 quando o maior numero aparece só uma vez:
${highestCount([1, 5, 6, 8, 7, 3, 50])}`);

console.log(`Deve terotnar 5 quando o maior numero aparece 5 vezes:
${highestCount([50, 50, 6, 50, 7, 50, 50])}`)

console.log(
  'Deve retornar um array com as palavras ao passar a frase "Acho que é uma frase assim": ',
  splitSentence('Acho que é uma frase assim'),
);
 */
