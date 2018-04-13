// import { mongo } from 'mongoose';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
process.env.TZ = 'America/La_Paz';

module.exports = {
   ///Account
   roles: mongoose.model('roles', new Schema({
      name: String,

      _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
   })),
   users: mongoose.model('users', new Schema({
      name: String,
      active: Boolean,
      password_hash: String,
      // token: String,
      rol: ObjectId,

      _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
      record_date: { type: Date, default: function () { return new Date() } },
   })),


   ////////////////////////////////////////////////////////////////////////////

   carteras: mongoose.model('carteras',new Schema({
      name:String,
      user:ObjectId,
      _id:{type:ObjectId,default:function(){return new mongoose.Types.ObjectId}},
      record_date:{type:Date, default:function(){return new Date}}

   })),

   ////////////////////////////////////////////////////////////////////////////


   events: mongoose.model('events', new Schema({
      name: String,
      description: String,
      date_start: Date,
      inscriptions: [{
         name: String,
         state: Number,
         person: ObjectId,
         description: String,
         user: ObjectId
         // 0 en duda
         // 1 inscrito
         // 2 interesado
         // 3 confirmar
         // 4 sin interes
         // 5 proximo evento
      }],
      total: Number,
      program: ObjectId,

      _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
      record_date: { type: Date, default: function () { return new Date() } },
   })),
   persons: mongoose.model('persons', new Schema({
      first_name: String,
      last_name: String,
      ci: Number,
      cellphone: Number,
      email:String,
      ocupation:String,//1 = universitario, 2=Profecional, 3=particular
      descOcupation:{
            //universitario
            carrera: String,
            universidad: String,
            semstre:String,
            //Particular
            areaTrabajo: String,
            //Profesional
            profession: String,
            empresa: String,
            cargo: String,
         },
      //////////////
      carteras:ObjectId,
      /////////////
      // user: ObjectId,

      _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
      record_date: { type: Date, default: function () { return new Date() } },
   })),
   programs: mongoose.model('programs', new Schema({
      name: String,
      modules: [String],
      details: String,

      _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
      record_date: { type: Date, default: function () { return new Date() } },
   })),
   // registers: mongoose.model('registers', new Schema({
   //    name: String,
   //    datails: String,
   //    state: Number,
   //    // state of number 

   //    _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
   //    record_date: { type: Date, default: function () { return new Date() } },
   // })),

   //Connection
   connection: function () {
      var db = mongoose.connect('mongodb://localhost:27017/Cecap',
         function (err) {
            if (err) return console.log(err);
            console.log("MongoDB: connection to database succesful!");
         }).connection;
   },

   endMongoConnection: function () {
      mongoose.connection.close(function () {
         // console.log
         process.exit(0);
      });
   }
};
// var types = {
// 	available: 0,
// 	send: 1,
// 	sold: 2
// }