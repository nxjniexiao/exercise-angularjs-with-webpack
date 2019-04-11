export class AuthService {
  constructor(AppConfig, $q, $timeout) {
    this.AppConfig = AppConfig;
    this.$q = $q;
    this.$timeout = $timeout;
  }

  logout() {
    this.AppConfig.userEmail = null;
    this.AppConfig.save();
  }

  authenticate(userEmail, password) {
    let { $timeout, $q, AppConfig } = this;
    const checkCredentials = () =>
      $q((resolve, reject) => {
        const isUserEmaileValid = userEmail === 'admin@admin.com';
        const isPasswordValid = password === 'admin';
        if (isUserEmaileValid && isPasswordValid) {
          resolve(userEmail);
        } else {
          reject('Invalid userEmail or password');
        }
      });
    return $timeout(checkCredentials, 800).then(userEmail => {
      AppConfig.userEmail = userEmail;
      AppConfig.save();
    });
  }

  isAuthroized() {
    return !!this.AppConfig.userEmail;
  }
}

AuthService.$inject = ['AppConfig', '$q', '$timeout'];

export default AuthService;
