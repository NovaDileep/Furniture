const express = require('express');
const newFurnitureData = require('./src/model/Furnituredata');
const oldFurnitureData = require('./src/model/oldfurnituredata');

const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(express.json());

username='admin';
password='1234';

function verifyToken(req,res,nxt){
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

app.get("/newlist",function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PUT,DELETE,PATCH,OPTIONS');
    newFurnitureData.find()
    .then(function(newfurnitures){
       res.send(newfurnitures)
    });
});
app.get("/oldlist",function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods:GET,POST,PUT,DELETE,PATCH,OPTIONS');
  oldFurnitureData.find()
  .then(function(oldfurnitures){
     res.send(oldfurnitures)
  });
});
app.post('/insert',verifyToken,function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PUT,DELETE,PATCH,OPTIONS');
    
    console.log(req.body);
   
    var product = {       
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl
   }       
   var product = new ProductData(product);
   product.save();
});
/*
app.get('/:id',  (req, res) => {
  
  const id = req.params.id;
    ProductData.findOne({"_id":id})
    .then((product)=>{
        res.send(product);
    });
})
*/
app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })

    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      productId= req.body.productId,
      productName = req.body.productName,
      productCode = req.body.productCode,
      releaseDate = req.body.releaseDate,
      description = req.body.description,
      price = req.body.price,
      starRating = req.body.starRating,
      imageUrl = req.body.imageUrl
     ProductData.findByIdAndUpdate({"_id":id},
                                  {$set:{"productId":productId,
                                  "productName":productName,
                                  "productCode":productCode,
                                  "releaseDate":releaseDate,
                                  "description":description,
                                  "price":price,
                                  "starRating":starRating,
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
   })
   
app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     ProductData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })
     

app.listen(4300, function(){
    console.log('listening to port 4300');
});
