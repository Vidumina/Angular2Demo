import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { IEmployee } from './employee';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7273/api/employees';
  private apiUrlGetOneEmployee = 'https://localhost:7273/api/employees/'; 


  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiUrl).pipe(catchError(this.handleError));


  }

  //async getEmployeeByCode(empCode: string): Promise<IEmployee> {

  //  try {
  //    return await firstValueFrom(

  //      this.http.get<IEmployee>(`${this.apiUrlGetOneEmployee}${empCode}`).pipe(catchError(this.handleError))
  //    );

  //  } catch (e) {
  //    throw e;


  //  }


  //}


  getEmployeeByCode(empCode:string): Observable<IEmployee> {
    return this.http.get<IEmployee>(this.apiUrlGetOneEmployee + empCode).pipe(catchError(this.handleError));


  }



  

  

  handleError(error: HttpErrorResponse) {

    console.error(error);
    return throwError(() => new Error(error.message || 'Something went wrong, please try again later'));

  }




  
}


















