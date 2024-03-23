import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  public username!: string;
  public email!: string;
  public password!: string;

  public rol: string = "Usuario";
  public aprobado: boolean = false;
  

  public banderaError: boolean = false;

  //Constructor
  constructor(
    private usuariosService: UsuarioService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  //Metodo principal
  public signup() {
    this.banderaError = false;

    //Objeto
    let usuario = new Object({
      username: this.username,
      email: this.email,
      password: this.password,
      
      rol: this.rol,
      aprobado: this.aprobado
    });

    //Servicio de loggeo, que reaiza el Servicio mediante peticiones a la API
    this.usuariosService.crearUsuario(usuario).subscribe((respuesta: any) => {
      console.log(respuesta); //imprimir el objeto usuario
      if (respuesta === null || respuesta.respuesta === false) {
        this.banderaError = true;
        return;
      }

      this.redirect();
    });
  }

  //Redirige al login
  private redirect() {
    this.router.navigate(['login']);
  }
}
