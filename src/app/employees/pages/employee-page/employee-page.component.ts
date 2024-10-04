import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { EmployeesService } from '../../services/employees.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit {

  public employees: Employee[] = [];

  public employeeForm: FormGroup = this._fb.group({
    name:         ['Joe',         Validators.required ],
    lastName:     ['Dhoe',        Validators.required ],
    phoneNumber:  ['3311223344',  Validators.required ],
  });

  constructor( 
    private employeesService:EmployeesService,
    private _fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.employeesService.findAll().subscribe({
      next: ( employees ) => {
        this.employees = [ ...employees ];
      }
    });
  }

  onSubmit():void {
    
    if ( this.employeeForm.invalid ) return;
    
    const employee:Employee = { ...this.employeeForm.value };

    this.employeesService.save( employee );

    this.employeeForm.reset();

    this.ngOnInit()
  }

  get isInvalidForm(): boolean {
    return this.employeeForm.invalid;
  }

}
