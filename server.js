const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

//create server//
const server = http.createServer(app);

//get server to listen to above defined port (i.e. 3000)//
server.listen(port);