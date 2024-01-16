import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { student } from '../../models/student.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student-list.component.html',
})

export class StudentComponent {

  students: Array<student> = [];
  selectedStudent: student | undefined;
 
  constructor( 

    private StudentService: StudentService )
    
    {
      this.getSubjects().subscribe((data) => {this.students = data})
    }

  getSubjects(): Observable<any>{
    return this.StudentService.getStudents()
  }
  selectStudent(student: student) { this.selectedStudent = student; }


}
