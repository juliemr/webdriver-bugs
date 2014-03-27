var util = require('util'),
    webdriver = require('selenium-webdriver');


// Note that this behaves differently depending on the browser - safari
// never shows the select as open, firefox never fires the 'change' event,
// and chrome never closes the select.
var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({'browserName': 'chrome'}).
    build();

driver.get('http://juliemr.github.io/webdriver-bugs/');

driver.findElement(webdriver.By.id('theselect')).click();
driver.sleep(2000);

driver.findElement(webdriver.By.css('#theselect option[value="b"]')).click();

driver.sleep(2000);
// Note that no on-change event is fired.

driver.findElement(webdriver.By.css('body')).click();
driver.sleep(1000);

driver.quit();
