const express = require ('express');
const http = require ('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname ='localhost';
const port = 3000;

const app = express(); // uses express for this application
app.use(morgan('dev'));//using morgan for development
app.use(bodyParser.json());//allows to body of req msg that is in json format

app.all('/dishes',(req,res,next) =>{
    res.statusCode=200;
    res.setHeader('content-type','text/plain');
    next();//looks for additional specifications which will matches dishes end point
});//dishes is the end point,callback function


app.get('/dishes',(req,res,next) =>{
  res.end('will send details of  the dishes to you');
});

app.post('/dishes',(req,res,next) =>{
    res.statusCode = 403;
    res.end('POSt operation not supported on dishes');
  });


app.put('/dishes',(req,res,next) =>{
    res.write('updating the dish:\n ');
    res.end('will update the dish' + req.body.name + '\n' +'with deatails: ' +  req.body.description );
  });


app.delete('/dishes',(req,res,next) =>{
    res.end('deleting dishes');
  });


  app.get('/dishes/:dishId',(req,res,next) =>{
    res.end('will send all the dishes to you' + req.params.dishId);
  });
  
  app.post('/dishes/:dishId',(req,res,next) =>{
      res.end(req.params.dishId+ '\nwill add the dish : ' + req.body.name +  'with details :' + req.body.description);//extract the info from the body that is going to be returned
    });
  
  
  app.put('/dishes/:dishId',(req,res,next) =>{
      res.statusCode=403;
      res.end('PUT operation not supported on dishes');
    });
  
  
  app.delete('/dishes/:dishId',(req,res,next) =>{
      res.end(req.params.dishId + 'deleting all the dishes');
    });
  

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
