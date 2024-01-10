import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SubjectsPage } from './subjectsPage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent
  ],
  providers: [],
})
export class AppModule { }
