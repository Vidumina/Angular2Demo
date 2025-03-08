

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component'
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe'
import { EmpoloyeeCountComponent } from './employee/employeeCount.component'
import { SimpleComponent } from './employee/Others/Simple.component'





@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, EmployeeTitlePipe, HttpClientModule, CommonModule, EmployeeComponent],
  declarations: [AppComponent, EmployeeListComponent, EmpoloyeeCountComponent, SimpleComponent ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
