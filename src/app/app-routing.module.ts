import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'students', loadChildren: () => import('./Student/component/student.module').then(m => m.StudentModule) },
  { path: 'subjects', loadChildren: () => import('./Subject/component/subject.module').then(m => m.SubjectModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
