const nums = [1, 2, 3, 4, 4, 5, 1, 2];

const pares = item => item % 2 === 0;
const numsPares = nums.filter(pares);

console.log("Números pares: "+ numsPares);