import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-report-event',
  templateUrl: './report-event.component.html',
  styleUrls: ['./report-event.component.css'],
  providers: [, PeticionesService]
})
export class ReportEventComponent implements OnInit {
  public eventId;
  public event;
  public inscriptions;
 
  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this._peticionesService.getEvent(this.eventId).subscribe(
      result => {
         this.event = result;
         console.log(this.event)
         //this.event.map(event => {
        this.inscriptions = this.event.inscriptions.filter(e => {console.log(e.state == 1); return e.state == 1});
       //});
       console.log(this.event)
         this.inscriptions = this.event.inscritos;
      },
      error => {
         console.log(<any>error)
      }
   );
  }

}
