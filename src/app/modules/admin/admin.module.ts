import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

//angular
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//material
import { MatIconModule } from '@angular/material/icon';

//componente
import { TableComponent } from './table/table.component';
import { AdminComponent } from './page/admin/admin.component';



@NgModule({
  declarations: [
    TableComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    TableComponent,
    MatIconModule
  ]
})
export class AdminModule { }