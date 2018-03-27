import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Identity } from '../../services/global';
import { Person } from '../../modelo/person';

@Component({
   selector: 'app-addPerson',
   templateUrl: './addPerson.component.html',
   styleUrls: ['./addPerson.component.css']
})
export class AddPersonComponent implements OnInit {

   @ViewChild('firstName') firstNameRef: ElementRef;
   @ViewChild('lastName') lastNameRef: ElementRef;
   @ViewChild('birthday') birthdayRef: ElementRef;
   @ViewChild('ci') ciRef: ElementRef;
   @ViewChild("close", { read: ElementRef }) close: ElementRef;
   @Output() messageEvent = new EventEmitter();
   constructor(private _peticionesService: PeticionesService) { }

   ngOnInit() {
   }

   save() {
      let birthday;
      const firstName = this.firstNameRef.nativeElement.value;
      let lastName = this.lastNameRef.nativeElement.value;
      const ci = this.ciRef.nativeElement.value;
      const user = Identity._id;
      if (this.birthdayRef.nativeElement.value == '') birthday = new Date(1, 2, 3);
      else birthday = this.birthdayRef.nativeElement.value;
      const newPerson = new Person(firstName, lastName, birthday, ci, user);
      this._peticionesService.addPerson(newPerson).subscribe(response => {
         // console.log(response);
         this.messageEvent.emit();
         this.close.nativeElement.click();
      });
   }
}
