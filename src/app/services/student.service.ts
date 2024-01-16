import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Array<student>>{

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
    return this.http.get<Array<student>>('http://localhost:3000/students', {headers})
  };
}
