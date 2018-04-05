var express = require('express');
var db = require('../models/db');
var router = express.Router();

var mongoose = require('mongoose');
router
   .get('/', function (req, res) {
      db.events.find({}, { date_start: 1, name: 1, program: 1, inscriptions: 1, total: 1 }, function (err, events) {
         if (err) return res.status(400).send(err);
         let programs = [];
         var j = 0;
         let insert = true;
         var today = new Date;
         for (let i = 0; i < events.length; i++) { 
            j = 0;
            insert = true;
            
            do {
        
               if (programs.length == 0) { insert = false; programs.push(events[i].program); }
               else if (JSON.stringify(programs[j]) == JSON.stringify(events[i].program)) insert = false;
               if(today > events[i].date_start){ insert = false;} 
               j++;
            } while (j < programs.length);
            if (insert) programs.push(events[i].program);
         }
         getPrograms(programs, events);
      });
      function getPrograms(programs, events) {
         db.programs.find({ _id: { $in: programs } }, { name: 1 }, function (err, programs) {
            if (err) return res.status(400).send(err);
            events.forEach(event => {
               programs.forEach(program => {
                  if (JSON.stringify(event.program) == JSON.stringify(program._id)) {
                     event.name = program.name;
                  }
               })
            });
            return res.status(200).send(events);
         });
      }
   })
   .get('/trimestral', function (req, res) {
        var d = new Date();
        var d1 = new Date().getMonth()-3; //menos 3 meses
      db.events.find({date_start: {$gt: d1, $lt: d}}, { date_start: 1, name: 1, program: 1, inscriptions: 1, total: 1 }, function (err, events) {
         if (err) return res.status(400).send(err);
         let programs = [];
         var j = 0;
         let insert = true;
         //var today = new Date;
         for (let i = 0; i < events.length; i++) { 
            j = 0;
            insert = true;
            do {
               if (programs.length == 0) { insert = false; programs.push(events[i].program); }
               else if (JSON.stringify(programs[j]) == JSON.stringify(events[i].program)) insert = false;
            //    if(d > events[i].date_start){ insert = false;} 
               j++;
            } while (j < programs.length);
            if (insert) programs.push(events[i].program);
         }
         getPrograms(programs, events);
      });
      function getPrograms(programs, events) {
         db.programs.find({ _id: { $in: programs } }, { name: 1 }, function (err, programs) {
            if (err) return res.status(400).send(err);
            events.forEach(event => {
               programs.forEach(program => {
                  if (JSON.stringify(event.program) == JSON.stringify(program._id)) {
                     event.name = program.name;
                  }
               })
            });
            return res.status(200).send(events);
         });
      }
   })
   .get('/:id', function (req, res) {
      db.events.findOne({ _id: req.params.id }, function (err, event) {
         if (err) return res.status(400).send(err);
         if (event == null) return res.status(404).send();
         // return res.status(200).send(event);
         getProgram(event);
      });
      function getProgram(event) {
         db.programs.findOne({ _id: event.program }, { name: 1 }, function (err, program) {
            if (err) return res.status(400).send(err);
            event.name = program.name;
            // return res.status(200).send(event);
            var persons = event.inscriptions.map(i => i.person);
            getPerson(persons, event);
         })
      }
      function getPerson(persons, event) {
         db.persons.find({ _id: { $in: persons } }, function (err, persons) {
            if (err) return res.status(400).send(err);
            // console.log(persons)
            event.inscriptions.forEach(i => {
               persons.forEach(person => {
                  if (JSON.stringify(i.person) == JSON.stringify(person._id)) {
                     i.name = person.first_name + ' ' + person.last_name;

                  }
               })
            });
            // console.log(event);
            return res.status(200).send(event);
         });
      }
      
   })
   .get('/listPersons/:id', function (req, res) {
      db.events.findOne({ _id: req.params.id }, { inscriptions: 1 }, function (err, event) {
         if (err) return res.status(400).send(err);
         if (event == null) return res.status(404).send();
         if (event.inscriptions.length > 0) return res.status(404).send();
         var persons = event.inscriptions.map((p) => p.person)
         Persons(persons);
         // return res.status(200).send(event);
      });
      function Persons(p) {
         db.persons.find({ _id: { $in: p } }, function (err, persons) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(persons);
         });
      }

   })
