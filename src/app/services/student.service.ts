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
    //const headers = new HttpHeaders();
    //.set('content-type')
    this.backend.getAllStudents(Student).then( (students: Student[]) => {
      this.logger.log(`Fetched ${students.length} students.`);
      this.students.push(...students); // fill cache
    });
    return this.students;
    //return this.http.get<Array<Student>>('http://localhost:3000/subjects,{headers})')
  }
}
