import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  // Adding a router in the constructor
  constructor(private router: Router){ }

  

  title = 'Education App';

  navigateToSubject() {
    this.router.navigate(['/subjects']);
  }
  navigateToStudent() {
    this.router.navigate(['/students']);
  }
  
}