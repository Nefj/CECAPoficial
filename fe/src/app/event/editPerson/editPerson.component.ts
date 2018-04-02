import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';
import { Identity } from '../../services/global';
import { Inscription } from '../../modelo/inscription';

@Component({
   selector: 'app-editPerson', 
   templateUrl: './editPerson.component.html',
   styleUrls: ['./editPerson.component.css']
})
export class EditPersonComponent implements OnInit {
   private eventId;
   private inscription;
   private person; 
   private personId:String;
   private personName;
   @ViewChild('name') nameRef: ElementRef;
   @ViewChild('description') descriptionRef: ElementRef;
   @ViewChild("close", { read: ElementRef }) close: ElementRef;
   // @Input() editPerson: any;
   constructor(
      private _peticionesService: PeticionesService,
      private route: ActivatedRoute,
   ) { }

   ngOnInit() {
     this.queryPerson();
      // this.route.params.subscribe(params => this.eventId = params.id);
      // this.inscription = new Inscription(this.editPerson.name, this.editPerson.description, this.editPerson.state, this.editPerson.person);

      // this.nameRef.nativeElement.value = this.inscription.name;
      // this.descriptionRef.nativeElement.value = this.inscription.description;

      // this._peticionesService.getPerson(this.inscription.person).subscribe(p => this.person = p);
      // // console.log(this.eventId);
      // console.log(this.editPerson, this.inscription);
   }

   save() {
      console.log(this.person);
      // let birthday;
      // const firstName = this.firstNameRef.nativeElement.value;
      // let lastName = this.lastNameRef.nativeElement.value;
      // const ci = this.ciRef.nativeElement.value;
      // const user = Identity._id;
      // if (this.birthdayRef.nativeElement.value == '') birthday = new Date(1, 2, 3);
      // else birthday = this.birthdayRef.nativeElement.value;
      // const newPerson = new Person(firstName, lastName, birthday, ci, user);
      // this._peticionesService.addPerson(newPerson).subscribe(response => {
      //    console.log(response);
      // });
      // console.log(this.id);
      this.close.nativeElement.click();
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
}
