// const PENGELUARAN_KEBUTUHAN = "kebutuhan";
// const PENGELUARAN_LAINNYA = "hiburan";
// const PENGELUARAN_TABUNGAN = "tabungan";
const saldo = "saldo-awal"


function addSaldo() {
    const pemasukan = document.getElementById("saldo-awal").value;
    // const saldoKebutuhan = document.getElementById("saldo-kebutuhan");
    // const saldoHiburan = document.getElementById("saldo-hiburan");
    // const saldoTabungan = document.getElementById("saldo-tabungan");
    // const saldoAwal = document.getElementById("saldo-tampil");

    console.log(pemasukan);

    const saldoPemasukan = tampilSaldo(pemasukan);

    const saldoObject = composeSaldoObject(pemasukan);

    saldoPemasukan.push(saldoObject);
    // saldoAwal = tampilSaldo(pemasukan);

    // document.getElementById("saldo-tampil").append(saldoPemasukan);
    // pemasukan.append(saldoPemasukan);


    updateDataToStorage();


    // const saldo = saldoAwal(pemasukan);
    // saldo.push()

    // const saldoKebutuhan = pemasukan*50/100;
    // const saldoHiburan = pemasukan*30/100;
    // const saldoTabungan = pemasukan*20/100;
}

function tampilSaldo(pemasukan) {
    const jumlahPemasukan = document.createElement("h3");
    jumlahPemasukan.innerText = pemasukan;

    const textContainer = document.createElement("pemasukanList");
    textContainer.classList.add("inner")
    textContainer.append(pemasukan);

}


// function addHistoriKebutuhan() {
//     const kebutuhan = document.getElementById(PENGELUARAN_KEBUTUHAN);
//     // const hiburan = document.getElementById(PENGELUARAN_LAINNYA);
//     // const tabungan = document.getElementById(PENGELUARAN_TABUNGAN);

//     const jumlah = document.getElementById("inputJumlah").value;
//     const catatan = document.getElementById("inputCatatan").value;
//     const isCompleteKebutuhan = document.getElementById("kebutuhan").checked;
//     const sisaSaldo = document.getElementById("sisa-saldo");
//     const tanggal = new Date().toISOString();

//     const historiKebutuhan = listKebutuhan(tanggal, jumlah, catatan, isCompleteKebutuhan);
//     const historiKebutuhanObject = composeHistoriObject(tanggal, jumlah, catatan, isCompleteKebutuhan);

//     historiesKebutuhan.push(historiKebutuhanObject);

//     if(isCompleteKebutuhan) {
//         kebutuhan.append(historiKebutuhan);
//     } 
//     updateDataToStorage();

//     sisaSaldo = saldoKebutuhan - jumlah;
// }

// function addHistoriHiburan() {
//     // const kebutuhan = document.getElementById(PENGELUARAN_KEBUTUHAN);
//     const hiburan = document.getElementById(PENGELUARAN_LAINNYA);
//     // const tabungan = document.getElementById(PENGELUARAN_TABUNGAN);

//     const jumlah = document.getElementById("inputJumlah").value;
//     const catatan = document.getElementById("inputCatatan").value;
//     const isCompleteHiburan = document.getElementById("hiburan").checked;
//     const sisaSaldo = document.getElementById("sisa-saldo");

//     const historiHiburan = listHiburan(tanggal, jumlah, catatan, isCompleteHiburan);
//     const historiHiburanObject = composeHistoriObject(tanggal, jumlah, catatan, isCompleteHiburan);

//     historiesHiburan.push(historiHiburanObject);
    
//     if(isCompleteHiburan) {
//         hiburan.append(historiHiburan);
//     } 
//     updateDataToStorage();

//     sisaSaldo = saldoHiburan - jumlah;
    
// }
// function addHistoriTabungan() {
//     // const kebutuhan = document.getElementById(PENGELUARAN_KEBUTUHAN);
//     // const hiburan = document.getElementById(PENGELUARAN_LAINNYA);
//     const tabungan = document.getElementById(PENGELUARAN_TABUNGAN);

//     const jumlah = document.getElementById("inputJumlah").value;
//     const catatan = document.getElementById("inputCatatan").value;
//     const isCompleteTabungan = document.getElementById("tabungan").checked;
//     const sisaSaldo = document.getElementById("sisa-saldo");

//     const historiTabungan = listTabungan(tanggal, jumlah, catatan, isCompleteTabungan);
//     const historiTabunganObject = composeHistoriObject(tanggal, jumlah, catatan, isCompleteTabungan);

//     historiesTabungan.push(historiTabunganObject);
    
//     if(isCompleteTabungan) {
//         tabungan.append(historiTabungan);
//     } 
//     updateDataToStorage();

//     sisaSaldo = saldoTabungan - jumlah;
// }

// function listHistori(tanggal, jumlah, catatan) {
//     const textTanggal = document.createElement("h6");
//     textTanggal.innerText = tanggal;
//     const textJumlah = document.createElement("h6");
//     textJumlah.innerText = jumlah;
//     const textCatatan = document.createElement("h6");
//     textCatatan.innerText = catatan;

//     const textContainer = document.createElement("histori");
//     textContainer.classList.add("inner")
//     textContainer.append(textTanggal, textJumlah, textCatatan);

//     const container = document.createElement("histori");
//     container.classList.add("item", "shadow")
//     container.append(textContainer);

//     return container;
// }

module.exports = {
    addSaldo,
    // addHistoriKebutuhan,
    // addHistoriHiburan,
    // addHistoriTabungan,
    // listHistori
}