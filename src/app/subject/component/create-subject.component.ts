import { Component } from '@angular/core';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
})

export class NewSubjectComponent {  
    sub_id: number|undefined;
    subject_name: string|undefined;
    subject_teacher: string|undefined;
    constructor(private SubjectService: SubjectService )
    {}

    handleCreateForm(){
      var inputElement = <HTMLInputElement>document.getElementById('sub_id');
      this.sub_id = Number(inputElement.value);
      inputElement = <HTMLInputElement>document.getElementById('name');
      this.subject_name = inputElement.value
      inputElement = <HTMLInputElement>document.getElementById('teacher');
      this.subject_teacher= inputElement.value
      this.SubjectService.createSubject(this.sub_id,this.subject_name,this.subject_teacher);
    }

}