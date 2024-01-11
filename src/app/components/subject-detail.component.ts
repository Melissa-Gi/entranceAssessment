import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import Subject from '../models/subject';

@Component({
  standalone: true,
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  imports: [FormsModule]
})
export class SubjectDetailComponent {
  @Input() hero!: Subject;
}
