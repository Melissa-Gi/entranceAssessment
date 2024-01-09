import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list.component';
import { StudentListComponent } from './student-list.component';

import { SalesTaxComponent } from './sales-tax.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <h1>School Subjects and Students</h1>
    <router-outlet></router-outlet>
    <app-student-list></app-student-list>
    <app-sales-tax></app-sales-tax>
  `,
  imports: [HeroListComponent,StudentListComponent,SalesTaxComponent,RouterModule,]
})
export class AppComponent { }
