var util = require('util'),
    webdriver = require('selenium-webdriver');

// Assumes that there is a chromedriver binary in the same directory.
var driver = chrome.createDriver(
    new webdriver.Capabilities({'browserName': 'chrome'}),
    new chrome.ServiceBuilder('./chromedriver').build());

driver.get('http://juliemr.github.io/webdriverjs-bugs/');

driver.findElement(webdriver.By.id('textinput')).sendKeys('-');
driver.findElement(webdriver.By.id('textinput')).sendKeys(webdriver.Keys.MINUS);

driver.quit();
