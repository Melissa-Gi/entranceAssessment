import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeroListComponent } from './hero-list.component';
import { StudentListComponent } from './student-list.component';
import { SalesTaxComponent } from './sales-tax.component';
import { AppRoutingModule } from './app-routing.module';
import { provideRouter, Routes } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [AppRoutingModule,RouterLink,RouterLinkActive,RouterOutlet],
})

export class AppComponent {title = 'routing-app' }
