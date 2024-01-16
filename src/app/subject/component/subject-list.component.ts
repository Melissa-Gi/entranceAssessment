import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { subject } from '../../models/subject.model';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NewSubjectComponent } from './create-subject.component';
var sub_id: number;
@Component({
  selector: 'app-subject',
  templateUrl: './subject-list.component.html',
})

export class SubjectComponent implements OnInit{

  subjects: Array<subject> = [];
  selectedSubject: subject | undefined;
  sub_id: string | undefined;
  showCreateNew = false;

  constructor(private SubjectService: SubjectService)
    {}
  ngOnInit(): void {
    this.getSubjects().subscribe((data) => {this.subjects = data});
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
        this.sub_id = inputElement.value;
        sub_id = Number(this.sub_id);
  }
  createForm(){
    this.showCreateNew = !this.showCreateNew;
  }
      
}
