import { Injectable } from '@angular/core';
import Subject from '../models/subject';
import { Logger } from './logger.service';
import {BackendSubjectService} from '../services/backend.service'

@Injectable({providedIn: 'root'})
export class SubjectService {
  private subjects: Subject[] = [];

  constructor(
    private backend: BackendSubjectService,
    private logger: Logger) { }

  getStudents() {
    this.backend.getAllSubjects(Subject).then( (students: Subject[]) => {
      this.logger.log(`Fetched ${students.length} students.`);
      this.subjects.push(...students); // fill cache
    });
    return this.subjects;
  }
}
