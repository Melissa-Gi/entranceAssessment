import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SubjectModule } from './Subject/component/subject.module';
import { StudentModule } from './Student/component/student.module';

const routes: Routes = [
  { path: 'students', loadChildren: () => StudentModule },
  { path: 'subjects', loadChildren: () => SubjectModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
