import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { VideojuegoComponent } from './components/videojuego-component/videojuego-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { PadreVotacion } from './components/padre-votacion/padre-votacion';
import { PadreCompra } from './components/padre-compra/padre-compra';
import { ComicsSimple } from './components/comics-simple/comics-simple';
import { ComicsJson } from './components/comics-json/comics-json';
import { ComicsExcel } from './components/comics-excel/comics-excel';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { CreateComponent } from './components/create-component/create-component';
import { DepartamentosMultiplesComponent } from './components/departamentos-multiples-component/departamentos-multiples-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "videojuegos", component: VideojuegoComponent },
  { path: "numeros", component: PadreNumerosComponent },
  { path: "favoritos", component: PadreVotacion },
  { path: "compras", component: PadreCompra },
  { path: "comicssimple", component: ComicsSimple },
  { path: "comicsjson", component: ComicsJson },
  { path: "comicsexcel", component: ComicsExcel },
  { path: "departamentos", component: DepartamentosComponent },
  { path: "create", component: CreateComponent },
  { path: "departamentosmultiple", component: DepartamentosMultiplesComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
