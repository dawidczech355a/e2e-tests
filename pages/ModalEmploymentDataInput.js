const BasePage = require('../utils/basePage');

class InputFakeDataIntoEmploymentModal extends BasePage {
    fillDataInModalGeneral() {
        describe('go to Employment and insert data', function() {
            this.timeout(50000);
            it('data has been removed and right data inserted', async function() {
                await driver.wait(until.elementLocated(By.xpath("//div[contains(text(),\"Employment\")]")), 5000)
                    .then(() => driver.findElement(By.xpath("//div[contains(text(),\"Employment\")]")).click());
                await driver.wait(until.elementLocated(By.id('Role')), 5000)
                    .then(() => driver.findElement(By.id('Role')).clear())
                    .then(() => driver.findElement(By.id('Role')).sendKeys(fake().firstName))
            });
        });
    }
}
module.exports = new InputFakeDataIntoEmploymentModal();