import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';

import {AppComponent} from '../src/app/components/app.component';
import { AppModule } from './app/app.module';
bootstrapApplication(AppModule, {
  providers: [
    provideProtractorTestingSupport(), // essential for e2e testing
  ]
});
