const nums = [1, 2, 3, 4, 4, 5, 1, 2];

const red = (object, item) => {
    if (!object[item]) {
        object[item]=1;
    } else {
        object[item]++;
    }
    return object; 
};

const numsObject = nums.reduce(red, {});

console.log("Objeto: ", numsObject);