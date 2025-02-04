import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/principal/page/inicio/inicio.component';

const routes: Routes = [
{
  path:'', component:InicioComponent,
},
{
  path:"",loadChildren:()=>import('./modules/principal/page/page.module').then(m=>m.PagesModule)
},
{
  path:'',loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }