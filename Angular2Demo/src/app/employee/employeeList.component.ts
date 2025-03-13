import { Component,OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { UserPreferencesService } from '../employee/userPreferences.service';


@Component({
  selector: 'list-employee',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css'],
  standalone: false

  
})



export class EmployeeListComponent implements OnInit {

  employees: IEmployee[]=[];

  slectedEmployeeCountRadioButton: string = 'All';
  isLoading: boolean = true;
  statusMessage: string = 'Loading data. Please wait...';
  


  constructor(private _employeeService: EmployeeService, private _userPreferencesService: UserPreferencesService) {

  }
  
  get colour(): string {
    return this._userPreferencesService.colourPreference;
  }

  set colour(value: string) {
    this._userPreferencesService.colourPreference = value;
  }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe({
      next: (employeeData) => {
        this.employees = employeeData,
          this.isLoading = false;

      },
      error: (error) => {
        console.error(error);
        this.statusMessage = 'Problem with the service. Please try again later.';
      }
    });
  }

  
  getTotalEmployeesCount(): number {
   return this.employees.length;
  }
  getTotalMaleEmployeesCount(): number {
    return this.employees.filter(e=>e.gender==="Male").length;
  }
  getTotalFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Female").length;
  }


  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.slectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }

}
