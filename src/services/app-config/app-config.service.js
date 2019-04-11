class AppConfig {
  constructor() {
    this.userEmail = null;
    this.load(); // load data from sessionStorage
  }
  load() {
    try {
      const config = angular.fromJson(sessionStorage.getItem('appConfig'));
      /**
       * `angular.extend(dst, src)`
       * Extends the destination object dst by copying own enumerable properties from the src object(s) to dst.
       */
      return angular.extend(this, config);
    } catch (e) {
      console.log(e);
    }
    return this;
  }
  save() {
    console.log(angular.toJson(this));
    sessionStorage.setItem(
      'appConfig',
      angular.toJson(angular.extend({}, this))
    );
  }
}

export default AppConfig;
