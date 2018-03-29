import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';

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
   constructor(
      private route: ActivatedRoute,
      private router: Router,
      private _peticionesService: PeticionesService
   ) { }

   ngOnInit() {
      this.query();
      this.queryInscritos();
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
   inscritos(_id: string){
       
   }
   confirmados(_id: string){
   }

   queryInscritos(){
    this.route.params.subscribe(params => {
        this.eventId = params.id
     });
     
   }
}


