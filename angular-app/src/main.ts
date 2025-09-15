import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import * as maybeSomething from 'ember-vite-app';

console.log(maybeSomething);
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
