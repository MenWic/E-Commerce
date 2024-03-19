import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email!: string;
  public password!: string;

  public banderaError: boolean = false;

  //COnstructor
  constructor(
    private usuariosService: UsuarioService,
    private router: Router,
    private cookieService:CookieService
  ) {}

  //Metodo principal
  public login() {
    this.banderaError = false;

    //Objeto
    let usuario = new Object({
      email: this.email,
      password: this.password,
    });
    //Servicio de loggeo, que reaiza el Servicio mediante peticiones a la API
    this.usuariosService.login(usuario).subscribe((respuesta: any) => {
      console.log(respuesta);
      if (respuesta === null) {
        this.banderaError = true;
        return;
      }
      if (respuesta.respuesta === false) {
        this.banderaError = true;
        return;
      }
      this.cookieService.set("usuario", respuesta.usuarioEncontrado.email);
      this.cookieService.set("rol", respuesta.usuarioEncontrado.rol);

      this.redirect(respuesta); 
    });
  }

  //Redirige al usuarioEncontrado a su ruta adecuada (segun su rol)
  private redirect(usuario: any) {
    console.log(usuario);

    switch (usuario.usuarioEncontrado.rol) {
      case 'Administrador':
        console.log('Inicio como Admin');
        this.router.navigate(['/adminMenu/home']);
        break;
      case 'Usuario':
        console.log('entro como Usuario');
        this.router.navigate(['/userMenu/home']);
        break;
    }
  }

}
