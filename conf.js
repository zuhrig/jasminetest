exports.config = {
  // ---------------------------------------------------------------------------
  // ----- How to connect to Browser Drivers -----------------------------------
  // ---------------------------------------------------------------------------
  //
  // Protractor needs to know how to connect to Drivers for the browsers
  // it is testing on. This is usually done through a Selenium Server.
  // There are five options - specify one of the following:
  //
  // 1. seleniumServerJar - to start a standalone Selenium Server locally.
  // 2. seleniumAddress - to connect to a Selenium Server which is already
  //    running.
  // 3. sauceUser/sauceKey - to use remote Selenium Servers via Sauce Labs.
  // 4. browserstackUser/browserstackKey - to use remote Selenium Servers via BrowserStack.
  // 5. directConnect - to connect directly to the browser Drivers.
  //    This option is only available for Firefox and Chrome.

  // ---------------------------------------------------------------------------
  // ----- To connect directly to Drivers --------------------------------------
  // ---------------------------------------------------------------------------
  // Boolean. If true, Protractor will connect directly to the browser Drivers
  // at the locations specified by chromeDriver and firefoxPath. Only Chrome
  // and Firefox are supported for direct connect.
  directConnect: true,
  // Path to the firefox application binary. If null, will attempt to find
  // firefox in the default locations.
  firefoxPath: null,

  // ---------------------------------------------------------------------------
  // ----- What tests to run ---------------------------------------------------
  // ---------------------------------------------------------------------------
  // Use default globals: 'protractor', 'browser', '$', '$$', 'element', 'by'.
  // These also exist as properties of the protractor namespace:
  // 'protractor.browser', 'protractor.$', 'protractor.$$', 'protractor.element',
  // 'protractor.by', and 'protractor.By'.
  // When no globals is set to true, the only available global variable will be
  // 'protractor'.
  noGlobals: false,

  // Spec patterns are relative to the location of this config.
  specs: [
    'specs/*-spec.js'
  ],

  // Patterns to exclude.
  exclude: [],

  // Alternatively, suites may be used. When run without a command line
  // parameter, all suites will run. If run with --suite=smoke or
  // --suite=smoke,full only the patterns matched by the specified suites will
  // run.
  suites: {
    smoke: 'specs/smoketests/*.js',
    full: 'specs/*.js'
  },

  // If you would like protractor to use a specific suite by default instead of
  // all suites, you can put that in the config file as well.
  suite: null,

  // ---------------------------------------------------------------------------
  // ----- How to set up browsers ----------------------------------------------
  // ---------------------------------------------------------------------------
  //
  // Protractor can launch your tests on one or more browsers. If you are
  // testing on a single browser, use the capabilities option. If you are
  // testing on multiple browsers, use the multiCapabilities array.

  // For a list of available capabilities, see
  // https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
  //
  // In addition, you may specify count, shardTestFiles, and maxInstances.
  capabilities: {
    browserName: 'chrome'
  },

  // ---------------------------------------------------------------------------
  // ----- Global test information ---------------------------------------------
  // ---------------------------------------------------------------------------
  //
  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be resolved against this URL (via url.resolve)
  baseUrl: 'http://www.despegar.com',

  // CSS Selector for the element housing the angular app - this defaults to
  // body, but is necessary if ng-app is on a descendant of <body>.
  rootElement: 'body',

  // The timeout in milliseconds for each script run on the browser. This should
  // be longer than the maximum time your application needs to stabilize between
  // tasks.
  allScriptsTimeout: 110000,

  // How long to wait for a page to load.
  getPageTimeout: 100000,

  // A callback function called once configs are read but before any environment
  // setup. This will only run once, and before onPrepare.
  // You can specify a file containing code to run by setting beforeLaunch to
  // the filename string.
  beforeLaunch: function() {
    // At this point, global variable 'protractor' object will NOT be set up,
    // and globals from the test framework will NOT be available. The main
    // purpose of this function should be to bring up test dependencies.
  },

  // A callback function called once protractor is ready and available, and
  // before the specs are executed.
  // If multiple capabilities are being run, this will run once per
  // capability.
  // You can specify a file containing code to run by setting onPrepare to
  // the filename string.
  // onPrepare can optionally return a promise, which Protractor will wait for
  // before continuing execution. This can be used if the preparation involves
  // any asynchronous calls, e.g. interacting with the browser. Otherwise
  // Protractor cannot guarantee order of execution and may start the tests
  // before preparation finishes.
  onPrepare: function() {
    // At this point, global variable 'protractor' object will be set up, and
    // globals from the test framework will be available. For example, if you
    // are using Jasmine, you can add a reporter with:
    //     jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
    //         'outputdir/', true, true));
    //
    // If you need access back to the current configuration object,
    // use a pattern like the following:
    //     return browser.getProcessedConfig().then(function(config) {
    //       // config.capabilities is the CURRENT capability being run, if
    //       // you are using multiCapabilities.
    //       console.log('Executing capability', config.capabilities);
    //     });
    require('jasmine2-custom-message');
  },

  // A callback function called once tests are finished.
  // onComplete can optionally return a promise, which Protractor will wait for
  // before shutting down webdriver.
  onComplete: function() {
    // At this point, tests will be done but global objects will still be
    // available.
  },

  // A callback function called once the tests have finished running and
  // the WebDriver instance has been shut down. It is passed the exit code
  // (0 if the tests passed). This is called once per capability.
  onCleanUp: function(exitCode) {},

  // A callback function called once all tests have finished running and
  // the WebDriver instance has been shut down. It is passed the exit code
  // (0 if the tests passed). afterLaunch must return a promise if you want
  // asynchronous code to be executed before the program exits.
  // This is called only once before the program exits (after onCleanUp).
  afterLaunch: function(exitCode) {},

  // The params object will be passed directly to the Protractor instance,
  // and can be accessed from your test as browser.params. It is an arbitrary
  // object and can contain anything you may need in your test.
  // This can be changed via the command line as:
  //   --params.login.user "Joe"
  params: {
    search: {
      from: 'BUE',
      to: 'RIO'
    }
  },

  // If set, protractor will save the test output in json format at this path.
  // The path is relative to the location of this config.
  resultJsonOutputFile: null,

  // If true, protractor will restart the browser between each test.
  // CAUTION: This will cause your tests to slow down drastically.
  restartBrowserBetweenTests: false,

  // Protractor will track outstanding $timeouts by default, and report them in
  // the error message if Protractor fails to synchronize with Angular in time.
  // In order to do this Protractor needs to decorate $timeout.
  // CAUTION: If your app decorates $timeout, you must turn on this flag. This
  // is false by default.
  untrackOutstandingTimeouts: true,

  // ---------------------------------------------------------------------------
  // ----- The test framework --------------------------------------------------
  // ---------------------------------------------------------------------------

  // Test framework to use. This may be one of:
  // jasmine, mocha or custom.
  //
  // When the framework is set to "custom" you'll need to additionally
  // set frameworkPath with the path relative to the config file or absolute
  //  framework: 'custom',
  //  frameworkPath: './frameworks/my_custom_jasmine.js',
  // See github.com/angular/protractor/blob/master/lib/frameworks/README.md
  // to comply with the interface details of your custom implementation.
  //
  // Jasmine is fully supported as test and assertion frameworks.
  // Mocha has limited support. You will need to include your
  // own assertion framework (such as Chai) if working with Mocha.
  framework: 'jasmine',

  // Options to be passed to jasmine.
  //
  // See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
  // for the exact options available.
  jasmineNodeOpts: {
    // If true, print colors to the terminal.
    showColors: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 300000,
    isVerbose: true
  },

  // See docs/plugins.md
  plugins: [],

  // Turns off WebDriver's environment variables overrides to ignore any
  // environment variable and to only use the configuration in this file.
  // Defaults to `false`
  disableEnvironmentOverrides: false
};
