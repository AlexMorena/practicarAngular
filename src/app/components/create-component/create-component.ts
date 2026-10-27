import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamento } from '../../services/service-departamento';
import { Router } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent {
  @ViewChild("cajaid") cajaIdRef!: ElementRef;
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidadRef!: ElementRef;

  constructor(
    private _service: ServiceDepartamento,
    private _router: Router
  ){}

  insertarDepartamento():void{
    let num = parseInt(this.cajaIdRef.nativeElement.value);
    let nombre = this.cajaNombreRef.nativeElement.value;
    let localidad = this.cajaLocalidadRef.nativeElement.value;

    let nuevoDepartamento = new Departamento(num, nombre, localidad);

    this._service.insertarDepartamento(nuevoDepartamento).subscribe(() => {
      console.log("Departamento insertado correctamente");
    })
    this._router.navigate(["/departamentos"]);
  }
}
