import demoApp from './app.module';
import app from './pages/app/app.component';
import login from './pages/login/login.component';
import { appState, loginState, homeStateFuture } from './routes/app.routes';
import { authHookRunBlock } from './routes/hooks/requiresAuth.hook';

demoApp.config([
  '$uiRouterProvider',
  function($uiRouterProvider) {
    /**
     * `$uiRouterProvider`: UIRouter.
     * UI-Router (for each specific framework) will create an instance of this class during bootstrap.
     * This class instantiates and wires the UI-Router services together.
     * Properties:
     * `stateRegistry`: StateRegistry = new StateRegistry(this).
     *     `register(stateDefinition: _StateDeclaration)`: StateObject
     *     Adds a state to the registry
     * `urlService`: UrlService = new UrlService(this)
     *     Properties:
     *     `rules`: UrlRules = new UrlRules(this.router)
     *         `when(matcher: RegExp | UrlMatcher | string, handler: string | UrlRuleHandlerFn, options?: object)`: UrlRule
     *         Registers a matcher and handler for custom URLs handling.
     *         `otherwise(handler: string | UrlRuleHandlerFn | TargetState | TargetStateDef)`: void
     *         Defines the state, url, or behavior to use when no other rule matches the URL.
     */
    const $urlService = $uiRouterProvider.urlService;
    $urlService.rules.otherwise({ state: 'login' });

    const $stateRegistry = $uiRouterProvider.stateRegistry;
    $stateRegistry.register(appState);
    $stateRegistry.register(loginState);

    // Future State (Placeholder) for the home module
    $stateRegistry.register(homeStateFuture);

    /**
     * `StateProvider.state(definition: Ng1StateDeclaration): StateProvider`: Registers a state.
     * This is a passthrough to `StateRegistry.register()`.
     */
  }
]);

demoApp.component('app', app);
demoApp.component('login', login);

demoApp.run(authHookRunBlock);
