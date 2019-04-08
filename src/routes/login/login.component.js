import template from './login.template.html';
import './login.css';

class LoginController {
  constructor($state) {
    this.$state = $state;
  }
}

LoginController.$inject = ['$state'];

export const login = {
  controller: LoginController,
  template: template
};
