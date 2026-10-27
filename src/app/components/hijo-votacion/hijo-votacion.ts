import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Videojuego } from '../../models/videojuegos';

@Component({
  selector: 'app-hijo-votacion',
  standalone: false,
  styleUrl: './hijo-votacion.css',
  templateUrl: './hijo-votacion.html',
})
export class HijoVotacion {
  @Input() juego!: Videojuego;
  @Output() seleccionarJuego: EventEmitter<Videojuego> = new EventEmitter();

  seleccionarJuegoFavorito(): void {
    this.seleccionarJuego.emit(this.juego);
  }
}
