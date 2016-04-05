var util = require('util'),
    webdriver = require('selenium-webdriver');


// Note that this behaves differently depending on the browser - firefox fails,
// chrome works fine.
var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({'browserName': 'firefox'}).
    build();

driver.get('http://juliemr.github.io/webdriver-bugs/');

driver.actions().mouseMove(driver.findElement(webdriver.By.id('textinput'))).doubleClick().perform();

driver.sleep(5000);

driver.get('http://juliemr.github.io/webdriver-bugs/');

driver.actions().mouseMove(driver.findElement(webdriver.By.id('theselect'))).doubleClick().perform();

driver.sleep(5000);

driver.quit();
