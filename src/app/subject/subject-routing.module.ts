import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './component/subject-list.component';
import { NewSubjectComponent } from './component/create-subject.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectComponent,
  },
  {
    path: 'subjects/:id',
    component: SubjectComponent,
  },
  {
    path: 'subjects/create',
    component: NewSubjectComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
