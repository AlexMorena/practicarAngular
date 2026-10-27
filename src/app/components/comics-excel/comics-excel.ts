import { ChangeDetectorRef, Component } from '@angular/core';
import { Comic } from '../../models/comic';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-comics-excel',
  standalone: false,
  styleUrl: './comics-excel.css',
  templateUrl: './comics-excel.html',
})
export class ComicsExcel {
  public comics: Array<Comic>;
  constructor(private _cdr: ChangeDetectorRef){
    this.comics = [];
  }

  cargarExcel(): void {
    let path = "./assets/comics.xlsx";

    fetch(path)
    .then(response => response.arrayBuffer())
    .then(buffer => {
      const libroExcel = XLSX.read(buffer, {type: 'array'});
      const nombrePrimeraHoja = libroExcel.SheetNames[0];
      const hoja = libroExcel.Sheets[nombrePrimeraHoja];

      const data: any[] = XLSX.utils.sheet_to_json(hoja);

      for(let elem of data){
        let comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
        this.comics.push(comic);
      }
      this._cdr.detectChanges();
    })
  }

}
