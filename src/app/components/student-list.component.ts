
import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import Student from '../models/student';
import { StudentDetailComponent } from './student-detail.component';
import { StudentService } from '../services/student.service';

@Component({
  selector:    'app-student-list',
  templateUrl: './student-list.component.html',
  imports:     [ NgFor, NgIf, StudentDetailComponent ],
  providers:  [ StudentService ]
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student | undefined;

  constructor(private service: StudentService) { }

  ngOnInit() {
    this.students = this.service.getStudents();
  }

  selectStudent(student: Student) { this.selectedStudent = student; }
}

/*Original code
import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  standalone: true,
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  imports:     [ NgFor, NgIf, HeroDetailComponent ],
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero | undefined;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
}
*/