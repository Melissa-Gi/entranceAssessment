import { RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list.component';
import { StudentListComponent } from './student-list.component';
import { Component, OnInit } from '@angular/core';
import { SalesTaxComponent } from './sales-tax.component';
import {Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl:'./app.component.html',
  imports: [HeroListComponent,StudentListComponent,SalesTaxComponent,RouterModule]
})
export class AppComponent implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit(): void { }
  
   get getCurrentURL() {
    return this.router.url;
  }
}