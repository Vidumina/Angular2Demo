import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'my-employee',
  standalone: true,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  imports: [NgIf]
  


})

export class EmployeeComponent {
  columnSpan: number = 2;
  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  gender: string = 'Male';
  age: number = 20;
  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;




  }


}
