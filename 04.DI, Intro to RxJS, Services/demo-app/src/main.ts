import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  // .bootstrapModule(AppModule, {ngZone:'noop'}) => manually switch off change detection
  //then manual switch on in app.component.ts
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
