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

   .get('/:id', function (req, res) {
      db.carteras.findOne({ _id: req.params.id }, function (err, person) {
         if (err) return res.status(400).send(err);
         if (person == null) return res.status(404).send();

         return res.status(200).send(person);
      });
   })

   .post('/', function (req, res) {
      var person = new db.persons(req.body);
      console.log(person);
      if (person.first_name == '' || person.last_name == '' || person.ci == '' || person.user == '') return res.status(400).send();
      // save person
      person.save(function (err, person) {
         if (err) return res.status(400).send(err);
         add(person);
      });
      // add vigent events
      function add(person) {
         var inscription = {
            state: 0,
            person: person._id,
            user: person.user
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
            })
      }
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