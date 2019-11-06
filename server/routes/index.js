var express = require('express');
// var router = express.Router();
const router = express.Router();

require('../modal/batch');
require('../modal/wall');
require('../modal/schema');
var mongoose = require('mongoose');
var Superhero = mongoose.model('superheroes');
var Wallogin = mongoose.model('user');
var UserRegister=require('../modal/schema');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/reg', function(req, res, next) {
  res.json({login:true});
});

router.post('/add', function(req, res){
  new Superhero({ name : req.body.name,
                date : req.body.date,
                time : req.body.time,
            username : req.body.username}
)
    .save(function(err, Superhero){
      console.log(Superhero)
      res.json(Superhero);
    });
});

router.post('/login', function(req, res){
  new Wallogin({ name : req.body.name}
    )
    .save(function(err, Wallogin){
      console.log(Wallogin)
      res.json(Wallogin);
    });
});

router.get('/view', function(req, res){
  Wallogin.find(function(err,Wallogin){
    console.log(err);
    console.log(Wallogin);
    res.json(Wallogin);
  });
});

router.put('/update/:id', function(req, res){
  var query = {"_id": req.params.id};
  var update = {name : req.body.name};
  var opt = {new: true};
  Wallogin.findOneAndUpdate(query, update, opt, function(err, Wallogin){
    console.log(Wallogin);
    res.json(Wallogin);
  });
});

router.delete('/update/:id', function(req, res){
  var query = {"_id": req.params.id};
  Wallogin.findOneAndRemove(query, update, opt, function(err, Wallogin){
    console.log(Wallogin);
    res.json(Wallogin);
  });
});
router.post('/addRegister',function(req,res){
  const city=req.body.city
  const email=req.body.email
  const name=req.body.name
  const password=req.body.password
  const address=req.body.address
  new UserRegister({
      address:address,
      email:email,
      name:name,
      city:city,
      password:password
  }).save(function(err,data){
      if(err){
          console.log(err)
      }
      else{
          console.log(data)
          res.json(data)
      }
  });
});
router.post('/signin',(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  console.log(email)
  UserRegister.findOne({
      email:email
  },(err,user)=>{
      if(err){
          res.json(err);
      }
      else{
          console.log(user);
          if(user == null ){
            res.json({message:"Check your Credentials"});
          }
          else if (user.password != password){
              res.json({message:"Check your password"});
          }
          else{
              res.json(user);
          }
      }
  });
});

// module.exports = router;
module.exports = router ;