import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-comics-simple',
  standalone: false,
  styleUrl: './comics-simple.css',
  templateUrl: './comics-simple.html',
})
export class ComicsSimple {
  public contenidoTxt: string;

  constructor(private _cdr: ChangeDetectorRef){
    this.contenidoTxt = "";
  }


  cargarTxt():void{
    let path = "./assets/Comics_Angular.txt";

    fetch(path)
    .then(response => response.text())
    .then(data => {
      this.contenidoTxt = data;
      this._cdr.detectChanges();
    })
  }
}
