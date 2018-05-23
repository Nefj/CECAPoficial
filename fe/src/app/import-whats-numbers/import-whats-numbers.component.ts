import { Component, OnInit } from '@angular/core';
import { PeticionesService } from './../services/peticiones.service';
import { Identity } from './../services/global';
import { Person } from './../modelo/person';
import { Router,ActivatedRoute } from "@angular/router";
import { forEach } from '@angular/router/src/utils/collection';



@Component({
  selector: 'app-import-whats-numbers',
  templateUrl: './import-whats-numbers.component.html',
  styleUrls: ['./import-whats-numbers.component.css'],
  providers:[PeticionesService],

})
export class ImportWhatsNumbersComponent implements OnInit {

  public whatsGroupName;
  public whatsNumbers;
  public numbers=[];
  public persona;
  public cartera;


  public newPersons=[];

  constructor(
    private _peticionesService:PeticionesService,
    private router: Router,
    private route: ActivatedRoute,

  ) { 

    this.persona=new Person('','',null,null,'','',null,'',);
  }

  ngOnInit() {
    this.queryCartera();
  }

  onSubmit(){

    this.fixText();
    console.log(this.whatsGroupName);
    console.log(this.whatsNumbers);



  }
  fixText(){
    var numeros=this.whatsNumbers.split(',');
    console.log(numeros);
    numeros.forEach(element => {
      if (element.split(';')[1] != undefined) {
        if (element.split(';')[1].length == 8) {
           this.numbers.push( element.split(';')[1]);
        }
      
     }
    });
    console.log(this.numbers);
    this.saveOnDB();
    // this.router.navigate(['home/persons']);
  }
  saveOnDB(){

    for(let p of this.numbers){


      this.persona.whatsapp_group=this.whatsGroupName;
      this.persona.cellphone=p;
      this.persona.carteras=this.cartera._id;
      this._peticionesService.addPersonFromWhatsapp(this.persona).subscribe(res=>{
        this.newPersons.push(res);

        this.router.navigate(['home/persons']);
      },err=>{

        console.log(err);
      })
    }
    
    
  }

  queryCartera() {
    //console.log(Identity._id)
    this._peticionesService.getUserCartera(Identity._id).subscribe(
       result => {
          this.cartera = result;
          console.log('aqui la cartera del usuario::::');
          console.log(this.cartera);
       },
       error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
       }
    );
  }
  
  cancel(){
    this


  }

}
