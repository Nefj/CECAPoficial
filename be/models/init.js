var mongoose = require('mongoose');
var db = require('./db');

//Accounts
var _rol_admin = {
   name: 'Admin',

   _id: new mongoose.Types.ObjectId
};
var _rol_ejecutivo = {
   name: 'Ejecutivo',

   _id: new mongoose.Types.ObjectId
};
var _roles = [_rol_admin, _rol_ejecutivo];

var _user_admin = {
   name: 'a',
   active: true,
   password_hash: 'a',
   token: 'ASD@!C$$#Q@34234C$#CR$#C344354',
   rol: _rol_admin._id,

   _id: new mongoose.Types.ObjectId,
   record_date: new Date()
};
var _user_ejecutivo = {
   name: 'e',
   salary: 123,
   active: true,
   password_hash: 'e',
   token: 'ASDWQ#$VHTHEE^EVW324213123c21#2',
   rol: _rol_ejecutivo._id,

   _id: new mongoose.Types.ObjectId,
   record_date: new Date()
};
var _users = [_user_admin, _user_ejecutivo];
///////////////////////////////////////////

var _cartera_user_1={
    name:'cartera1',
    user:_user_admin,
    _id:new mongoose.Types.ObjectId,
    record_date:new Date()


}
var _cartera_user_2={
    name:'cartera2',
    user:_user_ejecutivo,
    _id:new mongoose.Types.ObjectId,
    record_date:new Date()
}

var _carteras=[_cartera_user_1,_cartera_user_2];

////////////////////////////////////////////

var _program_seguridad = {
   name: 'seguridad industrial',
   modules: [
      '1. higiene',
      '2. seguridad',
      '3. prevension'
   ],
   details: 'para industrias.',

   _id: new mongoose.Types.ObjectId,
   record_date: new Date()
}
var _program_rrhh = {
   name: 'recursos humanos',
   modules: [
      '1. psicologia laboral',
      '2. planificacion',
      '3. proyeccion'
   ],
   details: 'para empresas.',

   _id: new mongoose.Types.ObjectId,
   record_date: new Date()
}
var _programs = [_program_seguridad, _program_rrhh];

var _person_1 = {
    first_name: 'laura',
    last_name: 'estrada',
    birthday: new Date(1992, 1, 1),
    ci: '1234567',
    cellphone: '79452311',
    email:'laura@laura.com',
    ocupation:'profesional',
//    user: _user_admin,
////////////
    carteras:_cartera_user_1,
///////////

   _id: new mongoose.Types.ObjectId,
   record_date: new Date()
}
var _person_2 = {
   first_name: 'juan',
   last_name: 'perez',
   birthday: new Date(1992, 1, 1),
   ci: '7123357',
   cellphone: '60121234',
   email:'juan@juan.com',
   ocupation:'particular',
//    user: _user_ejecutivo,
////////////////////////
    carteras:_cartera_user_2,
/////////////////////////

   _id: new mongoose.Types.ObjectId,
   record_date: new Date()
}
var _person_3 = {
    first_name: 'lucia',
    last_name: 'galarza',
    birthday: new Date(1992, 1, 1),
    ci: '5342425',
    cellphone: '79121232',
    email:'lucia@lucia.com',
    ocupation:'estudiante',
    descOcupation:{
        //universitario
        carrera: 'Ing Sistemas',
        universidad: 'UMSS',
        semestre:'4to',
        //Particular
        areaTrabajo: '',
        //Profesional
        profesion: '',
        empresa: '',
        cargo: '',
     },
 //    user: _user_ejecutivo,
 ////////////////////////
     carteras:_cartera_user_2,
 /////////////////////////
 
    _id: new mongoose.Types.ObjectId,
    record_date: new Date()
 }
var _persons = [_person_1, _person_2, _person_3];

var _event_seg = {
   description: 'solo para ejecutivos',
   date_start: new Date(2018, 1, 12),
   total: 30,
   program: _program_seguridad,
   inscriptions: [
      {
         state: 1,
         person: _person_1,
         user: _user_admin,
         description: 'solo para ejecutivos',
      },
      {
         state: 1,
         person: _person_2,
         user: _user_ejecutivo,
         description: 'solo para ejecutivos',
      },
      {
         state: 1,
         person: _person_3,
         user: _user_admin,
         description: 'solo para ejecutivos',
      }
   ],
   
   _id: new mongoose.Types.ObjectId,
   record_date: new Date()
}
var _event_seg2 = {
   description: 'solo para ejecutivos',
   date_start: new Date(2018, 02, 12),
   total: 30,
   program: _program_seguridad,
   inscriptions: [
      {
         state: 0,
         person: _person_1,
         user: _user_ejecutivo,
         description: 'solo para ejecutivos',
      },
      {
         state: 0,
         person: _person_2,
         user: _user_ejecutivo,
         description: 'solo para ejecutivos',
      }
      ,
      {
         state: 1,
         person: _person_3,
         user: _user_admin,
         description: 'solo para ejecutivos',
      }
   ],
   
   _id: new mongoose.Types.ObjectId,
   record_date: new Date()
}
var _event_rrhh = {
   description: 'solo para ejecutivos',
   date_start: new Date(2018, 03, 12),
   total: 20,
   program: _program_rrhh,
   inscriptions: [
      {
         state: 0,
         person: _person_1,
         user: _user_admin,
         description: 'solo para ejecutivos',
      },
      {
         state: 0,
         person: _person_2,
         user: _user_ejecutivo,
         description: 'solo para ejecutivos',
      }
   ],

   _id: new mongoose.Types.ObjectId,
   record_date: new Date()
}
var _event_rrhh2 = {
   description: 'solo para ejecutivos',
   date_start: new Date(2018, 11, 12),
   total: 20,
   program: _program_rrhh,
   inscriptions: [
      {
         state: 2,
         person: _person_1,
         description: 'solo para ejecutivos',
      },
      {
         state: 2,
         person: _person_2,
         description: 'solo para ejecutivos',
      }
   ],

   _id: new mongoose.Types.ObjectId,
   record_date: new Date()
}
var _events = [_event_seg, _event_seg2, _event_rrhh, _event_rrhh2];


function saveData(collection, schema) {
   for (var i = 0; i < collection.length; i++) {
      collection[i].record_date = new Date();
   }

   collection.forEach(function (data) { (new schema(data)).save(); });

   schema.find(function (err, data) {
      if (err) return console.error(err);
      console.log(data);
   });
}

function clearCollections(schema) {
   schema.collection.drop();
}


module.exports = {
   initializer: function () {
      saveData(_roles, db.roles);
      saveData(_users, db.users);
      saveData(_carteras,db.carteras);
      saveData(_programs, db.programs);
      saveData(_persons, db.persons);
      saveData(_events, db.events);
   },

   clearCollections: function () {
      clearCollections(db.roles);
      clearCollections(db.users);
      clearCollections(db.carteras);
      clearCollections(db.programs);
      clearCollections(db.events);
      clearCollections(db.persons);
   }
};