import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //private apiUrl = 'http://localhost:31324/api/employees';
  private apiUrl = 'https://localhost:7273/api/employees'; 

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiUrl);
  }
}


















//import { Injectable } from '@angular/core';
//import { HttpClient, HttpResponse } from '@angular/common/http';
//import { IEmployee } from './employee';
//import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';

//@Injectable({
//  providedIn: 'root' // Provides this service at the root level
//})
//export class EmployeeService {

//  private apiUrl = 'https://localhost:7273/api/employees';
//  constructor(private _http: HttpClient) { }

//  getEmployees(): Observable<IEmployee[]> {
//    return this._http.get<IEmployee[]>(this.apiUrl).pipe(map((response: IEmployee[]) => response));
//  }
//}
