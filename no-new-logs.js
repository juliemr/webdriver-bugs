var util = require('util'),
    webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({'browserName': 'chrome'}).
    build();

driver.get('http://juliemr.github.io/webdriver-bugs/');

driver.manage().logs().get('browser').then(function(logs) {
  console.log('------ first logs:');
  console.log(logs);
});

driver.sleep(10000);

driver.manage().logs().get('browser').then(function(logs) {
  // The page logs a second error in the past 10 seconds, but these are emtpy.
	console.log('------ second logs:');
	console.log(logs);
});

driver.quit();
