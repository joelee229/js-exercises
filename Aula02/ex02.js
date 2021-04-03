const fs = require('fs');

// Promise que resolve retornando os arquivos e diretórios de um path
const readDir = path => new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
        if(err){
            reject(err);
        }else {
            resolve(files);
        }
    })
});

const lerArq = async () => {
    console.log('Olá async/await');
    try {
        const files = await readDir('./dir');
        console.log(files);
    }catch(err) {
        console.error(err);
    }
}

lerArq();