import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-grafica-edades',
  templateUrl: './grafica-edades.component.html',
  styleUrls: ['./grafica-edades.component.css']
})
export class GraficaEdadesComponent implements OnInit {

  constructor(private servio: ServicioService) { }

  public doughnutChartLabels: Label[] = ['0-30','31-40','41-50','51-60','61-70','71-80','moyores a 80'];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  
  daotredis:object[]=[];

  ngOnInit(): void {
  }

  getData(){
    this.servio.getDatosEdades().subscribe(
      res => {
        //this.saludo=res.saludo;
        this.daotredis=res['datosFormRedis'];
        console.log(this.daotredis);
        console.log(res);
        var bancoActual:string="";
        this.doughnutChartData.push( this.daotredis['uno']);
        this.doughnutChartData.push( this.daotredis['dos']);
        this.doughnutChartData.push( this.daotredis['tres']);
        this.doughnutChartData.push( this.daotredis['cuatro']);
        this.doughnutChartData.push( this.daotredis['cinco']);
        this.doughnutChartData.push( this.daotredis['seis']);
        this.doughnutChartData.push( this.daotredis['siete']);
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
