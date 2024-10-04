import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';


@NgModule({
  declarations: [
    EmployeePageComponent,
    EmployeeTableComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class EmployeesModule { }
