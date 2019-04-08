/**
 * The controller for the `app` component.
 */
import template from './app.template.html';

class AuthorizeController {
  constructor($state) {
    this.$state = $state;
  }
}

AuthorizeController.$inject = ['$state'];

export const app = {
  template: template,
  controller: AuthorizeController
}