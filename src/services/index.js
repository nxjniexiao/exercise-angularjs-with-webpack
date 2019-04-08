import AuthService from './auth-service/auth.service';

const serviceModule = angular.module('serviceModule', []);

serviceModule.service('AuthService', AuthService);

export default serviceModule;