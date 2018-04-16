import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../../services/peticiones.service';
import { DescOcupation } from '../../../modelo/descOcupation';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 public personName;
 private person;
 private idPerson;
 public descOcupation: DescOcupation;
  constructor(
     private _peticionesService: PeticionesService,
      private route: ActivatedRoute,
      private router: Router
  ) {
    this.descOcupation = new DescOcupation('','','','','','','');
   }

  ngOnInit() {
    this.queryPerson();
}

queryPerson(){ 
  this.route.params.subscribe(params => {
    this.idPerson = params.id;
    console.log(this.idPerson)
   });
  this._peticionesService.getPerson(this.idPerson).subscribe(
       result => {
          this.person = result;
       },
       error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
       }
    );
 }
 saveEdition(){
  console.log(this.descOcupation);
  this._peticionesService.updatePersonOcupation(this.descOcupation, this.person._id).subscribe(
      result =>{
        this.router.navigate(['home/persons']);
        alert('Se Guardo correctamente la edicion');
      },
      error=>{
        var errorMessage = <any>error;
          console.log(errorMessage);
      }
  );
 }
 cancelar() {
  this.router.navigate(['/home/persons']);
 }
}
