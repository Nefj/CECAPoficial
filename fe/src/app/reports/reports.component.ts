import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeticionesService } from '../services/peticiones.service';
import { Inscription } from '../modelo/inscription';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [, PeticionesService]
})
export class ReportsComponent implements OnInit {
  public titulo: string;
  public events;
  public inscriptions;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _peticionesService: PeticionesService
  ) {
    this.titulo = 'Reportes de registros';
  }

  ngOnInit() {
    console.log('reports.components.ts cargado');
    this._peticionesService.getEvents().subscribe(
      result => {
         this.events = result;
         console.log(result);
         this.inscriptions = this.events.inscriptions;
      },
      error => {
         console.log(<any>error);
      }
   );
  }

}