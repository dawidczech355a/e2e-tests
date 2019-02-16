const BasePage = require('../utils/basePage');
const ModalGeneralDataInput = require('../pages/ModalGeneralDataInput');

class ClearingDataFromGeneralModal extends BasePage {
    clearingData() {
        describe('remove inputed data', function() {
            this.timeout(50000);
            it('data has been removed', async function() {
                await driver.wait(until.elementLocated(By.id('Name')), 10000)
                    if(driver.findElement(By.id('Name')).getText().length != 0) {
                        driver.findElement(By.id('Name')).clear();
                        driver.findElement(By.id('MiddleName')).clear();
                        driver.findElement(By.id('Surname')).clear();
                        driver.findElement(By.id('Email')).clear();
                        driver.findElement(By.id('WorkPhone')).clear();
                        driver.findElement(By.id('PersonalSkype')).clear();
                        driver.findElement(By.id('PersonalDescription')).clear();
                        driver.findElement(By.id('HomePhone')).clear();
                        driver.findElement(By.id('PersonalEmail')).clear();
                        driver.findElement(By.id('Mobile')).clear();
                    }    
            });
        });
    }
}
module.exports = new ClearingDataFromGeneralModal();