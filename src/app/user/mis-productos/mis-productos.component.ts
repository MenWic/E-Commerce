import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.css']
})
export class MisProductosComponent {
  //private usuarioId: string = '';
  public productos: any[] = [];

  //Constructor
  constructor(
    private cookieService: CookieService,
    private usuarioService: UsuarioService,
  ){}

  ngOnInit(): void {
    //this.idAdmin = this.ruta.snapshot.params['idAdmin'];
    this.mostrarProductosDeUsuario();
  }

  //Servicio para obtener productos del Usuario
  mostrarProductosDeUsuario(): void {
    let id = this.cookieService.get('id');

    this.usuarioService.obtenerProductosDeUsuario(id).subscribe((response) => {
      this.productos = response.productos; // Asigna la propiedad usuariosDesaprobados a usuarios

      //console.log(response);
      console.log(this.productos);
    });
  }

}
