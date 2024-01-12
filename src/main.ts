import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/components/app.component';
import { Routes } from '@angular/router';
import { StudentListComponent } from './app/components/student-list.component';
import { SubjectListComponent } from './app/components/subject-list.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(), // essential for e2e testing
  ]
});
