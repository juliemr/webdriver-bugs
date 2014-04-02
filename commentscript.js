var util = require('util'),
    webdriver = require('selenium-webdriver');

var seleniumAddress = 'http://' + process.env.SAUCE_USER + ':' +
  process.env.SAUCE_KEY + '@ondemand.saucelabs.com:80/wd/hub';

var driver = new webdriver.Builder().
    usingServer(seleniumAddress).
    withCapabilities({
      'username': process.env.SAUCE_USER,
      'accessKey': process.env.SAUCE_KEY,
      'browserName': 'android',
      'platform': 'Linux',
      'version': '4.3',
      'name': 'comment script'
    }).
    build();
// TODO - figure out exactly what Sauce is using to drive android.
// For some reason, this all works on version 4.0, but not higher.

driver.get('http://juliemr.github.io/webdriver-bugs/');

var simpleFn = function() {
  var x = 'hello';
  /* This is a comment */
  var y = ' world';
  return x + y;
};
// This function fails with 'Error communicating with the remote browser'
// it seems to just kill it.

var verySimpleFn = function() { var x = 'hello';/* I am a comment */ var y = ' world'; return x + y; };
// ^ this works, but not simpleFn. The new lines screw it up.

driver.executeScript(simpleFn).then(function (output) {
  console.log('output: ' + output);
});

driver.quit();
