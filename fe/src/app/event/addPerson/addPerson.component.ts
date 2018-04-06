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
   @ViewChild('ocupation') ocupationRef: ElementRef;
   @ViewChild('program') programRef: ElementRef;
   @ViewChild('interes') interesRef: ElementRef;
   @ViewChild('description') descRef: ElementRef;
   @ViewChild("close", { read: ElementRef }) close: ElementRef;
   @Output() messageEvent = new EventEmitter();

   public programs;
   public interes;
   public profecion
   public inscription;
   public person;
   constructor(private _peticionesService: PeticionesService) { 
       this.person = new Person('','',null, null,'',null,'');
       this.inscription = new Inscription('', '', '', '');
   }

   ngOnInit() {
       this.queryPrograms();
   }

   save() {
      let birthday;
      const firstName = this.firstNameRef.nativeElement.value;
      let lastName = this.lastNameRef.nativeElement.value;
      const ci = this.ciRef.nativeElement.value;
      const user = Identity._id;
      const cellphone = this.cellphoneRef.nativeElement.value;
      const email = this.emailRef.nativeElement.value;
      const ocupation =this.ocupationRef.nativeElement.value;
      let cartera;
     // if (this.birthdayRef.nativeElement.value == '') birthday = new Date(1, 2, 3);
    //else birthday = this.birthdayRef.nativeElement.value;
      const newPerson = new Person(firstName, lastName, ci,cellphone, email, ocupation, cartera);
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
           console.log('aqui los programas');
           console.log(this.programs);
        },
        error => {
           var errorMessage = <any>error;
           console.log(errorMessage);
        }
     );
   }
}
