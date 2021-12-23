// const STORAGE_KEY_HISTORY = "HISTORY";
const STORAGE_KEY_SALDO = "SALDO";

// let pengeluaran = [];
let pemasukan = [];
function isStorageExist() {
     if(typeof(Storage) === undefined) {
         alert("browser tidak mendukung local storage");
         return false;
     }
     return true
}
function saveData() {
    const parse = JSON.stringify(pemasukan);
    localStorage.setItem(STORAGE_KEY_SALDO, parse);
    document.dispatchEvent(new Event("ondatasaved"));
}

// function saveData() {
//     const parse = JSON.stringify(pengeluaran);
//     localStorage.setItem(STORAGE_KEY_HISTORY, parse);
//     document.dispatchEvent(new Event("ondatasaved"));
// }

function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY_SALDO);
    let data = JSON.parse(serializedData);
    if(data !== null)
    // pengeluaran  = data;
    pemasukan = data;
    document.dispatchEvent(new Event("ondataloaded"));
}

function updateDataToStorage() {
    if(isStorageExist())
    saveData();
}

function composeSaldoObject(pemasukan){
    return{
        id: +new Date(),
        pemasukan,
    }
}
// function composeHistoriObject(tanggal, jumlah, catatan, isCompleted) {
//     return{
//         id: +new Date(),
//         tanggal,
//         jumlah,
//         catatan,
//         isCompleted
//     };
// }
