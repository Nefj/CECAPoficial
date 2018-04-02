import { Component, OnInit, ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
import {PeticionesService } from '../../services/peticiones.service';
import {Cartera} from '../../modelo/cartera';
import {User} from '../../modelo/user';

@Component({
  selector: 'app-add-ejecutivo',
  templateUrl: './add-ejecutivo.component.html',
  styleUrls: ['./add-ejecutivo.component.css'],
  providers:[PeticionesService]
})
export class AddEjecutivoComponent implements OnInit {
  public carteras;

  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('date') dateRef: ElementRef;
  @ViewChild('cell') cellRef: ElementRef;
  @ViewChild('cartera') carteraRef: ElementRef;
  @Output()MessageEvent=new EventEmitter();


  constructor(private _peticionesService:PeticionesService) { }

  ngOnInit() {
    this._peticionesService.getCarteras().subscribe(response=>{
      this.carteras=response;
    });
  }

  save(){
    const name= this.nameRef.nativeElement.value;
    let date=this.dateRef.nativeElement.value;
    let cell=this.cellRef.nativeElement.value;
    const cartera=this.carteraRef.nativeElement.value;

    const newEjecutivo=new User(name,date,cell,cartera)
    console.log(newEjecutivo);

    this._peticionesService.addUser(newEjecutivo).subscribe(response=>{
      this.MessageEvent.emit();
      


    })

  }

}

