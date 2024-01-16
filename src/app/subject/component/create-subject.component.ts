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


}