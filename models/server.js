const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config.db')



class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT


        //middlewares - Funciones que añadiran mas funciones al web server
        this.middlewares();

        //conectar a bd
        
        this.connectDB();


        //rutas para la aplicacion
        this.routes();
    }
    //conectar a la base de datos
    async connectDB(){
        await dbConnection()
    };

    middlewares(){

        //leer datos que vienen del body
        this.app.use(express.json());

        this.app.use( cors() );

        //direcctorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use('/api/spaceship', require('../routes/spaceship'))
        }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server Running on port `, this.port)
          })
     };
}

module.exports = Server;