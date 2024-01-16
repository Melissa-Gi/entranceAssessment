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

  getSubjects(): Observable<Array<subject>>{

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
    return this.http.get<Array<subject>>('http://localhost:3000/subjects', {headers})
  };
}
