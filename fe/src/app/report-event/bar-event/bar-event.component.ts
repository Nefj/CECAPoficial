import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-bar-event',
  templateUrl: './bar-event.component.html',
  styleUrls: ['./bar-event.component.css']
})
export class BarEventComponent implements OnInit {
  public eventId;
  public event;
  public inscriptions;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Ejecutivo 1', 'Ejecutivo 2', 'Ejecutivo 3', 'Ejecutivo 4'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [{events:this.inscriptions}, '', '', ''], label: 'Evento 1'},
    {data: [{events:this.inscriptions}, '', '', ''], label: 'Evento 2'}
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
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
 
  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this._peticionesService.getEvent(this.eventId).subscribe(
      result => {
         this.event = result;
         console.log(this.event)
         //this.event.map(event => {
        this.inscriptions = this.event.inscriptions.filter(e => {console.log(e.state == 1); return e.state == 1});
       //});
       console.log(this.event)
         this.inscriptions = this.event.inscritos;
      },
      error => {
         console.log(<any>error)
      }
   );
  }

}