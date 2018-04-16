import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { User } from '../modelo/user';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-ejecutivo',
  templateUrl: './ejecutivo.component.html',
  styleUrls: ['./ejecutivo.component.css'],
  providers: [ PeticionesService ]
})
export class EjecutivoComponent implements OnInit {
  public ejecutivos;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this._peticionesService.getUser().subscribe(
      result => {
         this.ejecutivos = result;
         console.log(this.ejecutivos);  
      },
    error => {
      console.log(<any>error)
    });
 }
  editEjecutivo(_id:String){
  //console.log(_id);
  this.router.navigate(['/home/ejecutivo/edit',_id]);
  console.log("router.navigate");
  }
}