import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './component/subject-list.component';

const routes: Routes = [
  { 
    path: '', 
    component: SubjectComponent,
    children: [
      { path: 'subjects/:id', component: SubjectComponent } 
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
