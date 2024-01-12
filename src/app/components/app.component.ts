import { RouterLink, RouterOutlet, RouterLinkActive,RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  imports: [StudentListComponent,CommonModule, RouterOutlet, RouterLink, RouterLinkActive]
})
export class AppComponent implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit(): void { }

}