import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-report-trimestral',
  templateUrl: './report-trimestral.component.html',
  styleUrls: ['./report-trimestral.component.css'],
  providers: [, PeticionesService]
})
export class ReportTrimestralComponent implements OnInit {
  public events;
  public inscriptions;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    console.log('report-trimestral.component.ts cargado')
    this._peticionesService.getTrimestral().subscribe(
      result => {
         this.events = result;
         //console.log(result)
         this.events.map(event => {
          // var sum = 0;
          event.inscriptions = event.inscriptions.filter(e => {console.log(e.state == 1); return e.state == 1});
          // console.log(e)
          // event.inscritos = sum;
       });
       console.log(this.events)
         this.inscriptions = this.events.inscritos;
      },
      error => {
         console.log(<any>error)
      }
   );
  }

}
