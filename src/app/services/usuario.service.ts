import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = 'http://localhost:3000/usuario'; //Ruta a la que se envian las peticiones HTTP (API-BackEnd)

  //Constructor
  constructor(private http: HttpClient) { }

  //Peticiones
  public login(usuario: any): Observable<any> {
    return this.http.post(`${this.url}/login`, usuario);
  }

  public mostrarUsuarios(usuario: any): Observable<any> {
    return this.http.post(`${this.url}/mostrarUsuarios`, usuario);
  }

  public crearUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.url}/crearUsuario`, usuario);
  }

  public editarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.url}/editarUsuario`, usuario);
  }
}
