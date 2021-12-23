const mongoose = require('mongoose');

const mongoConnect = async () => {
    try {
        console.log('trying to connect')
        await mongoose.connect('mongodb+srv://budgetinUser:budgetin123@budgetin.bbgz4.mongodb.net/budgetin_database?retryWrites=true&w=majority');

        console.log('koneksi db berhasil');
    } catch (e) {
        console.log('gagal koneksi db', e);
        await mongoConnect();
    }
}

module.exports = { mongoConnect };
