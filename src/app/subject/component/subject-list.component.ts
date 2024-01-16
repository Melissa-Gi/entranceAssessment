import { Component } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { subject } from '../../models/subject.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject-list.component.html',
})

export class SubjectComponent {

  subjects: Array<subject> = [];
  selectedSubject: subject | undefined;
  sub_id: string | undefined;

  constructor(private SubjectService: SubjectService )
    
    {
      this.getSubjects().subscribe((data) => {this.subjects = data})
    }
    getSubjects(): Observable<any>{
    return this.SubjectService.getSubjects()
  }
  selectSubject(subject: subject) { this.selectedSubject = subject; }
  handleIDForm(){
        const inputElement = <HTMLInputElement>document.getElementById('sub_id');
        this.sub_id = inputElement.value;
        
  }


}
