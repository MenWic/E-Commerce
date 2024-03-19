import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  private idAdmin: string = '';
  public usuarios: any[] = [];
  
  //Constructor
  constructor(
    private ruta: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    private cookiesService: CookieService
  ) {}

  ngOnInit(): void {
    //this.idAdmin = this.ruta.snapshot.params['idAdmin'];
    //this.mostrarUsuarios();
  }

  /**
   * Listar los nuevos registros de Usuarios
   */
  /* public mostrarUsuarios(){
    let admin = this.cookiesService.get('usuario');
    this.usuarioService.mostrarUsuarios(this.idAdmin).subscribe((usuarios: any) => {
        console.log(usuarios);
        this.usuarios = usuarios;
    });
  }

  public toUsuarios(){
    this.router.navigate([`/adminMenu/usuarios`]);
  }

  public toPublicaciones(){
    this.router.navigate([`/adminMenu/publicaciones`]);
  }

  public toReportes() {
    this.router.navigate([`/adminMenu/reportes`]);

  }

  public toCrearAdmin() {
    this.router.navigate([`/adminMenu/crearAdmin`]); //enviamos al formulario de creacion de usuario
  }
  
  /*
   * public editarPerfil() {}
  */

}
