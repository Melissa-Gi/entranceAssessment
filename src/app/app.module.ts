
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/components/app.component';
import { StudentListComponent } from './components/student-list.component';
import { RouterModule } from '@angular/router';
import { SubjectListComponent } from './components/subject-list.component';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[],
  bootstrap:[AppComponent],
})
export class AppModule { }
