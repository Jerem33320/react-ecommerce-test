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

//AUTH
server.post('/auth', function(req, res){
  let user = req.body;
  users = {...users, user};
  console.log('TEST AUTH: ', users);
  res.send(user);
})

//LOGIN
server.get('/login', function(req, res){
  console.log('TEST LOGIN:' ,Object.values(users.user).shift());
  res.send(Object.values(users.user).shift())
})

//SHOP get username
server.get('/shop', function(req,res){
  console.log('Test SHOP:', Object.values(users.user).shift().name);
  res.send(Object.values(users.user).shift().name)
})

server.listen(3001);