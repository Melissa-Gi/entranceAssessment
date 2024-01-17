import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/app.css']
})
export class AppComponent {

  constructor(private router: Router){ }
  title = 'Angular App School Database';

  changeTab(newTab:string) {
    var tabs = document.querySelectorAll('.topnav a');
    tabs.forEach((tab: Element) => {
      tab.classList.remove('active');
    });
    var open = document.getElementById(newTab);
    if (open) {
      open.classList.add('active');
    }
    this.router.navigate([newTab]);
  }
}