import template from './login.template.html';
import './login.css';

class LoginController {
  constructor(AuthService, $state) {
    this.AuthService = AuthService;
    this.$state = $state;
    this.userEmail = 'admin@admin.com';
    this.password = 'admin';
  }
  login() {
    this.AuthService.authenticate(this.userEmail, this.password).then(() => {
      console.log('login');
      this.$state.go('home');
    });
  }
}

LoginController.$inject = ['AuthService', '$state'];

const login = {
  template,
  controller: LoginController
};

export default login;
