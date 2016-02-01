import home from './features/home/home.index.js';
import routing from '../config/app.config.js';
import uirouter from 'angular-ui-router';

angular.module('app', [uirouter, home])
  .config(routing);