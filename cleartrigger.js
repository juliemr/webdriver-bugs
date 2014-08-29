var util = require('util'),
    webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({'browserName': 'safari'}).
    build();

// driver.get('http://juliemr.github.io/webdriver-bugs/');
driver.get('http://localhost:1234');

driver.findElement(webdriver.By.id('numberinput')).sendKeys('3');
// ^ triggers an 'input' and a 'keydown'

driver.sleep(3000);

driver.findElement(webdriver.By.id('numberinput')).clear();
// ^ triggers a 'change'

// The problem here is that angular listens for input if that exists, and
// if not, listens for keydown.
// https://github.com/angular/angular.js/blob/b472d0275f2900beba3b1f2fcee821369f8c15c1/src/ng/directive/input.js

driver.findElement(webdriver.By.id('numberinput')).getAttribute('value').
    then(function(value) {
      console.log('first value: ' + value);
    });

driver.sleep(3000);


driver.findElement(webdriver.By.id('numberinput')).sendKeys('4');
driver.findElement(webdriver.By.id('numberinput')).getAttribute('value').
    then(function(value) {
      console.log('second value: ' + value);
    });

driver.sleep(3000);

driver.quit();
