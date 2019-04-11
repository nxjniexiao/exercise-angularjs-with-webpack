import angular from 'angular';
import DATE_TIME_SELECTOR_MODULE from './date-time-selector/date-time-selector.directive';

const DIRECTIVES_MODULE = angular.module('directivesModule', [
  DATE_TIME_SELECTOR_MODULE.name // 'dateTimeSelectorModule'
]);

export default DIRECTIVES_MODULE;
