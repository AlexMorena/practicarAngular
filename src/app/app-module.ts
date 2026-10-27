import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { VideojuegoComponent } from './components/videojuego-component/videojuego-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { HijoNumerosComponent } from './components/hijo-numeros-component/hijo-numeros-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { PadreVotacion } from './components/padre-votacion/padre-votacion';
import { HijoVotacion } from './components/hijo-votacion/hijo-votacion';
import { HijoCompra } from './components/hijo-compra/hijo-compra';
import { PadreCompra } from './components/padre-compra/padre-compra';
import { ComicsSimple } from './components/comics-simple/comics-simple';
import { ComicsJson } from './components/comics-json/comics-json';
import { ComicsExcel } from './components/comics-excel/comics-excel';
import { provideHttpClient } from '@angular/common/http';
import { ServiceDepartamento } from './services/service-departamento';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './components/create-component/create-component';
import { DepartamentosMultiplesComponent } from './components/departamentos-multiples-component/departamentos-multiples-component';

@NgModule({
  declarations: [
    App,
    VideojuegoComponent,
    PadreNumerosComponent,
    HijoNumerosComponent,
    MenuComponent,
    HomeComponent,
    NotFoundComponent,
    PadreVotacion,
    HijoVotacion,
    HijoCompra,
    PadreCompra,
    ComicsSimple,
    ComicsJson,
    ComicsExcel,
    DepartamentosComponent,
    CreateComponent,
    DepartamentosMultiplesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceDepartamento],
  bootstrap: [App],
})
export class AppModule {}
