import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ocLazyLoad from 'oclazyload';
// The module contains all the components
import COMPONENTS_MODULE from './components';
// THe module contains all the directives
import DIRECTIVES_MODULE from './directives';
// THe module contains all the filters
import FILTERS_MODULE from './filters';
// THe module contains all the services
import SERVICE_MODULE from './services';

const demoApp = angular.module('demoApp', [
  uiRouter,
  ocLazyLoad,
  COMPONENTS_MODULE.name, // ERVICE_MODULE.name === 'componentsModule'
  DIRECTIVES_MODULE.name,
  FILTERS_MODULE.name,
  SERVICE_MODULE.name,
  
  /**
   * These modules are lazy loaded via future states in routes/index.js
   */
  // HOME_MODULE.name
]);

export default demoApp;
