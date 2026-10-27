import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamento } from '../../services/service-departamento';

@Component({
  selector: 'app-departamentos-multiples-component',
  standalone: false,
  styleUrl: './departamentos-multiples-component.css',
  templateUrl: './departamentos-multiples-component.html',
})
export class DepartamentosMultiplesComponent implements OnInit{
  @ViewChild("selectmultiple") selectMultiple!: ElementRef;

  public departamentos!: Array<Departamento>;

  public departamentosSeleccionados: Array<Departamento> = [];

  constructor(
    private _service: ServiceDepartamento,
    private _cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this._service.cargarDepartamentos().subscribe((response) => {
      this.departamentos = response;
      this._cdr.detectChanges();
    })
  }

  buscarVarios(): void {
    // 1. Vaciamos el array por si el usuario había buscado algo antes
    this.departamentosSeleccionados = [];

    // 2. Obtenemos todas las opciones que el usuario ha seleccionado (es una colección HTML)
    let opcionesSeleccionadas = this.selectMultiple.nativeElement.selectedOptions;

    // 3. Recorremos esas opciones una a una
    for (let i = 0; i < opcionesSeleccionadas.length; i++) {
      // Sacamos el ID de cada opción
      let idDepartamento = opcionesSeleccionadas[i].value;

      // 4. Hacemos la petición a la API por cada ID
      this._service.cargarDepartamentoId(idDepartamento).subscribe((response) => {
        // En vez de igualar, lo "empujamos" (.push) a nuestro array
        this.departamentosSeleccionados.push(response);
        
        // Forzamos el repintado para que vayan apareciendo las tarjetas
        this._cdr.detectChanges();
      });
    }
  }
}
