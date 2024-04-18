import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url: string = 'http://localhost:3000/producto'; //Ruta a la que se envian las peticiones HTTP (API-BackEnd)

  constructor(private http: HttpClient) { }

  //Peticiones
  //Creacion de Producto (Vendedor)
  public crearProducto(producto: any): Observable<any> {
    return this.http.post(`${this.url}/crearProducto`, producto);
  }

  //--- PEND ---
  
  //Produtos por aprobar (Admin)
  public obtenerProductosDesaprobados(/*usuario: any*/): Observable<any> {
    return this.http.get(`${this.url}/productosDesaprobados`)
    .pipe(map((response: any) => response.productosDesaprobados));
  }

  //Aprobar Producto (Admin)
  public aprobarProducto(id: number): Observable<any> {
    return this.http.post(`${this.url}/aprobarProducto`, {id} );
  }
}
