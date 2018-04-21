import { Component, OnInit, ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
import {PeticionesService } from '../../services/peticiones.service';
import {Cartera} from '../../modelo/cartera';
import { Identity,Roles } from "../../services/global";
import {User} from '../../modelo/user';

@Component({
  selector: 'app-add-ejecutivo',
  templateUrl: './add-ejecutivo.component.html',
  styleUrls: ['./add-ejecutivo.component.css'],
  providers:[PeticionesService]
})
export class AddEjecutivoComponent implements OnInit {
  public carteras;
  public carteraSeleccionada;
  public carteraObject;
  public  rolid;
  public newUser;
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('date') dateRef: ElementRef;
  @ViewChild('cell') cellRef: ElementRef;
  @ViewChild('cartera') carteraRef: ElementRef;
  @Output()MessageEvent=new EventEmitter();
  @ViewChild("close", {read: ElementRef}) close: ElementRef;
  


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
    this.carteraSeleccionada=this.carteraRef.nativeElement.value;
    // console.log(cartera);
    const userid=Identity._id;
   this.rolid=Roles[1]._id
  
  
    // const newEjecutivo=new User(name,date,cell,cartera)

    const newEjecutivo=new User(userid,name,true,name,this.rolid);
   console.log(newEjecutivo);

    this._peticionesService.addUser(newEjecutivo).subscribe(response=>{
      this.newUser=response;
      this.MessageEvent.emit();
      
      this.findCartera();
       
     
      this.close.nativeElement.click();

    })

  }
  findCartera(){
    this._peticionesService.getCartera(this.carteraSeleccionada).subscribe(
       result =>{
         this.carteraObject=result;
        this.asignarCartera(); 

        
       },
       error =>{
         var errorMessage=<any>error;
         console.log(errorMessage);
       }

    )


 }
  asignarCartera(){
    this.carteraObject.user=this.newUser._id;
    this._peticionesService.updateCartera(this.carteraObject).subscribe(
      result=>{

        var res=result;
        console.log(res);
        // this.router.navigate(['home/cartera']);

      },error=>{
        var errorMessage=<any>error;
        console.log(errorMessage);
      }
    )

  }

}