//post person event 
   .post('/:id', function (req, res) {
    db.events.findOne({ _id: req.params.id }, function (err, event) {
       if (err) return res.status(400).send(err);
       if (event == null) return res.status(404).send();
       // return res.status(200).send(event);
       getProgram(event);
    });
    function getProgram(event) {
       db.programs.findOne({ _id: event.program }, { name: 1 }, function (err, program) {
          if (err) return res.status(400).send(err);
          event.name = program.name;
          // return res.status(200).send(event);
          var persons = event.inscriptions.map(i => i.person);
          getPerson(persons, event);
       })
    }
    function getPerson(persons, event) {
       db.persons.find({ _id: { $in: persons } }, function (err, persons) {
          if (err) return res.status(400).send(err);
          // console.log(persons)
          event.inscriptions.forEach(i => {
             persons.forEach(person => {
                if (JSON.stringify(i.person) == JSON.stringify(person._id)) {
                   i.name = person.first_name + ' ' + person.last_name;

                }
             })
          });
          // console.log(event);
          return res.status(200).send(event);
       });
    }
    
 })
 //////////////////////////////////////////////////falta hacer consulta//////////////////////////
      



   .post('/filter/:id', function (req, res) {
      // db.events.findOne({ _id: req.params.id }, { inscriptions: 1 }, function (err, event) {
      //    if (err) return res.status(400).send(err);
      //    if (event == null) return res.status(404).send();
      //    if (event.inscriptions.length > 0) return res.status(404).send();
      //    var persons = event.inscriptions.map((p)=>p.person)
      //    Persons(persons);
      //    // return res.status(200).send(event);
      // });
      db.events.aggregate([
         { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
         { $unwind: '$inscriptions' },
         { $match: { 'inscriptions.state': { $eq: req.body.filter } } },
         { $group: { _id: '$_id', persons: { $push: '$inscriptions.person' } } }
      ], function (err, events) {
         if (err) return res.status(400).send(err);
         var persons = events.map((p) => p.persons);
         Persons(persons);
      })
      function Persons(p) {
         db.persons.find({ _id: { $in: p } }, function (err, persons) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(persons);
         });
      }
   })

   .post('/', function (req, res) {
      var event = new db.events(req.body);
      var d = new Date();
      if ((event.date_start == undefined || event.date_start < d) ||event.description == '' || event.total == '' || event.program == '') return res.status(400).send();
      db.persons.find({}, { _id: 1, user: 1 }, function (err, persons) {
         if (err) return res.status(400).send(err);
         saveEvent(persons);
      });
      function saveEvent(persons) {
         event.inscriptions = persons.map(res => {
            return { state: 0, person: res._id, user: res.user }
         })
         event.save(function (err, event) {
            if (err) return res.status(400).send(err);

            return res.status(201).send(event);
         });
      }
   })

   .post('/edit', function (req, res) {
    // console.log('test')
    console.log('ESTE ES EL BODY DE QUERY')
    //modificar active
    //db.users.findOne({ name: req.body.name, password_hash: req.body.password_hash, active: true }, { rol: 1, _id: 1 }, function (err, user) {
      if (err) return console.log(err);
      //if (err) return res.status(400).send(err);
      
      //if (user == null) return res.sendStatus(404);

      // res.status(200).send(user);
    //});
  })
  //update inscription person that interesed to a event
  .put('/:id', function (req, res) {
    console.log(req.body);
    console.log('esto es una prueba'+ req.body.name);
    db.events.update({_id: req.body.name, 'inscriptions.person': req.body.person },
      {$set: {'inscriptions.$.state': req.body.state, 'inscriptions.$.description': req.body.description}
      }).exec(function (err, off) {
        if (err) return res.status(400).send(err);
        db.events.find({ _id: req.body.name ,_id:{ $in: req.body.person }},function (err, event) {
          if (err) return res.status(401).send(err);
            return res.status(201).send(event);
        });
  			//	if (off.nModified == 0) return res.status(406).send();
      });
    })

   .delete('/:id', function (req, res) {
      db.events.remove({ _id: req.params.id }, function (err, event) {
         if (err) return res.status(400).send(err);

         return res.status(200).send(event);
      });
   });
  //  .put('/:id', function (req, res) {
  //   console.log(req.body);
  //   db.events.findOne({ _id: req.params.id }, function (err, event) {
  //        if (err) return res.status(400).send(err);
  //        if (event == null) return res.status(404).send();

  //        for (i in req.body) {
  //           event[i] = req.body[i];
  //        }
  //        event.save(function (err, event) {
  //           if (err) return res.status(400).send(err);

  //           return res.status(200).send(event);
  //        });
  //     });

module.exports = router;