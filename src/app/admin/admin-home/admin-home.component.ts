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
    private usuarioService: UsuarioService,
    //private cookiesService: CookieService
  ) {}

  ngOnInit(): void {
    //this.idAdmin = this.ruta.snapshot.params['idAdmin'];
    this.mostrarUsuariosAprobados();
  }

  //Servicio para obtener usuarios desaprobados
  mostrarUsuariosAprobados(): void {
    this.usuarioService.obtenerUsuariosAprobados().subscribe((response) => {
      this.usuarios = response; // Asigna la propiedad usuariosDesaprobados a usuarios

      //console.log(response);
      console.log(this.usuarios);
    });
  }

  //Metodo que aprueba usuarios
  eliminarUsuario(id: any): void {
    this.usuarioService.eliminarUsuario(id).subscribe(() => {
      console.log('Usuario (ID) enviado a Node: ', id);

      // Actualizar la lista de usuarios desaprobados después de aceptar uno
      this.mostrarUsuariosAprobados();
    });
  }

  /**
   * Listar los nuevos registros de Usuarios
   */
}
