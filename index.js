const express = require ('express');
const http = require ('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routers/dishRouter')

const hostname ='localhost';
const port = 3000;

const app = express(); // uses express for this application
app.use(morgan('dev'));//using morgan for development
app.use(bodyParser.json());//allows to body of req msg that is in json format

app.use('/dish',dishRouter);//dishrouter handles the requests that come from endpoint slash
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
