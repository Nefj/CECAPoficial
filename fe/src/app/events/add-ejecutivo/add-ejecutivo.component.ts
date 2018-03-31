import { Component, OnInit } from '@angular/core';
import {PeticionesService } from '../../services/peticiones.service';
import {Cartera} from '../../modelo/cartera';

@Component({
  selector: 'app-add-ejecutivo',
  templateUrl: './add-ejecutivo.component.html',
  styleUrls: ['./add-ejecutivo.component.css'],
  providers:[PeticionesService]
})
export class AddEjecutivoComponent implements OnInit {
  public carteras;


  constructor(private _peticionesService:PeticionesService) { }

  ngOnInit() {
    this._peticionesService.getCarteras().subscribe(response=>{
      this.carteras=response;
    });
  }

}
