import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable } from 'rxjs';
import { coronaDatos } from '../models/coronaDatos';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const address2 = 'http://backend-srv:3000/'; //direccion donde estara el backend

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  dataSeleccionada:coronaDatos;

  constructor(private http: HttpClient) { }

  getSaludo(): Observable<any>{
    return this.http.get<any>(address2+'saludo',httpOptions);
  }

  PostRequest(texto:coronaDatos): Observable<any> {
    return this.http.post<any>(address2 + 'addData', texto , httpOptions);
  }

  getDatosDep(){
    return this.http.get(address2 + 'departamentos');
  }

  getDatosEdades(){
    return this.http.get(address2 + 'edades');
  }
}
