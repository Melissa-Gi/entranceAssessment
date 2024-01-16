import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './component/student-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
  },
  {
    path: 'students/:id',
    component: StudentComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
