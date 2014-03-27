var util = require('util'),
    webdriver = require('selenium-webdriver');

// Assumes that there is a chromedriver binary in the same directory.
var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({'browserName': 'safari'}).
    build();

driver.get('http://juliemr.github.io/webdriver-bugs/');

driver.findElement(webdriver.By.id('numberinput')).sendKeys('-');
driver.findElement(webdriver.By.id('numberinput')).sendKeys(webdriver.Key.SUBTRACT);
driver.findElement(webdriver.By.id('numberinput')).sendKeys('.');
driver.findElement(webdriver.By.id('numberinput')).sendKeys('6');


driver.sleep(5000);

driver.findElement(webdriver.By.id('numberinput')).getAttribute('value').
    then(function(value) {
      // Expected output: --.6
      // Actual output: 6
      console.log('value: ' + value);
    });

driver.quit();
