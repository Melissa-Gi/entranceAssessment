import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
})

export class NewStudentComponent {  
    id: string|undefined;
    firstname: string|undefined;
    lastname: string|undefined;
    subjects: string|undefined;
    constructor(private StudentService: StudentService )
    {}

    handleCreateForm(){
      var inputElement = <HTMLInputElement>document.getElementById('student_id');
      this.id = inputElement.value;

      inputElement = <HTMLInputElement>document.getElementById('first_name');
      this.firstname = inputElement.value;
      console.log(this.firstname);

      inputElement = <HTMLInputElement>document.getElementById('last_name');
      this.lastname = inputElement.value;

      inputElement = <HTMLInputElement>document.getElementById('subject_list');
      this.subjects=inputElement.value;
      console.log(this.subjects);

      this.StudentService.createStudent(this.id,this.firstname,this.lastname,this.subjects);
    }

}