// Método de simulação de um sleep
const sleep = time =>  new Promise((resolve, reject) => {
    setTimeout((err) => {
        if(!err){
            resolve(true);
        }else {
            reject(err);
        }
    }, time);
});

const test = async () => {
    console.log('Olá');
    try {
        await sleep(2000);
        console.log('Depois de 2 seg');
    }catch(err) {
        console.error(err);
    }
}
test();
