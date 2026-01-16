const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/iNotebook';

const ConnectToMongo = async () => {
    await mongoose.connect(uri);
    console.log('Connected to db successfully');
};

module.exports = ConnectToMongo;