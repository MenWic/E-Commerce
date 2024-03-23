import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = 'http://localhost:3000/usuario'; //Ruta a la que se envian las peticiones HTTP (API-BackEnd)

  //Constructor
  constructor(private http: HttpClient) { }

  //Peticiones
  //Login
  public login(usuario: any): Observable<any> {
    console.log(usuario);
    return this.http.post(`${this.url}/login`, usuario);
  }

  //Signup (Usuarios) y CrearAdmin (Admin)
  public crearUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.url}/crearUsuario`, usuario);
  }

  //Usuarios aprobados (Admin)
  public obtenerUsuariosAprobados(): Observable<any> {
    return this.http.get(`${this.url}/usuariosAprobados`)
    .pipe(map((response: any) => response.usuariosAprobados));
  }

  public eliminarUsuario(id: number): Observable<any> {
    return this.http.post(`${this.url}/eliminarUsuario`, {id} );
  }

  //Usuarios por aprobar (Admin)
  public obtenerUsuariosDesaprobados(/*usuario: any*/): Observable<any> {
    return this.http.get(`${this.url}/usuariosDesaprobados`)
    .pipe(map((response: any) => response.usuariosDesaprobados));
  }

  //AQUI ESTA EL ERROR EN LA 35
  public aprobarUsuario(id: number): Observable<any> {
    return this.http.post(`${this.url}/aprobarUsuario`, {id} );
  }

  //**************************************** */
  public editarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.url}/editarUsuario`, usuario);
  }
}
