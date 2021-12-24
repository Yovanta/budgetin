const fs = require('fs');

// membuat folder data jika belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file pemasukan.json jika belum ada
const dataPath = './data/pemasukan.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadSaldo = () => {
    const fileBuffer = fs.readFileSync('data/pemasukan.json', 'utf-8');
    const pemasukan = JSON.parse(fileBuffer);
    return pemasukan;
};

//menimpa file pemasukan.json dengan data yang baru
const savePemasukan = (pemasukan) => {
    fs.writeFileSync('data/pemasukan.json', JSON.stringify(pemasukan));
}

//menambahkan pemasukan baru
const addPemasukan = (saldo) => {
    const pemasukan = loadSaldo();
    pemasukan.push(saldo);
    savePemasukan(pemasukan);
}

module.exports = {
    loadSaldo, 
    addPemasukan
}
