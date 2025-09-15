import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
// @ts-expect-error we'll figure out types later
import * as maybeSomething from 'ember-vite-app';

console.log(maybeSomething);
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
