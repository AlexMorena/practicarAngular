import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamento } from '../../services/service-departamento';

@Component({
  selector: 'app-departamentos-component',
  standalone: false,
  styleUrl: './departamentos-component.css',
  templateUrl: './departamentos-component.html',
})
export class DepartamentosComponent implements OnInit{

  @ViewChild("selectdepartamento") selectDepartamento!: ElementRef;
  public departamentos!: Array<Departamento>
  public departamentoSeleccionado?: Departamento;

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

  buscarDepartamento(): void {
    let idDepartamento = this.selectDepartamento.nativeElement.value;

    this._service.cargarDepartamentoId(idDepartamento).subscribe((response) => {
      this.departamentoSeleccionado = response;
      this._cdr.detectChanges();
    })
  }

}
