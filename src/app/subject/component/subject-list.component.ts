import { Component } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { subject } from '../../models/subject.model';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
var sub_id: string;
@Component({
  selector: 'app-subject',
  templateUrl: './subject-list.component.html',
})

export class SubjectComponent {

  subjects: Array<subject> = [];
  selectedSubject: subject | undefined;
  sub_id: string | undefined;

  constructor(private SubjectService: SubjectService, router: Router )
    {
      this.getSubjects().subscribe((data) => {this.subjects = data})
    }
    getSubjects(): Observable<any>{
      if (sub_id == undefined)
        return this.SubjectService.getSubjects();
      else{
        return this.SubjectService.getOneSubject(sub_id);
      }}

  selectSubject(subject: subject) { this.selectedSubject = subject; }

  handleIDForm(){
        const inputElement = <HTMLInputElement>document.getElementById('sub_id');
        sub_id = inputElement.value;
        this.sub_id = sub_id;
        console.log("lol")
        
  }

      
}
