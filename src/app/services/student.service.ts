import { Injectable } from '@angular/core';
import Student from '../models/student';
import { Logger } from './logger.service';
import {BackendService} from '../services/backend.service'

@Injectable({providedIn: 'root'})
export class StudentService {
  private students: Student[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getStudents() {
    this.backend.getAll(Student).then( (students: Student[]) => {
      this.logger.log(`Fetched ${students.length} students.`);
      this.students.push(...students); // fill cache
    });
    return this.students;
  }
}
