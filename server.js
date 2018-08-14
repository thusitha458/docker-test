const mongoose = require('mongoose');
const Transaction = require('./transaction');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:5000/myCustomDb', (error) => {
    if (error) {
        console.log('Mongodb connection failed:', error)
    } else {
        console.log('Mongodb connection successful');
    }
});

app.get('/', (req, res) => {
    Transaction.find().limit(20).then((transactions) => {
        res.render('home', {
            transactions: transactions
        });
    });
});

app.listen(3000);