import { Component } from '@angular/core';
import { Videojuego } from '../../models/videojuegos';

@Component({
  selector: 'app-videojuego-component',
  standalone: false,
  styleUrl: './videojuego-component.css',
  templateUrl: './videojuego-component.html',
})
export class VideojuegoComponent {
  public juegoFavorito: Videojuego;

  constructor() {
    this.juegoFavorito = new Videojuego("Gta 6", "Accion",100);
  }
}
