import EmberRouter from '@embroider/router';
import config from 'ember-vite-app/config/environment';

export default class Router extends EmberRouter {
  location = 'none';
  rootURL = config.rootURL;
}

Router.map(function () {
  // Add route declarations here
});
