import angular from 'angular';
import home from './home.component';
import { homeState } from './home.states';

const HOME_MODULE = angular.module('home', []);

HOME_MODULE.component('home', home);

HOME_MODULE.config([
  '$stateRegistryProvider',
  function($stateRegistryProvider) {
    /**
     * `$stateRegistryProvider`: StateRegistry. The State Registry.
     *      Class StateRegistry
     *      `register(stateDefinition: _StateDeclaration)`: StateObject
     *      Adds a state to the registry
     */
    $stateRegistryProvider.register(homeState);
  }
]);

export default HOME_MODULE;
