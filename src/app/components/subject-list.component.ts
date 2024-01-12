
import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import Subject from '../models/subject';
import { SubjectDetailComponent } from './subject-detail.component';
import { SubjectService } from '../services/subject.service';

@Component({
  standalone:true,
  selector:    'app-subject-list',
  templateUrl: './subject-list.component.html',
  imports: [NgFor, NgIf, SubjectDetailComponent],
  providers:  [ SubjectService ]
})
export class SubjectListComponent implements OnInit {
  subjects: Subject[] = [];
  selectedSubject: Subject | undefined;

  constructor(private service: SubjectService) { }

  ngOnInit() {
    
    this.subjects = this.service.getSubjects();
  }

  selectSubject(subject: Subject) { this.selectedSubject = subject; }
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