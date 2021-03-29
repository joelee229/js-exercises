const nums = [1, 2, 3, 4, 4, 5, 1, 2];

const uniqueNums = nums.filter((item, i) => nums.indexOf(item) === i);
console.log("New vetor: " + uniqueNums);