var util = require('util'),
    webdriver = require('selenium-webdriver');

// Assumes that there is a chromedriver binary in the same directory.
var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({'browserName': 'safari'}).
    build();

driver.get('http://juliemr.github.io/webdriverjs-bugs/');

driver.findElement(webdriver.By.id('textinput')).sendKeys('-');
driver.findElement(webdriver.By.id('textinput')).sendKeys(webdriver.Keys.MINUS);

driver.quit();
