import { ChangeDetectorRef, Component } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-json',
  standalone: false,
  styleUrl: './comics-json.css',
  templateUrl: './comics-json.html',
})
export class ComicsJson {
  public comics: Array<Comic>

  constructor(private _cdr: ChangeDetectorRef){
    this.comics = [];
  }

  cargarComics(): void {
    let path = "./assets/comics.json";

    fetch(path)
    .then(response => response.json())
    .then((data: any[]) => {
      for(let elem of data){
        let comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
        this.comics.push(comic);
      }
      this._cdr.detectChanges();
    })
  }
}
