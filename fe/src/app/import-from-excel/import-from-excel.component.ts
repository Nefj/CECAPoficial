import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { PeticionesService } from './../services/peticiones.service';
import { Identity } from './../services/global';
import { Person } from './../modelo/person';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-import-from-excel',
  templateUrl: './import-from-excel.component.html',
  styleUrls: ['./import-from-excel.component.css'],
  providers:[PeticionesService],
})
export class ImportFromExcelComponent implements OnInit {
  public arrayBuffer:any;
  public file:File;
  public listadenumeros;
  public person;
  public cartera;
  public persoasLocal=[];

  constructor(

    private _peticionesService:PeticionesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.person=new Person('','',null,null,'','',null,'');
                      //new Person(first_name: string, last_name: string, ci: number, cellphone: number, whatsapp_group: string, email: string, ocupation: number, carteras: string)
   }

  ngOnInit() {
    this.queryCartera();
  }



  
incomingfile(event) 
  {
  this.file= event.target.files[0]; 
  }

 Upload() {
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            
            console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
            this.listadenumeros=XLSX.utils.sheet_to_json(worksheet,{raw:true});
            console.log(this.listadenumeros);
            this.saveContacts();
        }
        fileReader.readAsArrayBuffer(this.file);

}
saveContacts(){
  for(let contact of this.listadenumeros){
    console.log(contact.Mobile);  
    if(contact.Mobile!=undefined){
      let num='s'+contact.Mobile;
      if(num.length==9){
        this.person.cellphone=num.substring(1,9);

      }else{
        this.person.cellphone=num.substring(6,num.length);
      } 
      
     
      this.person.first_name=contact.Firstname;
      if(contact.Lastname!=null){
        this.person.last_name=contact.Lastname;
      }
      this.person.carteras=this.cartera;
      this.person.whatsapp_group='Importados del Celular';
      this._peticionesService.addPersonFromWhatsapp(this.person).subscribe(res=>{
        
  
        this.router.navigate(['home/persons']);
      },err=>{
  
        console.log(err);
      });
      


    }else{
      this.persoasLocal.push(contact);
      console.log(this.persoasLocal);
  

    }
   
    // console.log(this.person);


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
}
