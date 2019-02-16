const BasePage = require('../utils/basePage');

class GoToHrAndClickIdeas extends BasePage {
    goToHrThenGoToIdeas() {
        describe('click HR and then click Ideas', function() {
            this.timeout(30000);
            it('HR opened, Ideas opened', async function() {
                await driver.wait(until.elementLocated(By.xpath("//a[contains(@href,\"/hr\")]")), 20000).click();
                await driver.wait(until.elementLocated(By.xpath("//div[contains(text(),\"Ideas\")]")), 20000)
                    .then(() => driver.sleep(5000))
                    .then(() => driver.findElement(By.xpath("//div[contains(text(),\"Ideas\")]")).click());
            });
        });
    }
}
module.exports = new GoToHrAndClickIdeas();