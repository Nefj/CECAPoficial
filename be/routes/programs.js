var express = require('express');
var db = require('../models/db');
var router = express.Router();

router
   .get('/', function (req, res) {
      db.programs.find({}, function (err, programs) {
         if (err) return res.status(400).send(err);

         return res.status(200).send(programs);
      });
   })

   .get('/:id', function (req, res) {
      db.programs.findOne({ _id: req.params.id }, function (err, program) {
         if (err) return res.status(400).send(err);
         if (program == null) return res.status(404).send();

         return res.status(200).send(program);
      });
   })

   .post('/', function (req, res) {
      var program = new db.programs(req.body);
      if (program.name == '' || program.details == '' || program.modules == []) return res.status(400).send();
      program.save(function (err, program) {
         if (err) return res.status(400).send(err);

         return res.status(201).send(program);
      });
   })
   //para obtener el id del programa que la persona eligio
//    .post('/id', function(req, res){
//        var nombre = req.body;
//        console.log(req.body);
//        db.programs.findOne({name: req.body}, function(err, program){
//         if (err) return res.status(400).send(err);
//         if (program == null) return res.status(404).send();
//         return res.status(200).send(program);
//        });
//    })
   .put('/:id', function (req, res) {
      db.programs.findOne({ _id: req.params.id }, function (err, program) {
         if (err) return res.status(400).send(err);
         if (program == null) return res.status(404).send();

         for (i in req.body) {
            program[i] = req.body[i];
         }
         program.save(function (err, program) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(program);
         });
      });
   })

   .delete('/:id', function (req, res) {
      db.programs.remove({ _id: req.params.id }, function (err, program) {
         if (err) return res.status(400).send(err);

         return res.status(200).send(program);
      });
   });

module.exports = router;