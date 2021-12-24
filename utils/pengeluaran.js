const fs = require('fs');

// membuat folder data jika belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file histori.json jika belum ada
const dataPath = './data/histori.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadHistori = () => {
    const fileBuffer = fs.readFileSync('data/histori.json', 'utf-8');
    const histori = JSON.parse(fileBuffer);
    return histori;
};

//menimpa file histori.json dengan data yang baru
const saveHistori = (histori) => {
    fs.writeFileSync('data/histori.json', JSON.stringify(histori));
}

//menambahkan pengeluaran baru
const addPengeluaran = (pengeluaran) => {
    const histori = loadHistori();
    histori.push(pengeluaran);
    saveHistori(histori);
}

module.exports = {
    loadHistori,
    addPengeluaran
};