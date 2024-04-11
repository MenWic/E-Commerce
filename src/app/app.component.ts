import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-Commerce-Front';

  //Constructor
  constructor(private router: Router) {}

  //Metodo al iniciar
  ngOnInit(): void {
    this.router.navigate(['/adminMenu/home']);
    //this.router.navigate(['/login']);
  }
}
