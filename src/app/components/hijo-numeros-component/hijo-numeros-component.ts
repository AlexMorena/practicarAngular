import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-numeros-component',
  standalone: false,
  styleUrl: './hijo-numeros-component.css',
  templateUrl: './hijo-numeros-component.html',
})
export class HijoNumerosComponent {
  @Input() numero!: number;
  @Output() sumarNumerosParent: EventEmitter<any> = new EventEmitter();


  sumarNumero(): void{
    this.sumarNumerosParent.emit(this.numero);
  }
}
