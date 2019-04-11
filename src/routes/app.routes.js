/**
 * `appState` is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
export const appState = {
  name: 'app',
  redirectTo: 'login',
  component: 'app'
};

export const loginState = {
  parent: 'app',
  name: 'login',
  url: '/login',
  component: 'login'
};

/**
 * Future State (Placeholder) for the home module
 * A name which ends in `.**`:
 *    A future state's name property acts as a wildcard(通配符) Glob. 
 *    It matches any state name that starts with the name (including child states that are not yet loaded).
 */
export const homeStateFuture = {
  parent: 'app',
  name: 'home.**',
  url: '/home',
  /**
   * Properties:
   * `lazyLoad`: function, A function used to lazy load code.
   * The lazyLoad function is invoked before the state is activated. The transition waits while the code is loading.
   * `lazyLoad(transition: Transition, state: StateDeclaration)`: Promise<LazyLoadResult>
   */
  lazyLoad: function(transition) {
    /**
     * `transition`: Transition. Represents a transition between two states.
     *    `injector(state?: StateOrName, pathName?: string)`: UIInjector
     *    Creates a UIInjector Dependency Injector
     *        Interface UIInjector
     *        `get(token: any)`: any
     *        Gets a value from the injector.
     */
    const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
    return import('../pages/home/home.module').then(mod => {
      /**
       * as `export default HOME_MODULE;` in './home/home.module',
       * `mod.default` is HOME_MODULE.
       */
      return $ocLazyLoad.load(mod.default);
    });
  }
};
