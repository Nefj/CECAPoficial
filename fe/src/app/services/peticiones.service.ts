import { Injectable } from "@angular/core";
import { HttpModule, Http, Response, Headers } from "@angular/http";
import { GLOBAL } from './global';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CATCH_ERROR_VAR } from "@angular/compiler/src/output/abstract_emitter";

@Injectable()
export class PeticionesService {
   public url: string = GLOBAL.url;

   constructor(
      // private _httpClient: HttpClient,
      private _http: HttpClient

   ) {
      // this.url = "https://jsonplaceholder.typicode.com/users";

   }

   getPrueba() {
      return "hola desde el servicio"
   }

   // getPersonas(): Observable<any> {
   //    // return this._http.get(this.url)
   //    //                 .map(res => res.json() );
   //    return this._http.get(this.url);
   // }
   getEvents() {
      return this._http.get(this.url + 'events').map((res: Response) => res);
   }
   getEvent(id) {
      return this._http.get(this.url + 'events/' + id).map((res: Response) => res);
   }
   getTrimestral() {
    return this._http.get(this.url + 'events/trimestral').map((res: Response) => res);
 }
   addProgram(program) {
      let body = JSON.stringify(program);
      var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this._http.post(this.url + 'programs', body, { headers: headers }).map((res: Response) => res);
   }
   getPrograms() {
      return this._http.get(this.url + 'programs').map((res: Response) => res);
   }
//    getIdProgram(nomProgram){
//     let body = JSON.stringify(nomProgram);
//      var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
//       return this._http.post(this.url + 'programs/id', body, { headers: headers }).map((res: Response) => res);
//    }
   addEvent(event) {
      let body = JSON.stringify(event);
      var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this._http.post(this.url + 'events', body, { headers: headers }).map((res: Response) => res);
   }
   addPerson(person) { 
      let body = JSON.stringify(person);
      var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this._http.post(this.url + 'persons', body, { headers: headers }).map((res: Response) => res);
   }
   getPerson(_id) {
      return this._http.get(this.url + 'persons/' + _id).map((res: Response) => res);
   }
   getEventConfirmed(id){
       return this._http.get(this.url+'events/'+ id).map((res: Response)=> res);
   }
   getCarteras(){
       return this._http.get(this.url+'carteras').map((res:Response)=>res);
   }
   getCartera(_id){

    return this._http.get(this.url + 'carteras/' + _id).map((res: Response) => res);
    }
   addUser(user){
       let body=JSON.stringify(user);
       var headers =new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
       return this._http.post(this.url+'users/register',body,{  headers: headers }).map((res:Response)=>res);
   }
   getUser() {
      return this._http.get(this.url + 'users').map((res: Response) => res);
   }
   getOneUser(_id) {
    return this._http.get(this.url + 'users/' + _id).map((res: Response) => res);
 }
   getMejorEjecutivo(_id){
        return this._http.get(this.url+'events/mejorEjecutivo/' + _id).map((res:Response)=>res);
   }

    updatePerson(event_object) {
        let body = JSON.stringify(event_object);
        var idEvent= event_object.name;
     // console.log(body);
        var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url +'events/'+idEvent, body, {headers: headers}).map((res:Response)=>res);
     } 
    
       //return this._http.post(this.url + 'events/edit',body,{headers : headers}).map((res:Response)=>res);
       //.catch(this.handleError);
    

    getPersonCartera(_id){
        
        // console.log(_id+"desde peticionesservice")
        return this._http.get(this.url+'carteras/persons/'+_id).map((res: Response)=> res);
        //  return this._http.get(this.url+'cartera/listPersonsCartera/'+_id).map((res: Response)=> res);
                
    }
    getUserCartera(id) {
     // console.log(body);
        var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url +'carteras/otro/'+id, {headers: headers}).map((res:Response)=>res);
     }
      
      // updateUsers (user: User): Observable<null> {
      //   return this.http.put(this.usersUrl, user, httpOptions).pipe(
      //     tap(_ => this.log(`updated user id=${user.id}`)),
      //     catchError(this.handleError<any>('updateUser'))
      //   );
      // }

    updateUser(user_object){
        console.log(user_object);
        let body = JSON.stringify(user_object);
        var idUser= user_object._id;
     // console.log(body);
        var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url +'users/'+idUser, body, {headers: headers}).map((res:Response)=>res);
    }
    updateCartera(cartera_object){
        console.log(cartera_object);
        let body = JSON.stringify(cartera_object);
        var idCartera= cartera_object._id;
     // console.log(body);
        var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url +'carteras/'+idCartera, body, {headers: headers}).map((res:Response)=>res);
    }
    addCartera(cartera){
        let body=JSON.stringify(cartera);
        var headers =new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
        return this._http.post(this.url+'carteras/register',body,{  headers: headers }).map((res:Response)=>res);
    }
    getRole(id){
        return this._http.get(this.url + 'users/rolName/' + id).map((res: Response) => res);
     }
      
 }