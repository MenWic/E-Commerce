import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProductoService } from 'src/app/services/producto.service';
import { RedireccionarService } from 'src/app/services/redireccionar.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {

  public titulo: string = '';
  public descripcion: string = '';
  public precio: String = '';
  public estado: string = '';
  public categoria: string = 'Electronica';
  public aprobado: boolean = false; //El producto no es aprobado automaticamente

  //Constructor
  constructor(
    private productoService: ProductoService,
    private cookieService: CookieService,
    private redireccionarService: RedireccionarService
  ) {}

  //Funcion
  public crearProducto() {
    let producto = new Object({
      titulo: this.titulo,
      descripcion: this.descripcion,
      precio: this.precio,
      estado: this.estado,
      categoria: this.categoria,
      aprobado: this.aprobado, 
      UsuarioId: this.cookieService.get('id')
    });

    console.log(producto); //Debugg


    this.productoService.crearProducto(producto).subscribe((respuesta: any) => {
      //Imprimir la respuesta
      console.log(respuesta);

      //Evaluamos si el objeto respuesta es null
      if (respuesta === null || respuesta.respuesta === false) {
        alert('No se creo el Producto');
        return;
      }
      alert('Se creo el Producto');
      //this.router.navigate(['/adminMenu/home']);
      this.redireccionarService.redireccionar('home');
    });
  }
}
