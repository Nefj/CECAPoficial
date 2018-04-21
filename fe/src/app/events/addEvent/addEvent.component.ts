import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Event } from '../../modelo/event';

@Component({
   selector: 'app-addEvent',
   templateUrl: './addEvent.component.html',
   styleUrls: ['./addEvent.component.css'],
   providers: [ PeticionesService]
})
export class AddEventComponent implements OnInit {
   public programs;
   @ViewChild('description') descriptionRef: ElementRef;
   @ViewChild('date') dateRef: ElementRef;
   @ViewChild('total') totalRef: ElementRef;
   @ViewChild('program') programRef: ElementRef;
   @ViewChild("close", { read: ElementRef }) close: ElementRef;
   @Output() messageEvent = new EventEmitter();
   constructor(private _peticionesService: PeticionesService) { }

   ngOnInit() {
      this._peticionesService.getPrograms().subscribe(response => {
         this.programs = response;
         // console.log(response);
      });
   }
   save() {
      const description = this.descriptionRef.nativeElement.value;
      let date = this.dateRef.nativeElement.value;
      const total = this.totalRef.nativeElement.value;
      const program = this.programRef.nativeElement.value;
      const newEvent = new Event(description, date, total, program);
      console.log(newEvent);


      if((this.descriptionRef.nativeElement.value=='')||(this.totalRef.nativeElement.value=='')){
        window.alert("Asegurese de llenar todos los campos")

      }else{
          if(this.dateRef.nativeElement.value <new Date()){
            window.alert("Asegurese que la fecha sea mayor a la de hoy")
            
          }else{
            this._peticionesService.addEvent(newEvent).subscribe(response => {
                // console.log(response);
                this.messageEvent.emit();
                this.close.nativeElement.click();
             });

          }
       

      }
      
   }

}
