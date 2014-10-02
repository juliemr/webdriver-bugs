var util = require('util'),
    webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({'browserName': 'chrome'}).
    build();

driver.get('http://juliemr.github.io/webdriver-bugs/indexwangular.html');
// driver.get('http://localhost:8090/indexwangular.html');

driver.findElement(webdriver.By.id('onfocusinput')).click();
driver.findElement(webdriver.By.css('body')).click();
driver.findElement(webdriver.By.id('onfocusinput')).click();

// As far as I can tell, this is working just fine.

driver.sleep(5000);

driver.quit();
