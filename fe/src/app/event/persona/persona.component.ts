import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../../services/persona.service';
import { PeticionesService} from '../../services/peticiones.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers:[PersonaService,PeticionesService]

})
export class PersonaComponent implements OnInit {
  public listado_personas;
  public busqueda;

  constructor(
     private router: Router,
     private route: ActivatedRoute,
     private _personaService: PersonaService,
     private _peticionesService: PeticionesService
     
    

  ) {}

  ngOnInit() {
    this.query();    
  }
  query() {
    
    this._peticionesService.getPersons().subscribe(
       result => {
          this.listado_personas = result;
       },
       error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
       }
    );
 }
  edit(_id) {
    this.router.navigate(['home/persons/edit', _id]);
  }
}
