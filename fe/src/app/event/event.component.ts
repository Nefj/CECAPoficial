import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { Person } from '../modelo/person';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
   selector: 'app-event',
   templateUrl: './event.component.html',
   styleUrls: ['./event.component.css'],
   providers: [, PeticionesService]

})
export class EventComponent implements OnInit {
   private eventId;
   public event;
   public inscriptions;
   public ocupation;
   public states: Array<any> = [];
   constructor(
      private route: ActivatedRoute,
      private router: Router,
      private _peticionesService: PeticionesService
   ) { }

   ngOnInit() {
      this.query();
   }
   receiveMessage() {
      this.query();
   }
   query() {
      this.route.params.subscribe(params => {
         this.eventId = params.id
      });
      this._peticionesService.getEvent(this.eventId).subscribe(
         result => {
            this.event = result;
            // console.log(this.event);
            this.inscriptions = this.event.inscriptions;
            //prueba total
            var o =this.event.total;
            console.log(this.inscriptions);
            console.log(o);
         },
         error => {
            var errorMessage = <any>error;
            console.log(errorMessage);
         }
      );
   }
   edit(personId) {
      // console.log('antes de enviar', personId)

      this.router.navigate(['home/editPerson', personId]);
   }
   inscritos(){
    for(let i=0; i <=this.states.length; i++){
     this.states.pop(); i=0;
    }
    for(let i of this.inscriptions){
        if(i.state == 1){this.states.push(i);}
    } 
   }
   confirmados(){
    for(let i=0; i <=this.states.length; i++){
        this.states.pop(); i=0;
       }
    for(let i of this.inscriptions){
        if(i.state == 3){
            this.states.push(i);}
    } 
   }
   interesados(){
    for(let i=0; i <=this.states.length; i++){
        this.states.pop(); i=0;
       }
    for(let i of this.inscriptions){
        if(i.state == 2){
            this.states.push(i);
        }
    } 
   }
   noParticipa(){
    for(let i=0; i <=this.states.length; i++){
        this.states.pop(); i=0;
       }
    for(let i of this.inscriptions){
        if(i.state == 4){
            this.states.push(i);
        }
    } 
   }
   proximo(){
    for(let i=0; i <=this.states.length; i++){
        this.states.pop(); i=0;
       }
    for(let i of this.inscriptions){
        if(i.state == 5){
            this.states.push(i);
        }
    } 
   }
   enDuda(){
    for(let i=0; i <=this.states.length; i++){
        this.states.pop(); i=0;}
    for(let i of this.inscriptions){
        if(i.state == 0){this.states.push(i);}
    } 
   }
   todos(){
    for(let i=0; i <=this.states.length; i++){
        this.states.pop(); i=0;
       }
    for(let i of this.inscriptions){
            this.states.push(i);
    } 
   }

}


