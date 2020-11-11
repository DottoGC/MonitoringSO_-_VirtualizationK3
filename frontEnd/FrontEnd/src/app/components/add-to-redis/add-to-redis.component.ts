import { Component, OnInit } from '@angular/core';
import { coronaDatos } from 'src/app/models/coronaDatos';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-add-to-redis',
  templateUrl: './add-to-redis.component.html',
  styleUrls: ['./add-to-redis.component.css']
})
export class AddToRedisComponent implements OnInit {

  constructor(private servio: ServicioService) { }

  nombre="";
  departamento="";
  edad=0;
  forma_contagio="";
  estado="";
  contagio:coronaDatos;
  ngOnInit(): void {
  }

  Insertar(){

    this.contagio=new coronaDatos();
    this.contagio={
      Nombre: this.nombre,
      Departamento: this.departamento,
      Edad:this.edad,
      Forma_contagio:this.forma_contagio,
      Estado:this.estado
    }
    this.servio.PostRequest(this.contagio).subscribe(
      res => {
        //this.saludo=res.saludo;
        console.log(res);
      },
      err => console.error(err)
    );
    
  }

}
