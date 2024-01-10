import { Injectable } from '@angular/core';
import { Student } from '../student';
import { BackendService } from './school.service';
import { Logger } from '../logger.service';

@Injectable({providedIn: 'root'})
export class HeroService {
  private heroes: Student[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getHeroes() {
    this.backend.getAll(Student).then( (heroes: Student[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;
  }
}
