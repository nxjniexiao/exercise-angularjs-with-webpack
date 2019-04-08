export class AuthService {
  constructor($q, $timeout) {
    this.$q = $q;
    this.$timeout = $timeout;
  }
}

AuthService.$inject = ['$q', '$timeout'];

export default AuthService;