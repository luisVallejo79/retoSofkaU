const express = require('express');
const cors = require('cors');


class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT


        //middlewares - Funciones que añadiran mas funciones al web server
        this.middlewares();

        //conectar a bd
        //this.conectarDB();


        //rutas para la aplicacion
        this.routes();
    }

    middlewares(){

        //leer datos que vienen del body
        this.app.use(express.json());

        this.app.use( cors() );

        //direcctorio publico
        this.app.use(express.static('public'));
    }

    async conectarDB() {
        await dbConection();
    }

    routes(){
        this.app.use('/api/naves', require('../routes/spaceship'))
        }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server Running on port `, this.port)
          })
     };
}

module.exports = Server;