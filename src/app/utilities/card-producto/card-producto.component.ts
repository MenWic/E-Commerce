import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {
  estadoAprobacion: String = '';

  @Input() producto: any;
  @Output() actualizar = new EventEmitter<any>();

  
  //Contructor
  constructor(
    private productoService: ProductoService,
  ) {}

  ngOnInit(): void {
    this.estadoAprobado();
  }

  //Metodo que aprueba usuarios
  eliminarProducto(): void {
    this.productoService.eliminarProducto(this.producto.id).subscribe(() => {
      console.log('Producto (ID) enviado a Node: ', this.producto.id);
    });

    //Recargar la pagina
    this.actualizar.emit();
  }

  //Metodo que indica si el producto esta aprobado o no el producto 
  estadoAprobado(): void {
    if (this.producto.aprobado === true) {
      this.estadoAprobacion = 'Aprobado';
    } else {
      this.estadoAprobacion = 'Pendiente';
    }
  }
}
