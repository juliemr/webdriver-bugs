var util = require('util'),
    webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({'browserName': 'safari'}).
    build();

// driver.get('http://juliemr.github.io/webdriver-bugs/');
driver.get('data:text/html,<html></html>').then(function() {
  console.log('finished getting the data url');
});

driver.getCurrentUrl().then(function(url) {
  console.log('current url: ' + url);
})
// ^ times out

driver.quit();
