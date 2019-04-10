import template from './home.template.html';
import './home.css';

class homeController {
  constructor($state) {
    this.$state = $state;
    this.logoWebpack = require('../../assets/img/webpack.svg');
    this.logoAngular = require('../../assets/img/angularjs-for-header-only.svg');
    this.logoUIRouter = require('../../assets/img/ui-router.svg');
  }
}

const home = {
  template,
  controller: homeController
};

export default home;
