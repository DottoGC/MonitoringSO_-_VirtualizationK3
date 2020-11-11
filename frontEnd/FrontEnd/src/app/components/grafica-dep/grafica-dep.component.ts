import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { coronaDatos } from 'src/app/models/coronaDatos';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ServicioService } from '../../services/servicio.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-dep',
  templateUrl: './grafica-dep.component.html',
  styleUrls: ['./grafica-dep.component.css']
})
export class GraficaDepComponent implements OnInit {

  constructor(private servio: ServicioService) { }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Departamentos'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[] = [];
  saludo="";
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
          this.barChartData.push({ data: this.daotredis[i]['contador'] , label: this.daotredis[i]['_id'] });
        }
        console.log(this.barChartData[0].data);
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
  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = this.barChartData[0].data;
    console.log(this.barChartData[0].data);
  }
}
