import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable } from 'rxjs';
import { coronaDatos } from '../models/coronaDatos';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const address2 = '/api/'; //direccion donde estara el backend

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  dataSeleccionada:coronaDatos;

  constructor(private http: HttpClient) { }

  getSaludo(): Observable<any>{
    return this.http.get<any>(address2 + 'saludo');
  }

  PostRequest(texto:coronaDatos): Observable<any> {
    return this.http.post<any>(address2 + 'addData', texto , httpOptions);
  }

  getDatosDep(): Observable<any>{
    return this.http.get<any>(address2 + 'departamentos');
  }

  getDatosEdades(): Observable<any>{
    return this.http.get<any>(address2 + 'edades');
  }

  getPrueba(): Observable<any>{
    return this.http.get<any>(address2 + 'prueba');
  }
}
