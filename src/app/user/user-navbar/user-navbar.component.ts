import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {
  //Constructor
  constructor(
    private router: Router, 
    private cookieService: CookieService
    ) {}

   /*  //Metodo que redirije a otro Componente
    public redireccionar(route: string) {
      this.router.navigate([route]);
    } */

    //metodo
  public logout() {
    this.cookieService.delete('usuario');
    this.cookieService.delete('rol');
    this.router.navigate(['login']);
  }
}
