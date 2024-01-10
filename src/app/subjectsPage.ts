import { HeroListComponent } from './hero-list.component';
import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'subjects-page',
    template: `
      <h1>School Subjects and Students</h1>
      <button onclick="window.location.href = 'subjectsPage.html';">View Subjects</button>
      <app-hero-list></app-hero-list>
    `,
    templateUrl:'./subjectsPage.html',
  })
export class SubjectsPage { }