import { ChangeDetectorRef, Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-padre-compra',
  standalone: false,
  styleUrl: './padre-compra.css',
  templateUrl: './padre-compra.html',
})
export class PadreCompra {
  public productos: Array<Producto>;
  public favorito!: Producto;
  public sumaTotal: number;

  constructor(private _cdr: ChangeDetectorRef){
    this.productos = [
      new Producto("Bote",10),
      new Producto("Alfombra",5),
      new Producto("Aspiradora",30)
    ];
    this.sumaTotal = 0;
  }

  seleccionarProducto(favorito: Producto){
    this.favorito = favorito
    this._cdr.detectChanges();
  }

  sumarTotal(favorito: Producto){
    this.sumaTotal += favorito.precio;
  }
}
