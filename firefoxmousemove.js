var util = require('util'),
    webdriver = require('selenium-webdriver');


// Note that this behaves differently depending on the browser - firefox fails,
// chrome works fine.
var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({'browserName': 'firefox'}).
    build();

driver.get('http://juliemr.github.io/webdriver-bugs/');

driver.actions().mouseMove({ x : 0, y : 0}).perform();

driver.get('http://juliemr.github.io/webdriver-bugs/');

driver.actions().mouseMove({ x : 0, y : 0}).perform();

driver.quit();
