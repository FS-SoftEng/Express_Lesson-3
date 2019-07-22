

var express = require('express');
var router = express.Router();

var users = require('../models/users')


/* GET home page. */

router.get('/person/:id', function(req, res, next) {
  
  // GET object that matches the id
  
  let person = users.people.find(peep => {
    
    return peep.id === parseInt(req.params.id);
  }) 

  // RENDER the template with that object

  res.render('index', { person });

  // RENDER the template with that object

  console.log(req.url);
});

module.exports = router;

