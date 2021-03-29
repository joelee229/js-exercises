const nums = [1, 2, 3, 4, 4, 5, 1, 2];

const impares = item => item % 2 !== 0;
const numsImpares = nums.filter(impares);

console.log("Números ímpares: "+ numsImpares);