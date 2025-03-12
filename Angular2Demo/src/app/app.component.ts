import { Component } from "@angular/core"


@Component({
  selector: 'app-root',
  template: `




<div style="padding:5px;">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" routerLink="/home" routerLinkActive="active">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/employees" routerLinkActive="active">Employees</a>
    </li>
  </ul>
  <router-outlet></router-outlet>
</div>
 

  `
 
  
  ,
  standalone: false
})
export class AppComponent {

  userText: string = 'Pragim';
  
 

}

