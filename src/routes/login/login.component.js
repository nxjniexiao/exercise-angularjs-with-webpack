import template from './login.template.html';
import './login.css';

class LoginController {
  constructor($state) {
    this.$state = $state;
    this.login = function() {
      console.log('login');
      this.$state.go('home');
    }
  }
}

LoginController.$inject = ['$state'];

const login = {
  template,
  controller: LoginController
};

export default login;
