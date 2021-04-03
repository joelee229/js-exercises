// context = this

const obj = {
    var1: 10,
    get: function() {
        return this.var1
    }
};

// bind => Fixa um contexto para essa variável e retorna uma nova variável com esse context novo
console.log(obj.get.bind({ var1: 20 })());