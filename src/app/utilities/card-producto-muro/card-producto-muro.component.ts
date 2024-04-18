import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  ) {}

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
