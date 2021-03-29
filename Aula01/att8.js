const calculadora = (num1, type, num2) => {
    switch(type){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            console.log("Operador não encontrado");
    }
}

console.log(calculadora(10, "-", 10));