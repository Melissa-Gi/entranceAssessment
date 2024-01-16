import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from '../subject-routing.module';
import { SubjectComponent } from './subject-list.component';


@NgModule({
  declarations: [
    SubjectComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ],
  exports: [SubjectComponent] 
})
export class SubjectModule { }
