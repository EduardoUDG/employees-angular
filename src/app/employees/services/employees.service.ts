import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { Observable, refCount } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private _employees: Employee[] = [];
  private _employeeKey: string = '_employee-key';

  constructor() {
    this.loadEmployees();
  }

  save( employee: Employee ) {
    this._employees.push({...employee });
    this._employees.sort((a, b) => {

      const nameA = a.name.toUpperCase(); 
      const nameB = b.name.toUpperCase(); 

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      return 0;
    });

    this.saveLocalStorage();
  }

  saveLocalStorage():void {
    localStorage.setItem( this._employeeKey, JSON.stringify( this._employees ) );
  }

  loadEmployees():void {
    const data = localStorage.getItem( this._employeeKey );

    if ( !data ) return;

    this._employees = JSON.parse( data );
  }

  findAll(): Observable<Employee[]>  {
    return new Observable( (suscribe) => {
      suscribe.next( this._employees );
    });  
  }  
  
}
