import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProducto } from '../interfaces/info-producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  detalle : InfoProducto = {};
  cargada = false;
  constructor(private http: HttpClient) {
    console.log("servicio inicializado");
    this.http.get('assets/Data/producto-details.json')
    .subscribe( (resp: InfoProducto) => {
      console.log(resp);
      this.cargada = true;
      this.detalle = resp;
    })
   }
}
