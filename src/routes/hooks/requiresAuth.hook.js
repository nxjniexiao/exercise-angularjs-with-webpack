/**
 * This run block registers a Transition Hook which protects
 * routes that requires authentication.
 *
 * This hook redirects to /login when both:
 * - The user is not authenticated
 * - The user is navigating to a state that requires authentication
 */
authHookRunBlock.$inject = ['$transitions', 'AuthService'];
export function authHookRunBlock($transitions, AuthService) {
  /**
   * Interface `HookMatchCriteria`
   * Matches if the destination state's data property has a truthy 'requiresAuth' property
   */
  let requiresAuthCriteria = {
    to: state => state.data && state.data.requiresAuth
  };

  /**
   * Interface `TransitionHookFn`
   * `(transition: Transition): HookResult`
   * Function that returns a redirect for the current transition to the login state
   * if the user is not currently authenticated (according to the AuthService)
   */
  let redirectToLogin = transition => {
    let AuthService = transition.injector().get('AuthService');
    /**
     * class `Transition`
     * Represents a transition between two states.
     *    Properties
     *    `router: UIRouter`, A reference to the UIRouter instance
     *    Class UIRouter:
     *        Properties
     *        `stateService`: StateService = new StateService(this)
     *        `urlService`: UrlService = new UrlService(this)
     *        `stateRegistry`: StateRegistry = new StateRegistry(this)
     */
    let $state = transition.router.stateService;
    const isAuthroized = AuthService.isAuthroized();
    if (!isAuthroized) {
      return $state.target('login', undefined, { location: false });
    }
  };

  /**
   * `onBefore(matchCriteria: HookMatchCriteria, callback: TransitionHookFn, options?: HookRegOptions)`: Function
   * Registers a TransitionHookFn, called before a transition starts.
   */
  $transitions.onBefore(requiresAuthCriteria, redirectToLogin, {
    priority: 10
  });
}
