import template from './home.template.html';
import './home.css';

class homeController {
  constructor($state) {
    this.$state = $state;
  }
}

const home = {
  template,
  controller: homeController
};

export default home;
