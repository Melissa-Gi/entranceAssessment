import { HeroListComponent } from './hero-list.component';
import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import {Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'subjects-page',
    templateUrl: './subjectsPage.html',
    imports: [HeroListComponent,Router,RouterModule]
  })
export class SubjectsPage {  
    constructor(private router: Router) { }

    ngOnInit(): void { }
    
     get getCurrentURL() {
      return this.router.url; }
     }