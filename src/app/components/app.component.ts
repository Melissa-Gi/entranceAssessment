import { RouterLink, RouterOutlet, RouterLinkActive,RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl:'./app.component.html',
  imports: [RouterLink, RouterOutlet, RouterLinkActive,RouterModule],
})
export class AppComponent {}
