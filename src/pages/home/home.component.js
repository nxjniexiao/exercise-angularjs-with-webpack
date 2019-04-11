import template from './home.template.html';
import './home.css';

class HomeController {
  constructor($state, AuthService) {
    this.$state = $state;
    this.AuthService = AuthService;
    this.logoWebpack = require('@/assets/img/webpack.svg');
    this.logoAngular = require('@/assets/img/angularjs-for-header-only.svg');
    this.logoUIRouter = require('@/assets/img/ui-router.svg');
  }
  logout() {
    this.AuthService.logout();
    this.$state.go('login');
  }
}

HomeController.$inject = ['$state', 'AuthService'];

const home = {
  template,
  controller: HomeController
};

export default home;
