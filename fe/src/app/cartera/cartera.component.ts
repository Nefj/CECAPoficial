import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { Person } from '../modelo/person';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.css'],
  providers: [, PeticionesService]
  
})
export class CarteraComponent implements OnInit {

  public carteras;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {

    this._peticionesService.getCarteras().subscribe(response=>{
      this.carteras=response;
    });
  }
  send(_id:string){
    // console.log(_id);
    this.router.navigate(['/home/cartera',_id]);
  }
  editCartera(_name:string){

    this.router.navigate(['/home/cartera',_name]);
  }

}
