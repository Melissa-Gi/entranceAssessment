import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsPage } from './subjectsPage';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'Home', component: AppComponent},
  {path: 'Subjects', component: SubjectsPage},
  {path: '**', redirectTo: ''}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }