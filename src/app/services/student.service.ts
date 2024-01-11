import { Injectable } from '@angular/core';
import Student from '../models/student';
import { Logger } from './logger.service';
import {BackendStudentService} from '../services/backend.service'

@Injectable({providedIn: 'root'})
export class StudentService {
  private students: Student[] = [];

  constructor(
    private backend: BackendStudentService,
    private logger: Logger) { }

  getStudents() {
    this.backend.getAllStudents(Student).then( (students: Student[]) => {
      this.logger.log(`Fetched ${students.length} students.`);
      this.students.push(...students); // fill cache
    });
    return this.students;
  }
}
