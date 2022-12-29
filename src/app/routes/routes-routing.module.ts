import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardapioComponent } from '../pages/cardapio/cardapio.component';
import { CervejasComponent } from '../pages/cervejas/cervejas.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CardapioComponent
  },
  {
    path:'cardapio',
    component: CardapioComponent
  },
  {
    path:'cervejas',
    component: CervejasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
