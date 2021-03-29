const soma = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;
const divi = (n1, n2) => n1 / n2;

const calculadora = (num1, opfn, num2) => opfn(num1, num2);

console.log(calculadora(10, divi, 10));