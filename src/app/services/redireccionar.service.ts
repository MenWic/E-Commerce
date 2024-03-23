import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class RedireccionarService {
  //Constructor
  constructor(private router: Router, private coockieService: CookieService) {}

  //Funcion
  public redireccionar(ruta: string) {
    let rol = this.coockieService.get('rol');
    switch (rol) {
      case 'Administrador':
        this.router.navigate([`/adminMenu/${ruta}`]);
        console.log("Redireccion exitosa! El usuario actual es Admin");
        break;
      case 'Usuario':
        //console.log('entro');
        this.router.navigate([`/userMenu/${ruta}`]);
        console.log("Redireccion exitosa! El usuario actual es User");
        break;
    }
  }
}
