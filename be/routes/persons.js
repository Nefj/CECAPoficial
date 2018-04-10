var express = require('express');
var db = require('../models/db');
var router = express.Router();

router
   .get('/', function (req, res) {
      db.persons.find({}, function (err, persons) {
         if (err) return res.status(400).send(err);

         return res.status(200).send(persons);
      });
   })

   .get('/:id', function (req, res) {
      db.persons.findOne({ _id: req.params.id }, function (err, person) {
         if (err) return res.status(400).send(err);
         if (person == null) return res.status(404).send();

         return res.status(200).send(person);
      });
   })

   .post('/', function (req, res) {
      var person = new db.persons(req.body);
      console.log(person);
         db.persons.findOne({ci: req.body.ci}, function(err, existeCi){
            if (existeCi == null) {
                  db.persons.findOne({cellphone: req.body.cellphone}, function(err, existeCellphone){
                        if(existeCellphone == null){
                              if (person.first_name == '' || person.last_name == '' || person.ci == '' || person.carteras == '') 
                              return res.status(400).send();
                              // save person
                              person.save(function (err, person) {
                              if (err) return res.status(400).send(err);
                              add(person);
                              });
                              function add(person) {
                                    var inscription = {
                                       state: 0,
                                       person: person._id,
                                       user: person.user
                                       //description
                                    }
                                    var d = new Date();
                                    db.events.update(
                                       {
                                          date_start: { $gt: d }
                                       }, {
                                          $push: {
                                             inscriptions: inscription
                                          }
                                       }, {
                                          multi: true
                                       }, function (err, events) {
                                          if (err) return res.status(400).send(err);
                                          console.log(events);
                                          // if (events == null) return res.status(404).send();
                           
                                          return res.status(200).send(person);
                                       });
                                 }
                        }else{
                              if (err) return res.status(400).send(err);
                              console.log('El numero de Celular de la Persona ya existe')
                        }
                  });
            //return res.status(404).send();

            }else{
                  if (err) return res.status(400).send(err);
                  console.log('El numero de CI de la Persona ya existe')
            }
         });
            
      // add vigent events
      
   })

   .put('/:id', function (req, res) {
      db.persons.findOne({ _id: req.params.id }, function (err, person) {
         if (err) return res.status(400).send(err);
         if (person == null) return res.status(404).send();

         for (i in req.body) {
            person[i] = req.body[i];
         }
         person.save(function (err, person) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(person);
         });
      });
   })

   .delete('/:id', function (req, res) {
      db.persons.remove({ _id: req.params.id }, function (err, person) {
         if (err) return res.status(400).send(err);

         return res.status(200).send(person);
      });
   });

module.exports = router;