import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  //Constructor
  constructor(
    private router: Router, 
    private cookieService: CookieService
    ) {}

    //metodo
  public logout() {
    this.cookieService.delete('usuario');
    this.cookieService.delete('rol');
    this.router.navigate(['login']);
  }
}
