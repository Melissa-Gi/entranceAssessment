import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from '../subject-routing.module';
import { SubjectComponent } from './subject.component';


@NgModule({
  declarations: [
    SubjectComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ],
  exports: [SubjectComponent] // Only if you plan to use SubjectComponent outside this module
})
export class SubjectModule { }
