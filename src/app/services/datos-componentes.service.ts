import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DatosComponentesService {

  constructor(private _http:HttpClient) { }

  getDatos() {
    return new Promise<Componente[]>(resolve=>{
      this._http.get<Componente[]>('../assets/datosComponentes.json').subscribe(resp =>{
        resolve(resp);
      });
    });
  }
}
