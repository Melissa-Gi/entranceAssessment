import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import {AppComponent} from './app/app.component';
import {AppModule} from './app/app.module';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding),
  ]
}).catch(err => console.error(err));
