import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { IEmployee } from './employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { catchError, retry, retryWhen, delay, scan } from 'rxjs/operators';
import { Subscription } from 'rxjs';




@Component({
  selector: 'my-employee',
  standalone: true,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  imports: [NgIf]
  


})

 

export class EmployeeComponent implements OnInit {
  employee: IEmployee | undefined;
  isLoading: boolean = true;

  statusMessage: string = 'Loading data. Please wait...';
  subscription: Subscription | null=null;

  constructor(private _employeeService: EmployeeService, private _activatedRoute: ActivatedRoute, private _router: Router) {


  }
  onCancelButtClick(): void{
    this.statusMessage = 'Request Cancelled';
    this.subscription?.unsubscribe();

  }



  ngOnInit() {
    let empCode: string = this._activatedRoute.snapshot.params['code'];

    this.subscription =   this._employeeService.getEmployeeByCode(empCode).pipe(retryWhen(errors => errors.pipe(scan((retryCount,error) => {
      retryCount += 1;
      if (retryCount < 6) {
        this.statusMessage = 'Retrying.....Attempt #' + retryCount;
        return retryCount;


      }
      else {
        throw (error);
      }


    }, 0), delay(1000)))).subscribe({
      next: (employeeData) => {
        if (employeeData == null) {
          this.statusMessage = 'Employee with the specified Employee Code does not exist'
        }
        else {
          this.employee = employeeData

        }
        this.isLoading = false;

      },
      error: (error) => {
        console.error(error);
        this.statusMessage = 'Problem with the service. Please try again after sometime';
      }
    });
  }


  //ngOnInit() {
  //  let empCode: string = this._activatedRoute.snapshot.params['code'];

  //  this._employeeService.getEmployeeByCode(empCode)
  //    .then(
  //     (employeeData) => {
  //      if (employeeData == null) {
  //        this.statusMessage = 'Employee with the specified Employee Code does not exist'
  //      }
  //      else {
  //        this.employee = employeeData

  //      }
  //      this.isLoading = false;

  //    }

  //  )
  //    .catch((error) => {
  //    console.error(error);
  //    this.statusMessage = 'Problem with the service. Please try again after sometime';
  //  });
  //}





  onBackButtClick(): void {
    this._router.navigate(['/employees']);
  }


}
