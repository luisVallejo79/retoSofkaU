const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        console.log('entrando a conectar db');
        await mongoose.connect( process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true      });
        
        console.log('Database On-line');
        
    } catch (error) {

        console.log('Error to connect database')
        
    }

};

module.exports = {
    dbConnection
};