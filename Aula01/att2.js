const nums = [1, 2, 3, 4];

const pares = item => item % 2 === 0;
const somar = (total, atual) => total + atual;

const numsPares = nums.filter(pares).reduce(somar, 0);

console.log("Números pares somados: " + numsPares);