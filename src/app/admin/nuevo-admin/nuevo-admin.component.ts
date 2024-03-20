import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormsModule } from '@angular/forms';
import { RedireccionarService } from 'src/app/services/redireccionar.service';

@Component({
  selector: 'app-nuevo-admin',
  templateUrl: './nuevo-admin.component.html',
  styleUrls: ['./nuevo-admin.component.css'],
})
export class NuevoAdminComponent {
  public username: string = '';
  public rol: string = 'Administrador';
  public email: string = '';
  public password: string = '';

  //Constructor
  constructor(
    private usuarioService: UsuarioService,
    private navegarService: RedireccionarService
  ) {}

  //Funcion
  public crearAdmin() {
    let employee = new Object({
      username: this.username,
      rol: this.rol,
      email: this.email,
      password: this.password,
    });

    this.usuarioService.crearUsuario(employee).subscribe((respuesta: any) => {
      //Evaluamos si el objeto respuesta es null
      if (respuesta === null || respuesta.respuesta === false) {
        alert('No se creo el Admin');
        return;
      }
      alert('Se creo el Admin');
      this.navegarService.redireccionar('home/raiz');
    });
  }
}
