import { Component, OnInit, ElementRef,ViewChild, Output, EventEmitter} from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute,Router } from "@angular/router";
import { User} from '../../modelo/user';

@Component({
  selector: 'app-edit-ejecutivo',
  templateUrl: './edit-ejecutivo.component.html',
  styleUrls: ['./edit-ejecutivo.component.css']
})
export class EditEjecutivoComponent implements OnInit {
  @ViewChild('active') activeRef:ElementRef;
  public ejecutivo;
  public ejecutivoActive;
  public ejecutivoId;

  constructor(
    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.queryEjecutivoId();
    this.findEjecutivo();
  }

  queryEjecutivoId(){
      this.route.params.subscribe(params => {
      this.ejecutivoId=params.activeRef;
      console.log(this.ejecutivo);
   });
  }

  findEjecutivo(){
     this._peticionesService.getOneUser(this.ejecutivoId).subscribe(
        result =>{
          this.ejecutivo=result;
          this.ejecutivoActive=this.ejecutivo.active;
        },
        error =>{
          console.log(<any>error);
        });
  }

  editEjecutivo(){
    //console.log(this.ejecutivo);
    this.ejecutivo.active=this.activeRef.nativeElement.value;
    this._peticionesService.updateUser(this.ejecutivo).subscribe(
      result=>{
        var res=result;
        console.log(res);
        this.router.navigate(['home/ejecutivo']);
      },
      error=>{
        console.log(<any>error);
      });
  }
}