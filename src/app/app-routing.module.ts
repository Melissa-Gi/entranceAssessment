import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { StudentListComponent } from '../app/components/student-list.component';
import { AppComponent } from './components/app.component';
import { SubjectListComponent } from './components/subject-list.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'Students', component: StudentListComponent},
  {path: 'Subjects', component: SubjectListComponent},
  {path: '**', redirectTo: ''}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }