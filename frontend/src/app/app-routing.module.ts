import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { GastosComponent } from './components/gastos/gastos.component';


const routes: Routes = [
  {
    path : 'navbar',
    component : NavbarComponent
  },
  {
    path : 'registro',
    component : RegistroComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'gastos',
    component : GastosComponent
  },
  {
    path : '**',
    redirectTo: 'home'
  }  //Se pone al final de todo. Si la ruta no coincide redirige al home en este caso.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
