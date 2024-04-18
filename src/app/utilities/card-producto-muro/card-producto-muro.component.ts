import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-card-producto-muro',
  templateUrl: './card-producto-muro.component.html',
  styleUrls: ['./card-producto-muro.component.css']
})
export class CardProductoMuroComponent {

  @Input() producto: any;
  @Output() actualizar = new EventEmitter<any>();

  //Contructor
  constructor(
    private productoService: ProductoService,
    private cookieService: CookieService,
  ) {}

  //Metodo para comprar producto
  comprarProducto(): void {
    this.productoService.comprarProducto(this.producto.id, this.cookieService.get('id')).subscribe(() => {
      //console.log('Producto (ID) enviado a Node: ', producto.id);

      // Actualizar la lista de usuarios desaprobados después de aceptar uno
      //this.mostrarProductosDesaprobados();
    });
  }

  //Metodo para reportar producto
  reportarProducto(): void {
    this.productoService.reportarProducto(this.producto.id).subscribe(() => {
      console.log('Producto (ID) enviado a Node: ', this.producto.id);
    });

    // Actualizar pagina
    this.actualizar.emit();
  }

  //Metodo para comprar producto
  //comprarProducto()
}
