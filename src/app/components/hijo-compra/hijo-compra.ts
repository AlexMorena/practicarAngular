import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-hijo-compra',
  standalone: false,
  styleUrl: './hijo-compra.css',
  templateUrl: './hijo-compra.html',
})
export class HijoCompra {
  @Input() producto!: Producto;
  @Output() seleccionarProducto: EventEmitter<Producto> = new EventEmitter();
  @Output() sumarProducto: EventEmitter<Producto> = new EventEmitter();

  seleccionarProductoFavorito(): void{
    this.seleccionarProducto.emit(this.producto);
  }

  sumarProductos(): void {
    this.sumarProducto.emit(this.producto);
  }
}
