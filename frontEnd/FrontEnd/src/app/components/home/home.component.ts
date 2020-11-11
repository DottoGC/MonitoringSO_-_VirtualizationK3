import { Component, OnInit } from '@angular/core';
import { coronaDatos } from 'src/app/models/coronaDatos';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private servio: ServicioService) { }

  saludo="";
  datosmongo:coronaDatos[];
  
  daotredis:coronaDatos={
    Nombre:'',
    Departamento:'',
    Edad:0,
    Forma_contagio:'',
    Estado:''

  };
  ngOnInit(): void {
  }

  getData(){
    this.servio.getSaludo().subscribe(
      res => {
        //this.saludo=res.saludo;
        this.datosmongo=res['datos'];
        this.daotredis=res['datosFormRedis'];
        console.log(this.datosmongo);
        console.log(this.daotredis);
        console.log(res);
      },
      err => console.error(err)
    );
  }//*/
}
