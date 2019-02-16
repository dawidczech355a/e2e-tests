let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
const By = webdriver.By;
let until = webdriver.until;
let fake = require('./fakeData');

class BasePage {
    constructor() {
        global.driver = driver;
        global.By = By;
        global.webdriver = webdriver;
        global.until = until;
        global.fake = fake;
    }
}
module.exports = BasePage;