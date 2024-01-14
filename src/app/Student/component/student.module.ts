import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from '../student-routing.module';
import { StudentComponent } from './student-list.component';


@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  exports: [StudentComponent] // Only if you plan to use SubjectComponent outside this module
})
export class StudentModule { }
