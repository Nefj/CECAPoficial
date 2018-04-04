import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-info-cartera',
  templateUrl: './info-cartera.component.html',
  styleUrls: ['./info-cartera.component.css']
})
export class InfoCarteraComponent implements OnInit {


  public persons;
  public personId;
  constructor(

    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
   this.queryPerson();
   this.findPerson();
    
  }

  queryPerson(){
    this.route.params.subscribe(params => {
        this.personId = params.id;
        console.log(this.personId);
        console.log(this.personId.split('-'));
     });
    //  this._peticionesService.getEvent(this.personId).subscribe(
    //     result => {
    //        this.person = result;
    //        console.log(this.person);
           
    //        //prueba total
    //        var o =this.person.total;
    //     },
    //     error => {
    //        var errorMessage = <any>error;
    //        console.log(errorMessage);
    //     }
    //  );
   }
   findPerson(){

    
   }
}
