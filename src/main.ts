import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

bootstrapApplication(AppModule, {
  providers: [
    provideProtractorTestingSupport(), // essential for e2e testing
  ]
});
