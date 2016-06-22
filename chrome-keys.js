var util = require('util'),
    webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({'browserName': 'chrome'}).
    build();

// driver.get('http://juliemr.github.io/webdriver-bugs/');
driver.get('http://localhost:8111/button.html');

driver.findElement(webdriver.By.css('button')).click();

driver.actions().sendKeys(webdriver.Key.RIGHT).perform();

driver.sleep(4000);

driver.quit();
