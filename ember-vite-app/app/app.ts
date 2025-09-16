import Application from '@ember/application';
import compatModules from '@embroider/virtual/compat-modules';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import { importSync, isDevelopingApp, macroCondition } from '@embroider/macros';

if (macroCondition(isDevelopingApp())) {
  importSync('./deprecation-workflow');
}

const modulePrefix = 'ember-vite-app';

export default class App extends Application {
  modulePrefix = modulePrefix
  podModulePrefix = modulePrefix
  locationType = 'none'
  Resolver = Resolver.withModules(compatModules);
}

loadInitializers(App, modulePrefix, compatModules);
