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
   private inscription;
   private person; 
   private personId:String;
   private eventId;
   private personName;
  // private colection_edit:Array<any>=[];
   @ViewChild('name') nameRef: ElementRef;
   @ViewChild('description') descriptionRef: ElementRef;
   @ViewChild("close", { read: ElementRef }) close: ElementRef;
   // @Input() editPerson: any;
   constructor(
      private _peticionesService: PeticionesService,
      private route: ActivatedRoute,
   ) { 
      this.inscription = new Inscription('', '', '', '');
   }

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
   showdate(){
    //  this.inscription.person = this.personId;
    //  this.inscription.name = this.eventId;
     // console.log(this.eventId);
      
      this._peticionesService.updatePerson(this.inscription).subscribe(
        result => {
          var esperado = result;
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        }
      );
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
      var arrayIds = params.id.split('-');
      this.personId = arrayIds[0];
      this.eventId =arrayIds[1];
      this.inscription.person = this.personId;
     this.inscription.name = this.eventId;
        //console.log(arrayIds);
        console.log('este es el ID de persona: '+this.personId);
        console.log('este es ID de evento: '+this.eventId);
     });
    this._peticionesService.getPerson(this.personId).subscribe(
         result => {
            this.person = result;
            //console.log(this.person);
         },
         error => {
            var errorMessage = <any>error;
            console.log(errorMessage);
         }
      );
   }

  //  queryEvent(){
  //   this._userService.signin(this.user).subscribe(
  //     response => {
  //        this.identity = response;
  //        if (!this.identity || !this.identity._id) {
  //           alert('Usuario Incorrecto');
  //        } else {
  //           Identity._id = this.identity._id;
  //           Identity.rol = this.identity.rol;
  //           Identity.name = this.user.name;
  //           this.localStorage.setItem('Identity', { _id: this.identity._id }).subscribe(() => { console.log('verifico el usuario') });
  //           this._router.navigate(['/']);

  //        }
  //     },
  //     error => {
  //        //console.log(<any>error);
  //        var errorMessage = <any>error;
  //        if (errorMessage != null) {
  //           var body = JSON.parse(error._body);
  //           this.status = 'error';
  //        }
  //     }
  //  );
  //  }
}
