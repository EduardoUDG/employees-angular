import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './route.routing';
import { EmployeePageComponent } from './employees/pages/employee-page/employee-page.component';

const routes: Routes = [
  {
    path: AppRoutes.EMPLOYEES,
    component: EmployeePageComponent,
  },
  {
    path: AppRoutes.ANY,
    redirectTo: AppRoutes.EMPLOYEES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
