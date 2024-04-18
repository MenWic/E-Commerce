import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-mostrar-publicaciones',
  templateUrl: './mostrar-publicaciones.component.html',
  styleUrls: ['./mostrar-publicaciones.component.css']
})
export class MostrarPublicacionesComponent {

  public productos!: any[];

  //Contructor
  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.mostrarProductosDesaprobados();
  }

  //Servicio para obtener productos pendientes/desaprobados
  mostrarProductosDesaprobados(): void {
    this.productoService.obtenerProductosDesaprobados().subscribe((response) => {
      this.productos = response; // Asigna la propiedad usuariosDesaprobados a usuarios

      //console.log(response);
      console.log(this.productos);
    });
  }

  //Metodo que aprueba productos
  aceptarProducto(id: number): void {
    this.productoService.aprobarProducto(id).subscribe(() => {
      console.log('Usuario (ID) enviado a Node: ', id);

      // Actualizar la lista de usuarios desaprobados después de aceptar uno
      this.mostrarProductosDesaprobados();
    });
  }
  
  //Metodo que rechaza/elimina al producto aspirante
  rechazarProducto(id: number): void {
    this.productoService.eliminarProducto(id).subscribe(() => {
      console.log('Usuario (ID) enviado a Node: ', id)

      // Actualizar la lista de productos desaprobados después de rechazar uno
      this.mostrarProductosDesaprobados();
    });
  }
}
