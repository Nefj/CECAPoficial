import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Identity } from '../../services/global';
import { Person } from '../../modelo/person';
import { Inscription } from '../../modelo/inscription';

@Component({
   selector: 'app-addPerson',
   templateUrl: './addPerson.component.html',
   styleUrls: ['./addPerson.component.css']
})
export class AddPersonComponent implements OnInit {

   @ViewChild('firstName') firstNameRef: ElementRef;
   @ViewChild('lastName') lastNameRef: ElementRef;
   @ViewChild('ci') ciRef: ElementRef;
   @ViewChild('cellphone') cellphoneRef: ElementRef;
   @ViewChild('email') emailRef: ElementRef;
//    @ViewChild('ocupation') ocupationRef: ElementRef;
//    @ViewChild('program') programRef: ElementRef;
//    @ViewChild('interes') interesRef: ElementRef;
   @ViewChild('description') descRef: ElementRef;
   @ViewChild("close", { read: ElementRef }) close: ElementRef;
   @Output() messageEvent = new EventEmitter();

   public programs;
   public interes;
   public profecion
   public inscription;
   public person;
   public progSeleccionado;
   public intSeleccionado;
   public ocupSeleccionado;
   public identy;
   public cartera;
   constructor(private _peticionesService: PeticionesService) { 
       this.person = new Person('','',null, null,'',null,'');
       this.inscription = new Inscription('', '', '', '');
       this.identy=Identity._id;
   }

   ngOnInit() {
       this.queryPrograms();
       this.queryCartera();
       console.log(this.cartera);
      // this.interes=[{inscrito:0,confirmado:1,interesado:2,En_duda:3,No_participa:4,Proximo:5}];
       this.interes=['inscrito','confirmado','interesado','En duda','No participa','Proximo'];
       console.log(Identity._id+'vamos que se puede')
    }
    captProgram(){console.log(this.progSeleccionado);}
    captInteres(){console.log(this.intSeleccionado);}
    captOcupation(){console.log(this.ocupSeleccionado);}

   save() {
      const firstName = this.firstNameRef.nativeElement.value;
      let lastName = this.lastNameRef.nativeElement.value;
      const ci = this.ciRef.nativeElement.value;
      //const user = Identity._id;
      const cellphone = this.cellphoneRef.nativeElement.value;
      const email = this.emailRef.nativeElement.value;
      let cartera='';
     // if (this.birthdayRef.nativeElement.value == '') birthday = new Date(1, 2, 3);
    //else birthday = this.birthdayRef.nativeElement.value;
      const newPerson = new Person(firstName, lastName, ci,cellphone, email, this.ocupSeleccionado, this.cartera._id);
      console.log(newPerson);
      this._peticionesService.addPerson(newPerson).subscribe(response => {
         // console.log(response);
         this.messageEvent.emit();
         this.close.nativeElement.click();
      });
      
   }

   queryPrograms(){
    this._peticionesService.getPrograms().subscribe(
        result => {
           this.programs = result;
        //    console.log('aqui los programas');
        //    console.log(this.programs);
        },
        error => {
           var errorMessage = <any>error;
           console.log(errorMessage);
        }
     );
   }
   queryCartera(){
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
