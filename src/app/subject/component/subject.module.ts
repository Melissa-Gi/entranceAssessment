import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from '../subject-routing.module';
import { SubjectComponent } from './subject-list.component';
import { NewSubjectComponent } from './create-subject.component';


@NgModule({
  declarations: [
    SubjectComponent,
    NewSubjectComponent,
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ],
})
export class SubjectModule { }
