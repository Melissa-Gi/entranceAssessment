import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { student } from '../../models/student.model';
import { Observable, Subscription } from 'rxjs';

/*@Component({
  standalone:true,
  selector:    'app-subject-list',
  templateUrl: './subject-list.component.html',
  imports: [NgFor, NgIf, SubjectDetailComponent],
  providers:  [ SubjectService ]
})
export class SubjectListComponent implements OnInit {
  subjects: subject[] = [];
  selectedSubject: subject | undefined;

  constructor(private service: SubjectService) { }

  ngOnInit() {
    
    this.subjects = this.service.getSubjects();
  }

  selectSubject(subject: Subject) { this.selectedSubject = subject; }
}*/

/**This is the Component decorator, and it is used to define metadata for the Angular component. 
 * It specifies the component's selector, templateUrl (HTML file for the component), and styleUrls (CSS file for styling). */
@Component({
  selector: 'app-student',
  templateUrl: './student-list.component.html',
})

/**Declaring the subject class */
export class StudentComponent {

  students: Array<student> = [];
  selectedStudent: student | undefined;
 
  constructor( 

    private StudentService: StudentService )
    
    {
      this.getSubjects().subscribe((data) => {this.students = data})
    }

  /**This method calls the getSubjects method from the injected SubjectService. 
   * It returns the observable obtained from the service, which will emit data when the HTTP request is complete. */
  getSubjects(): Observable<any>{
    return this.StudentService.getStudents()
  }
  selectStudent(student: student) { this.selectedStudent = student; }


}
