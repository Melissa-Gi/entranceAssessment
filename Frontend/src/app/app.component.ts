import { Component } from '@angular/core';

import { HeroListComponent } from './hero-list.component';
import { StudentListComponent } from './student-list.component';

import { SalesTaxComponent } from './sales-tax.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <h1>School Subjects and Students</h1>
    <app-hero-list></app-hero-list>
    <app-student-list></app-student-list>
    <app-sales-tax></app-sales-tax>
  `,
  imports: [HeroListComponent,StudentListComponent,SalesTaxComponent]
})
export class AppComponent { }
