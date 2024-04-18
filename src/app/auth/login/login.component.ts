import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public email!: string;
  public password!: string;

  public banderaError: boolean = false;

  //COnstructor
  constructor(
    private usuariosService: UsuarioService,
    private router: Router,
    private cookieService: CookieService
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
      console.log(respuesta); //imprimir el objeto usuario
      if (respuesta === null || respuesta.respuesta === false) {
        this.banderaError = true;
        return;
      }

      this.cookieService.set('usuario', respuesta.usuarioEncontrado.email);
      this.cookieService.set('rol', respuesta.usuarioEncontrado.rol);
      this.cookieService.set('id', respuesta.usuarioEncontrado.id);
      //this.cookieService.set('aprobado', respuesta.aprobado);

      //console.log(usuario); //Imprimir el obj usuario/respuesta
      //this.verifyAprobation(respuesta);
      this.redirect(respuesta);
    });
  }

  //Verifica si el atributo aporbado del usuario es true
  /* private verifyAprobation(usuario: any){
    if (usuario.usuarioEncontrado.aprobado == true) {
      this.redirect(respuesta);
    } else {
      this.redirect(respuesta);
      
    }
  } */

  //Redirige al usuarioEncontrado a su ruta adecuada (segun su rol)
  private redirect(usuario: any) {
    if (usuario.usuarioEncontrado.aprobado === true) {
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
    } else {
      this.banderaError = true;
      console.log('El usuario no esta aprobado aun');
    }
  }
}
