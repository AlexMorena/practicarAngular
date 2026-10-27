import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Departamento } from "../models/departamento";

@Injectable()

export class ServiceDepartamento{
    constructor(
        private _http: HttpClient
    ){}

    cargarDepartamentos(): Observable<Departamento[]>{
        let request = "api/departamentos";
        let url = environment.urlApiDepartamentos;
        return this._http.get<Departamento[]>(url + request);
    }

    cargarDepartamentoId(id: number): Observable<Departamento> {
        let request = "api/departamentos/" + id;
        let url = environment.urlApiDepartamentos;
        return this._http.get<Departamento>(url + request);
    }

    insertarDepartamento(departamento: Departamento): Observable<any>{
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders().set("Content-Type", "application/json");
        let request = "api/departamentos";
        let url = environment.urlApiDepartamentos;

        return this._http.post(url + request, json, {headers: header});
    }
}