import { Component, OnInit, ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
import {PeticionesService } from '../../services/peticiones.service';
import { Identity,Roles,CarteraS } from "../../services/global";
import {Cartera} from '../../modelo/cartera';


@Component({
  selector: 'app-add-cartera',
  templateUrl: './add-cartera.component.html',
  styleUrls: ['./add-cartera.component.css'],
  providers:[PeticionesService]
  
})
export class AddCarteraComponent implements OnInit {

  @ViewChild('name') nameRef:ElementRef;
  @Output()MessageEvent=new EventEmitter();
  @ViewChild("close", {read: ElementRef}) close: ElementRef;
  

  constructor(private _peticionesService:PeticionesService) { }
  
  ngOnInit() {
  }


  save(){
    const name=this.nameRef.nativeElement.value;

    const newCartera=new Cartera(name,null);
    console.log(newCartera);

    this._peticionesService.addCartera(newCartera).subscribe(response=>{
      this.MessageEvent.emit();

      this.close.nativeElement.click();
    })
  }

}
