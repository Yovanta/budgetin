document.addEventListener("DOMContentLoaded", function() {
    const submitSaldo = document.getElementById("inputSaldo"); 
    submitSaldo.addEventListener("submit", function(event) {
        event.preventDefault();
        addSaldo();
    });
    // if(isStorageExist()) {
    //     loadDataFromStorage();
    // }
    
    // const submitPengeluaran = document.getElementById("inputPengeluaran"); 
    // submitPengeluaran.addEventListener("submit", function(event) {
    //     event.preventDefault();
    //     addPengeluaran();
    // });

    // if(isStorageExist()) {
    //     loadDataFromStorage();
    // }
});

document.addEventListener("ondatasaved", () => {
    console.log("Data berhasil disimpan.");
})
document.addEventListener("ondataloaded", () => {
    // refreshDataFromBooks();
})
