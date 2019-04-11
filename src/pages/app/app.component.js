/**
 * The controller for the `app` component.
 */
import template from './app.template.html';

class AuthorizeController {
  constructor(AuthService, $state) {
    this.AuthService = AuthService;
    this.$state = $state;
  }
}

AuthorizeController.$inject = ['AuthService', '$state'];

const app = {
  template,
  controller: AuthorizeController
};

export default app;
