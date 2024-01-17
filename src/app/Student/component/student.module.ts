import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from '../student-routing.module';
import { StudentComponent } from './student-list.component';
import { NewStudentComponent } from './create-student.component';


@NgModule({
  declarations: [
    StudentComponent,
    NewStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  exports: [StudentComponent]
})
export class StudentModule { }
