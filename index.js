const express = require ('express');
const http = require ('http');
const morgan = require('morgan');

const hostname ='localhost';
const port = 3000;

const app = express(); // uses express for this application
app.use(morgan('dev'));//using morgan for development

app.use(express.static(__dirname + '/Public'));

app.use((req,res,next) =>{
res.statusCode =200;
res.setHeader('content-type','text/html');
res.end("This is an express server");
});

const server = http.createServer(app);
server.listen(port,hostname, ()=>{
    console.log('the server is running at http://${hostname}:${port}/');
});
