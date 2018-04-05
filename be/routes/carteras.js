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

  
//    .post('/', function (req, res) {
//     var cartera = new db.carteras(req.body);
//     var d = new Date();
//     // if ((event.date_start == undefined || event.date_start < d) ||event.description == '' || event.total == '' || event.program == '') return res.status(400).send();
//     db.carteras.find({}, function (err, persons) {
//        if (err) return res.status(400).send(err);
//        saveCartera(cartera);
//     });
//     function saveCartera(cartera) {
      
//        event.save(function (err, event) {
//           if (err) return res.status(400).send(err);

//           return res.status(201).send(event);
//        });
//     }



.get('listPersonsCartera/:id', function (req, res) {
    
    console.log(req.params._id+"holas");
    db.carteras.findOne({_id: req.params._id},function(err,cartera){
        if(err)return res.status().send(err);
        if(cartera==null)return res.status(404).send();
        getPersonas(cartera);
        
    }

    );

    function getPersonas(cartera){
        db.persons.find({_id:{$in:persons}},function(err,persons){
            if(err)return res.status(400).send(err);
            persons.forEach(person => {
                if (JSON.stringify(i.person) == JSON.stringify(person._id)) {
                   i.name = person.first_name + ' ' + person.last_name;

                }
             });
             return res.status(200).send(persons);
        })
    }
    
 })
module.exports = router;
