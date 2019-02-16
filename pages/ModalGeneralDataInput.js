const BasePage = require('../utils/basePage');

class InputFakeDataIntogeneralModal extends BasePage {
    fillDataInModalGeneral() {
        describe('clear inputs and then insert right data into general modal', function() {
            this.timeout(50000);
            it('data has been removed and right data inserted into General modal fields', async function() {
                //problem with id - for now i use By.xpath('(//input[contains(@placeholder, "Basic usage")]) - to change
                await driver.wait(until.elementLocated(By.xpath('(//input[contains(@placeholder, "Basic usage")])[1]')), 10000)
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[2]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[2]')).sendKeys(fake().firstName))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[1]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[1]')).sendKeys(fake().firstName))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[3]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[3]')).sendKeys(fake().lastName))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[4]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[4]')).sendKeys(fake().email))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[5]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[5]')).sendKeys(fake().phone))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[6]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[6]')).sendKeys(fake().skype))

                    .then(() => driver.findElement(By.id('PersonalDescription')).clear())
                    .then(() => driver.findElement(By.id('PersonalDescription')).sendKeys(fake().description))


                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[7]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[7]')).sendKeys(fake().phone))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[8]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[8]')).sendKeys(fake().email))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[9]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[9]')).sendKeys(fake().phone))

                    .then(() => driver.findElement(By.id('CitizenshipID')).click())
                    .then(() => driver.wait(until.elementLocated(By.xpath("//li[contains(text(),\"Poland\")]"))))
                    .then(() => driver.findElement(By.xpath("//li[contains(text(),\"Poland\")]")).click())

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[10]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[10]')).sendKeys(fake().phone))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[11]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[11]')).sendKeys(fake().postcode))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[12]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[12]')).sendKeys(fake().address))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[13]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[13]')).sendKeys(fake().address))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[14]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[14]')).sendKeys(fake().city))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[15]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[15]')).sendKeys(fake().city))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[16]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Basic usage")])[16]')).sendKeys(fake().country));
            });
        });
    }
}
module.exports = new InputFakeDataIntogeneralModal();