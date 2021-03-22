const express = require ('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')//end point is slash

.all((req,res,next) =>{
    res.statusCode=200;
    res.setHeader('content-type','text/plain');
    next();//looks for additional specifications which will matches dishes end point
})//dishes is the end point,callback function


.get((req,res,next) =>{
  res.end('will send details of  the dishes to you');
})

.post((req,res,next) =>{
    res.write('updating the dish:\n ');
    res.end('will update the dish' + req.body.name + '\n' +'with deatails: ' +  req.body.description );
  })


.put((req,res,next) =>{
    res.statusCode = 403;
    res.end('PUT operation not supported on dishes');
  })


.delete((req,res,next) =>{
    res.end('deleting dishes');
  });


  /*app.get('/dishes/:dishId',(req,res,next) =>{
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
    });*/

module.exports = dishRouter;