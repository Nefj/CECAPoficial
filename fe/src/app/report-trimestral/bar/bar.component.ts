import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Enero', 'Febrero', 'Marzo', 'Abril'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [{events:name}, '', '', ''], label: 'Evento 1'},
    {data: [{events:name}, '', '', ''], label: 'Evento 2'}
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

  constructor() { }

  ngOnInit() {
  }

}
