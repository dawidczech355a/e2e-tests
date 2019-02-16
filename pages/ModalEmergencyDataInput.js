const BasePage = require('../utils/basePage');

class InputFakeDataIntoEmergencyModal extends BasePage {
    fillDataInModalEmergency() {
        describe('clear inputs and then insert right data into Emergency modal', function() {
            this.timeout(50000);
            it('data has been removed and right data entered', async function() {
                await driver.wait(until.elementLocated(By.xpath("//div[contains(text(),\"Emergency\")]")), 10000)
                    .then(() => driver.findElement(By.xpath("//div[contains(text(),\"Emergency\")]")).click());
                await driver.wait(until.elementLocated(By.id('NKName')), 10000)
                    .then(() => driver.findElement(By.id('NKName')).clear())
                    .then(() => driver.findElement(By.id('NKName')).sendKeys(fake().firstName))

                    .then(() => driver.findElement(By.id('NKSurname')).clear())
                    .then(() => driver.findElement(By.id('NKSurname')).sendKeys(fake().lastName))

                    .then(() => driver.findElement(By.id('NKRelationship')).clear())
                    .then(() => driver.findElement(By.id('NKRelationship')).sendKeys(fake().firstName + ' ' + fake().lastName))

                    .then(() => driver.findElement(By.id('NKEmail')).clear())
                    .then(() => driver.findElement(By.id('NKEmail')).sendKeys(fake().email))

                    .then(() => driver.findElement(By.id('NKPhone')).clear())
                    .then(() => driver.findElement(By.id('NKPhone')).sendKeys(fake().phone))

                    .then(() => driver.findElement(By.id('BloodTypeID')).click())
                    .then(() => driver.findElement(By.xpath("(//li[contains(@class, \"ant-select-dropdown-menu-item\")])[3]")).click())

                    .then(() => driver.findElement(By.id('EvacLocation')).clear())
                    .then(() => driver.findElement(By.id('EvacLocation')).sendKeys(fake().description))

                    .then(() => driver.findElement(By.id('MedicalNotes')).clear())
                    .then(() => driver.findElement(By.id('MedicalNotes')).sendKeys(fake().description));
            })
        })
    }
}
module.exports = new InputFakeDataIntoEmergencyModal();