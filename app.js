require('dotenv').config();
const Server = require("./models/server");

let server = new Server();

server.listen();

