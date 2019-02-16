const BasePage = require('../utils/basePage');
const loginName = 'demo@symplete.com';
const loginPassword = 'demo#user17';

    class HomePage extends BasePage {

        homePage() {
        describe('open page and log in', function() {
            this.timeout(50000);
            before(function() {
                driver.navigate().to('http://localhost:3000/');
                driver.manage().window().maximize();
            });
            it('Insert email and password and account selection', async function() {
                await driver.wait(until.elementLocated(By.name('email')), 10000)
                    .then(() => driver.findElement(By.name('email')).sendKeys(loginName))
                    .then(() => driver.findElement(By.name('password')).sendKeys(loginPassword))
                    .then(() => driver.findElement(By.className('login-form-button')).click())
                    .then(() => driver.sleep(1000))
                    .then(() => driver.wait(until.elementLocated(By.className('ant-card-body')), 10000))
                    .then(() => driver.findElement(By.xpath("(//div[contains(@class,\"ant-card-body\")])[2]")).click());
            });
        });
    }
    }
    module.exports = new HomePage();