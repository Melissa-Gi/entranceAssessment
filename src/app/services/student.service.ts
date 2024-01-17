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
  baseUrl = "http://localhost:3000";
  getStudents(): Observable<Array<student>>{

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
    return this.http.get<Array<student>>('http://localhost:3000/students', {headers})
  };

  getOneStudent(id:string): Observable<Array<student>>{

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      const url = `${this.baseUrl}/students/${id}`;
      return this.http.get<Array<student>>(url, {headers})
  };

  createStudent(id:string,firstname:string,lastname:string,subjects:string)
  {
    const subjectsArray: string[] = subjects.split(',');
    console.log(subjectsArray);
    const headers = new HttpHeaders()
    .set('content-type', 'application/json');
    const body = { id, firstname, lastname, subjectsArray};
    this.http.put('http://localhost:3000/students', body, { headers })
    .subscribe(response => {
    });  }
}
