import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../../services/persona.service'
import { PeticionesService} from '../../services/peticiones.service'

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers:[PersonaService,PeticionesService]

})
export class PersonaComponent implements OnInit {
  public listado_personas='asdf';

  constructor(

     private _personaService: PersonaService,
     private _peticionesService: PeticionesService
     
    

  ) {}

  ngOnInit() {

    // console.log(this._personaService.prueba('hola'));

    // console.log(this._peticionesService.getPrueba)

    // this._peticionesService.getPersonas().subscribe(
    //   result=>{
    //     console.log(result);
    //     this.listado_personas=result;
    //     console.log(this.listado_personas);

    //   },
    //   error=>{
    //     var errorMessage=<any>error;
    //     console.log(errorMessage);
    //   }

    // );
    
    
  }

}
