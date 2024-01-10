
import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { Student } from './student';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './services/student.service';

@Component({
  standalone: true,
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  imports:     [ NgFor, NgIf, HeroDetailComponent ],
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
  heroes: Student[] = [];
  selectedHero: Student | undefined;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Student) { this.selectedHero = hero; }
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