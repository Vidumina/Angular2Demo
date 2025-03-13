

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
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './employee/Others/pageNotFound.component'
import { UserPreferencesService } from './employee/userPreferences.service';
import { TestModule } from './test.module';






@NgModule({
  imports: [BrowserModule, FormsModule, EmployeeTitlePipe, HttpClientModule, CommonModule, EmployeeComponent, AppRoutingModule, TestModule],
  declarations: [AppComponent, EmployeeListComponent, EmpoloyeeCountComponent, SimpleComponent, HomeComponent, PageNotFoundComponent ],
  bootstrap: [AppComponent],

  providers: []
})
export class AppModule { }
