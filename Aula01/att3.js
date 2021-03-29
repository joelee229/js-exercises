const nums = [1, 2, 3, 4];

const impares = item => item % 2 !== 0;
const somar = (total, atual) => total + atual;

const numsImpares = nums.filter(impares).reduce(somar, 0);

console.log("Números ímpares somados: " + numsImpares);