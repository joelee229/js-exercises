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

// Promise que retorna um stat de um path em particular
const stat = pathAD => new Promise((resolve, reject) => {
    // stats que é retornado no callback possui um isDirectory() e um isFile()
    fs.stat(pathAD, (err, stats) => {
        if(err){
            reject(err);
        }else {
            resolve(stats);
        }
    });
});

// Método intermediário para requisitar os stats para cara arquivo ou diretório
// Retorna se esse path é diretório ou null para diferente
const isFile = async (path) => {
    const stats = await stat(path);
    return stats.isFile() ? path : null;
}

// Método que retorna somente os sub-diretórios de uma pasta
const returnFiles = async () => {
    console.log('Diretórios:');
    try {
        const files = await readDir('./');
        // Promise.all: recebe um array de promises e espera resolver todas
        // Ao resolvê-las retorna uma única promise a ser resolvida retornando os resultados dos promises
        const res = await Promise.all(files.map(file => isFile(file)));
        const justFiles = res.filter(f => f);
        console.log(justFiles);
    }catch(err) {
        console.error(err);
    }
}

returnFiles();