import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardapioComponent } from '../pages/cardapio/cardapio.component';
import { CervejasComponent } from '../pages/cervejas/cervejas.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path:'**',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
