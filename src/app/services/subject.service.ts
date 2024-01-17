import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { subject } from '../models/subject.model';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {
  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:3000";
  getSubjects(): Observable<Array<subject>>{

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
    return this.http.get<Array<subject>>('http://localhost:3000/subjects', {headers})
  };

  getOneSubject(id:number): Observable<Array<subject>>{

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      const url = `${this.baseUrl}/subjects/${id}`;
      return this.http.get<Array<subject>>(url, {headers});
  };

  createSubject(id:number,name:string,teacher:string)
  {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json');
    const body = { id, name, teacher };
    this.http.put('http://localhost:3000/subjects', body, { headers })
    .subscribe(response => {
    });  }
  
    deleteSubject(id:number)
    {
      const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      const url = `${this.baseUrl}/subjects/${id}`;
      this.http.delete(url, { headers })
      .subscribe(response => {
      });  
    }
}
