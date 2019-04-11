import angular from 'angular';
import AuthService from './auth-service/auth.service';
import AppConfig from './app-config/app-config.service';

const serviceModule = angular.module('serviceModule', []);

serviceModule.service('AuthService', AuthService);
serviceModule.service('AppConfig', AppConfig);

export default serviceModule;