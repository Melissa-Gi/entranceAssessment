import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {AppComponent} from './app/app.component';
import router from './app/routes/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(), // essential for e2e testing
    provideRouter(router)
  ]
}).catch(err => console.error(err));
