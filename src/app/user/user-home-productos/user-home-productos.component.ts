import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-user-home-productos',
  templateUrl: './user-home-productos.component.html',
  styleUrls: ['./user-home-productos.component.css']
})
export class UserHomeProductosComponent {
  public productos: any[] = [];

  //Constructor
  constructor(
    private cookieService: CookieService,
    private productoService: ProductoService,
  ){}

  ngOnInit() {
    this.mostrarMuroProductos();
  }

  //Metodo que trae los productos
  mostrarMuroProductos(): void {
    let id = this.cookieService.get('id');

    //AQUI vamos
    this.productoService.obtenerMuroProductosDeUsuario(id).subscribe((response) => {
      this.productos = response.productos; // Asigna la propiedad usuariosDesaprobados a usuarios

      //console.log(response);
      console.log(this.productos);
    });
    
  }

}
