const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const shortid = require('shortid');

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

let users = {}
//{ 'goku': { name: 'goku', email: '', password: '', products: {} }}

//AUTH
server.post('/auth', function(req, res){
  let user = req.body;
  users = {...users, user};
  // console.log('TEST AUTH: ', users.user);
  res.json(users);
})

//LOGIN
server.get('/login', function(req, res){
  console.log('TEST LOGIN:' ,Object.values(users.user).shift());
  res.json(Object.values(users.user).shift())
})

//SHOP GET PRODUCTS AND NAME
server.get('/shop', function(req,res){
  // console.log('Test SHOP:', Object.values(users.user).shift().name);
  res.json(Object.values(users.user).shift())
})

//SHOP ADD PRODUCT
//SHOP DELETE PRODUCT

server.listen(3001);