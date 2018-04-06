import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-bar-event',
  templateUrl: './bar-event.component.html',
  styleUrls: ['./bar-event.component.css']
})
export class BarEventComponent implements OnInit {
  public userId;
  public user;
  public inscriptions;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Ejecutivo 1', 'Ejecutivo 2', 'Ejecutivo 3', 'Ejecutivo 4'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [{events:this.user}, '', '', ''], label: 'Evento 1'},
    {data: [{events:this.user}, '', '', ''], label: 'Evento 2'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 12),
      6,
      12,
      (Math.random() * 12),
      3,
      (Math.random() * 12),
      1];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
 
  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
     this._peticionesService.getMejorEjecutivo(this.userId).subscribe(
        result => {
           this.user = result;
           console.log(this.user);
           //this.inscriptions = this.user.inscriptions;
           //console.log(this.inscriptions);
        },
        error => {
           console.log(<any>error);
        }
     );
    }

}