var util = require('util'),
    webdriver = require('selenium-webdriver');

function mergeInto(src, target) {
  for (var prop in src) {
    target[prop] = src[prop];
  }
  return target;
 }

var CHROME_OPTIONS = {
  'args': ['--js-flags=--expose-gc'],
  'perfLoggingPrefs': {
    'traceCategories': 'v8,blink.console,disabled-by-default-devtools.timeline'
  }
};

var CHROME_MOBILE_EMULATION = {
  'deviceMetrics': {
    'width': 600,
    'height': 960,
    'pixelRatio': 2
  }
};

var ChromeDesktop = {
  browserName: 'chrome',
  chromeOptions: mergeInto(CHROME_OPTIONS, {
    // This only fails on Chrome 44.0 beta.
    'binary': '/Applications/Google Chrome Beta.app/Contents/MacOS/Google Chrome',
    'mobileEmulation': CHROME_MOBILE_EMULATION
  }),
  loggingPrefs: {
    performance: 'ALL',
    browser: 'ALL'
  }
};

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities(ChromeDesktop).
    build();

driver.get('http://juliemr.github.io/webdriver-bugs/');

driver.sleep(1000);

var button = driver.findElement(webdriver.By.id('thebutton'));
button.click();

driver.sleep(2000);
// Note that the click happens correctly if mobile emulation is turned off
// or on Chrome 43.


var messages = driver.findElement(webdriver.By.id('messages'));
messages.getText().then(function(text) {
  console.log('Expected messages to equal "button clicked". Actual value:');
  console.log(text);
});


driver.quit();
