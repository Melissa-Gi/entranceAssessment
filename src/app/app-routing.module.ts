import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { SubjectsPage } from './components/subjectsPage';
import { StudentListComponent } from '../app/components/student-list.component';


const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'localhost:4200/Subjects', component: SubjectsPage},
  {path: '**', redirectTo: ''}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }