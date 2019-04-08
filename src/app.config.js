import demoApp from './app.module';
import { app } from './routes/app/app.component';
import { login } from './routes/login/login.component';
import { appState, loginState } from './routes';

demoApp.config([
  '$uiRouterProvider',
  function($uiRouter) {
    const $urlService = $uiRouter.urlService;
    $urlService.rules.otherwise({ state: 'login' });

    const $stateRegistry = $uiRouter.stateRegistry;
    $stateRegistry.register(appState);
    $stateRegistry.register(loginState);
  }
]);

demoApp.component('app', app);
demoApp.component('login', login);
