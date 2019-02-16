const BasePage = require('../utils/basePage');
//let newEmployeeFirstName;

class InputFakeDataIntoAddOrEditRecruitment extends BasePage {
    fillDataInModalAddOrEditEmployee() {
        describe('opened add/edit modal for recruitment, add new Employee and choose him', function() {
            this.timeout(50000);
            it('Add new Employee and add him for recruitment', async function() {
                await driver.wait(until.elementLocated(By.xpath('(//input[contains(@class, "ant-input ant-input-lg")])[2]')), 30000)
                    .then(() => driver.findElement(By.xpath('(//input[contains(@class, "ant-input ant-input-lg")])[2]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@class, "ant-input ant-input-lg")])[2]')).sendKeys(fake().firstName));
                    let newEmployeeFirstName = driver.findElement(By.xpath('(//input[contains(@class, "ant-input ant-input-lg")])[2]')).getAttribute("value");

                await driver.findElement(By.xpath('(//input[contains(@class, "ant-input ant-input-lg")])[3]')).clear()
                    .then(() => driver.findElement(By.xpath('(//input[contains(@class, "ant-input ant-input-lg")])[3]')).sendKeys(fake().lastName))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@class, "ant-input ant-input-lg")])[4]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@class, "ant-input ant-input-lg")])[4]')).sendKeys(fake().email))

                    .then(() => driver.findElement(By.xpath('(//input[contains(@class, "ant-input ant-input-lg")])[5]')).clear())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@class, "ant-input ant-input-lg")])[5]')).sendKeys(fake().title))

                    //.then(() => driver.findElement(By.id('OfficeID')).click())
                    //right there should be office picker - 

                    //then(() => driver.findElement(By.xpath('//span[contains(text(), \"Add\")]')).click())
                    .then(() => driver.findElement(By.xpath('(//input[contains(@placeholder, "Enter user name")])')).sendKeys(newEmployeeFirstName))

                    .then(() => driver.findElement(By.xpath('(//button[contains(@type, "button")])[2]')).click());
                    //then(() => driver.findElement(By.xpath('//span[contains(text(), \"OK\")]')).click());
                    
            })
        })
    }
}
module.exports = new InputFakeDataIntoAddOrEditRecruitment();