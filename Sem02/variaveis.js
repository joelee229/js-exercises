// Formas de como declarar uma variável no JS
// var é a forma mais antiga e perigosa que existe
// Por isso é recomendado não usa-la
var a = 10; // DANGER!!!

// let é a forma moderna e segura de estar declarando variáveis mutáveis atualmente
let b = 20;

// Declara uma variável constante cujo seu valor não pode ser alterado diretamente
// Comunmente usado para atribuir funções e objetos.
const c = {
    // [key: string]: any
    value: 10, // c.value = 20; Forma correta de atrubuição
    obj: {
        a: 1
    }
};

// Duas formas para acessar os atributos de um objeto
// Mais comum
let num = c.obj.a;

// Acessar como um array passando sua key
// Lembrando que a key é uma string com o nome do atributo desejado
let num2 = c['obj']['a'];

// Pode atribuir uma função
// Hidden function => função sem nome
const fn = function(fn) {
    fn('de dentro da função');
}

// Quando chamado sem parênteses ele só aponta para a função em questão
// Mas quando é chamado com os parênteses ele executa a função
// Na prática dá no mesmo
const fnCopia = fn;
// Passando sem parênteses porque estou mandano qual função é para ser executada
fnCopia(console.log);