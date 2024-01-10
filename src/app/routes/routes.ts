import { Routes } from '@angular/router';
import { HeroListComponent } from '../hero-list.component';
import { StudentListComponent } from '../student-list.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HeroListComponent,
      title: 'The subjects'
    },
    {
      path: 'details/:id',
      component: StudentListComponent,
      title: 'The students'
    }
  ];

  export default routeConfig;
