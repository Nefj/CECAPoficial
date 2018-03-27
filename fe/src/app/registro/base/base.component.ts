import { Component, OnInit } from '@angular/core';
import { PeticionesService} from '../../services/peticiones.service'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  providers:[,PeticionesService]

})
export class BaseComponent implements OnInit {
  public listado_personas;

  constructor(

    private _peticionesService:PeticionesService  
  ) {}

  ngOnInit() {



  
    
      //   console.log(this._peticionesService.getPrueba)
    
      //   this._peticionesService.getPersonas().subscribe(
      //     result=>{
            
      //       this.listado_personas=result;
      //       console.log(this.listado_personas);
    
      //     },
      //     error=>{
      //       var errorMessage=<any>error;
      //       console.log(errorMessage);
      //     }
      //   );
        
        
      }
  }


