// Global scope
// Local scope

// Todo mundo consegue ver essa variável
const global = 10;

// E os local scopes depende de onde eles estão
const test = () => {
    //  local scope #1
    const var0 = 20;
    function test2() {
        // local scope #2
        const var1 = 30;
        console.log(var0, var1);
    }

    test2();
}

test();