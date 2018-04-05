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

   addUser(user){
      
       let body=JSON.stringify(user);
       var headers =new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
       return this._http.post(this.url+'users/register',body,{  headers: headers }).map((res:Response)=>res);
   }

   
    updatePerson(event_object) {
        let body = JSON.stringify(event_object);
        var idEvent= event_object.name;
     // console.log(body);
        var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url +'events/'+idEvent, body, {headers: headers}).map((res:Response)=>res);
       //return this._http.post(this.url + 'events/edit',body,{headers : headers}).map((res:Response)=>res);
       //.catch(this.handleError);
    } 

    getPersonCartera(_id){
        
        console.log(_id+"desde peticionesservice")
        return this._http.get(this.url+'carteras/'+_id).map((res: Response)=> res);
        
        //  return this._http.get(this.url+'cartera/listPersonsCartera/'+_id).map((res: Response)=> res);
                
    }

    private extractData(res: Response) {
      let body = res.json();
      console.log(body);
      return body || {};
  }

  private handleError(error: any) {
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);
      return Observable.throw(errMsg);
  }
      
      // updateUsers (user: User): Observable<null> {
      //   return this.http.put(this.usersUrl, user, httpOptions).pipe(
      //     tap(_ => this.log(`updated user id=${user.id}`)),
      //     catchError(this.handleError<any>('updateUser'))
      //   );
      // }

      
 }
