import angular from 'angular';
import AuthService from './auth-service/auth.service';
import AppConfig from './app-config/app-config.service';

const SERVICE_MODULE = angular.module('serviceModule', []);

SERVICE_MODULE.service('AuthService', AuthService);
SERVICE_MODULE.service('AppConfig', AppConfig);

export default SERVICE_MODULE;