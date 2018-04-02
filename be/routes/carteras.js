var express = require('express');
var db = require('../models/db');
var router = express.Router();

router
   .get('/', function (req, res) {
      db.carteras.find({}, function (err, carteras) {
         if (err) return res.status(400).send(err);

         return res.status(200).send(carteras);
      });
   })

  
   .post('/', function (req, res) {
    var cartera = new db.carteras(req.body);
    var d = new Date();
    // if ((event.date_start == undefined || event.date_start < d) ||event.description == '' || event.total == '' || event.program == '') return res.status(400).send();
    db.carteras.find({}, function (err, persons) {
       if (err) return res.status(400).send(err);
       saveCartera(cartera);
    });
    function saveCartera(cartera) {
      
       event.save(function (err, event) {
          if (err) return res.status(400).send(err);

          return res.status(201).send(event);
       });
    }
 })
module.exports = router;