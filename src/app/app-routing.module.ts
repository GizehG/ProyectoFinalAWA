import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoHeroesComponent } from './components/listado-heroes/listado-heroes.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'consultar', component: ListadoHeroesComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
