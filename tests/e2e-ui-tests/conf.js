exports.config = {
  allScriptsTimeout: 20000,
  mobileURL: '',
  portalURL: '',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    reporter: 'spec',
    slow: 5000,
    timeout: 60000,
    bail: true,
    watch: true,
    require: require('mocha-steps')
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // suites: {
  //   mobile: 'tests/mobile/*.js',
  //   portal: 'tests/portal/*.js',
  //   mobile_portal: 'tests/mobile-portal/*.js'
  // },
  specs: ['tests/portal/workflow.spec.js'],
  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      prefs: {
        'credentials_enable_service': false,
        'profile': {
          'password_manager_enabled': false
        }
      },
      args: [
        'no-sandbox',
        'user-data-dir=/tmp/chrome',
        'no-default-browser-check',
        'unlimited-storage',
        'disable-cache',
        'disable-application-cache',
        'disable-offline-load-stale-cache',
        'disk-cache-size=0',
        'v8-cache-options=off'
      ]
    },
    defaultPageLoadTimeout: 10000,
    defaultImplicitWait: 2000
  },
  onPrepare: function setup() {
    return browser.driver.executeScript(function() {
      window.sessionStorage.clear();
      window.localStorage.clear();
      return {
        width: window.screen.availWidth,
        height: window.screen.availHeight,
      };
    // }).then(function(result) {
    //   console.log('Browser Max Window Size', result);
    //   browser.driver.manage().window().setSize(result.width, result.height);
    }).then(function() { // setup expect as global
      var chai = require('chai');
      var chaiAsPromised = require('chai-as-promised');
      chai.use(chaiAsPromised);
      global.expect = chai.expect;
    });
  }
};
