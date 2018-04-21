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
   public interes;//coleccion de interes
   public profecion
   public inscription;
   public person;
   public progSeleccionado;
   public idProgram;
   public intSeleccionado;// interes de la persona seleccionada
   public interesNum;
   public ocupSeleccionado;
   public identy;
   public cartera;
   constructor(private _peticionesService: PeticionesService) {
      this.person = new Person('', '', null, null, '', null, '');
      this.inscription = new Inscription('', '', '', '');
      //this.identy=Identity._id;
   }

   ngOnInit() {
       console.log(Identity._id);
       //this.queryPrograms();
       this.queryCartera();
      // console.log(this.cartera);
      // this.interes=[{inscrito:0,confirmado:1,interesado:2,En_duda:3,No_participa:4,Proximo:5}];
       this.interes=['inscrito','confirmado','interesado','En duda','No participa','Proximo'];
    }
    captProgram(){
        console.log(this.progSeleccionado);
        // this.queryIdProgram();
        // console.log(this.idProgram+ 'hola max');
    }
    captInteres(){
        if(this.intSeleccionado == 'inscrito'){
            this.interesNum = 0
        }else{if(this.intSeleccionado == 'confirmado'){
            this.interesNum = 1
            }else{if(this.intSeleccionado == 'interesado'){
                    this.interesNum = 2
                }else{if(this.intSeleccionado == 'En duda'){
                        this.interesNum = 3
                    }else{if(this.intSeleccionado == 'No participa'){
                            this.interesNum = 4
                        }else{if(this.intSeleccionado == 'Proximo'){
                                this.interesNum = 5}
                        }
                    }
                }
            }
        }
        console.log(this.intSeleccionado);
        console.log(this.interesNum);
    }
    captOcupation(){console.log(this.ocupSeleccionado);}

   save() {
      const firstName = this.firstNameRef.nativeElement.value;
      let lastName = this.lastNameRef.nativeElement.value;
      const ci = this.ciRef.nativeElement.value;
      //const user = Identity._id;
      const cellphone = this.cellphoneRef.nativeElement.value;
      const email = this.emailRef.nativeElement.value;
      // let cartera = '';
      // if (this.birthdayRef.nativeElement.value == '') birthday = new Date(1, 2, 3);
      //else birthday = this.birthdayRef.nativeElement.value;
      const newPerson = new Person(firstName, lastName, ci, cellphone, email, this.ocupSeleccionado, this.cartera._id);
      console.log(newPerson);

      if((this.firstNameRef.nativeElement.value=='')||
            (this.lastNameRef.nativeElement.value=='')||
            (this.ciRef.nativeElement.value=='')||
            (this.cellphoneRef.nativeElement.value=='')||
            (this.emailRef.nativeElement.value=='')
        ){


            window.alert(
                "Asegurese que todos los campos esten llenos"
            )
        }else{

            this._peticionesService.addPerson(newPerson).subscribe(response => {
                console.log(response);
                this.messageEvent.emit();
                this.close.nativeElement.click();
             },
             error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
                alert('La Cedula de Identidad o Telefono de la Persona ya existe');
             });

        }

      

   }

   // queryPrograms() {
   //    this._peticionesService.getPrograms().subscribe(
   //       result => {
   //          this.programs = result;
   //          //    console.log('aqui los programas');
   //          //    console.log(this.programs);
   //       },
   //       error => {
   //          var errorMessage = <any>error;
   //          console.log(errorMessage);
   //       }
   //    );
   // }
   //    queryIdProgram(){
   //     this._peticionesService.getIdProgram(this.progSeleccionado).subscribe(
   //         result => {
   //          this.idProgram = result;
   //         //    console.log('ID PROGRAM');
   //         },
   //         error => {
   //            var errorMessage = <any>error;
   //            console.log(errorMessage);
   //         }
   //      );
   //    }
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
