import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Hero } from './hero';

@Component({
  standalone: true,
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  imports: [FormsModule]
})
export class StudentDetailComponent {
  @Input() hero!: Hero;
}
