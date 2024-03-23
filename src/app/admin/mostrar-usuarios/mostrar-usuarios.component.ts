import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.css'],
})
export class MostrarUsuariosComponent implements OnInit {
  public usuarios!: any[];

  //Contructor
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.mostrarUsuariosDesaprobados();
  }

  //Servicio para obtener usuarios desaprobados
  mostrarUsuariosDesaprobados(): void {
    //this.usuarioService.obtenerUsuariosDesaprobados().subscribe(usuarios => this.usuarios = usuarios);
    this.usuarioService.obtenerUsuariosDesaprobados().subscribe((response) => {
      this.usuarios = response; // Asigna la propiedad usuariosDesaprobados a usuarios

      //console.log(response);
      console.log(this.usuarios);
    });
  }

  //Metodo que aprueba usuarios
  aceptarUsuario(id: number): void {
    this.usuarioService.aprobarUsuario(id).subscribe(() => {
      console.log('Usuario (ID) enviado a Node: ', id);

      // Actualizar la lista de usuarios desaprobados después de aceptar uno
      this.mostrarUsuariosDesaprobados();
    });
  }
}
