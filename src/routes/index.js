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