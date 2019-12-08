import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { GastosComponent } from './components/partials/gastos/gastos.component';
import { HomeComponent } from './components/home/home.component';
import { IngresosComponent } from './components/partials/ingresos/ingresos.component';
import { ModalIngresoComponent } from './modals/ingreso/modal-ingreso/modal-ingreso.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    NavbarComponent,
    LoginComponent,
    GastosComponent,
    HomeComponent,
    IngresosComponent,
    ModalIngresoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
