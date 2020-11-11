import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-grafica-dep',
  templateUrl: './grafica-dep.component.html',
  styleUrls: ['./grafica-dep.component.css']
})
export class GraficaDepComponent implements OnInit {

  constructor(private servio: ServicioService) { }

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  datosmongo:object[]=[];
  
  daotredis:object[]=[];

  ngOnInit(): void {
  }

  getData(){
    this.servio.getDatosDep().subscribe(
      res => {
        //this.saludo=res.saludo;
        this.datosmongo=res['datos'];
        this.daotredis=res['datosgraph'];
        console.log(this.datosmongo);
        console.log(this.daotredis);
        console.log(res);
        var bancoActual:string="";
        for (let i = 0; i < this.daotredis.length; i++) {
          console.log(this.daotredis[i]['_id']);
          console.log(this.daotredis[i]['contador']);
          this.doughnutChartLabels.push( this.daotredis[i]['_id']);
          this.doughnutChartData.push( this.daotredis[i]['contador']);
        }
      },
      err => console.error(err)
    );
  }
  
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
