const express = require('express');
const path = require('path');
const { mongoConnect } = require('./utils/db_conn.js');
const {loadHistori} = require('../src/histori/utils/pengeluaran');

const app = express();
const port = 3000;

app.listen(port, async () => {
    try {
        await mongoConnect();
        console.log(`Mongo Budgetin | Listening at http://localhost:${port}`);
    } catch (e) {
        console.log(e);
    }
    
});


