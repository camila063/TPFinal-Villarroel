import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {
    path:'inicio',component:InicioComponent
  },
  {
    path:'card',component:CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }