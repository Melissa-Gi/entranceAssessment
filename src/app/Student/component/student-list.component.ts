import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { student } from '../../models/student.model';
import { Observable, Subscription } from 'rxjs';
var studentID: string | undefined;

@Component({
  selector: 'app-student',
  templateUrl: './student-list.component.html',
})

export class StudentComponent {

  students: Array<student> = [];
  selectedStudent: student | undefined;
  studentID: string | undefined;
  showCreateNew = false;
  find = false;
 
  constructor( 

    private StudentService: StudentService )
    
    {
      this.getSubjects().subscribe((data) => {this.students = data})
    }

  getSubjects(): Observable<any>{
    if (studentID == undefined)
    return this.StudentService.getStudents();
  else{
    return this.StudentService.getOneStudent(studentID);
  }}

  selectStudent(student: student) { this.selectedStudent = student; }
  handleIDForm(){
    const inputElement = <HTMLInputElement>document.getElementById('student_id');
    this.studentID = inputElement.value;
    studentID = this.studentID;
    const button = document.getElementById("Submit");
    button?.classList.toggle("active");
    this.find = !this.find;
  }
  createForm(){
    this.showCreateNew = !this.showCreateNew;
  }

}
