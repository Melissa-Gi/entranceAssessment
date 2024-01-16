/*import { Component } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { subject } from '../../models/subject.model';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SubjectRoutingModule } from '../subject-routing.module';

@Component({
  selector: 'one-subject',
  templateUrl: './one-subject.component.html',
})

export class OneSubjectComponent {  
    subject: Array<subject> = [];
    selectedSubject: subject | undefined;
    constructor(private SubjectService: SubjectService )
    {

        this.getOneSubject().subscribe((data) => {this.subject = data})
    }
    getOneSubject(): Observable<any>{
    return this.SubjectService.getOneSubject()}
    selectSubject(subject: subject) { this.selectedSubject = subject; }

}*/