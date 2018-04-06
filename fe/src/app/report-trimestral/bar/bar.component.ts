import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  public d = new Date();
  public month: Array<string> = [];

    months(){
       this.month[0] = "January";
       this.month[1] = "February";
       this.month[2] = "March";
       this.month[3] = "April";
       this.month[4] = "May";
       this.month[5] = "June";
       this.month[6] = "July";
       this.month[7] = "August";
       this.month[8] = "September";
       this.month[9] = "October";
       this.month[10] = "November";
       this.month[11] = "December";
    }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:number[] = [this.d.getMonth()-3, this.d.getMonth()-2, this.d.getMonth()-1];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [{events:name}, '', '', ], label: 'Evento 1'},
    {data: [{events:name}, '', '', ], label: 'Evento 2'}
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
