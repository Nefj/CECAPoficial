import { Injectable } from "@angular/core";
import { HttpModule, Http, Response, Headers } from "@angular/http";
import { GLOBAL } from './global';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable'

import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}