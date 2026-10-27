import { Component } from '@angular/core';
import { Videojuego } from '../../models/videojuegos';

@Component({
  selector: 'app-padre-votacion',
  standalone: false,
  styleUrl: './padre-votacion.css',
  templateUrl: './padre-votacion.html',
})
export class PadreVotacion {
  public videojuegos: Array<Videojuego>
  public favorito!: Videojuego;

  constructor() {
    this.videojuegos = [
      new Videojuego("Gta7", "Accion", 100),
      new Videojuego("Gta8", "Accion", 100)
    ];
  }

  seleccionarJuegoFavorito(juego: Videojuego): void {
    this.favorito = juego;
  }
}
