import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-events',
   templateUrl: './events.component.html',
   styleUrls: ['./events.component.css'],
   providers: [, PeticionesService]

})
export class EventsComponent implements OnInit {
   public events;
   constructor(
      private router: Router,
      private _peticionesService: PeticionesService
   ) { }

   ngOnInit() {
      this.query();
   }
   send(_id: string) {
      this.router.navigate(['home/event', _id]);
   }
   receiveMessage() {
      this.query();
   }
   query() {
      this._peticionesService.getEvents().subscribe(
         result => {
            this.events = result;
            this.events.map(event => {
               var sum = 0;
               event.inscriptions.forEach(e => {
                  if (e.state == 1) sum++;
               });
               event.cupos = event.total - sum;
            });
         },
         error => {
            var errorMessage = <any>error;
            console.log(errorMessage);
         }

      );
   }
}


