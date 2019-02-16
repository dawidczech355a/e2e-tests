const BasePage = require('../utils/basePage');

class InputFakeDataIntoRecruitmentModal extends BasePage {
    fillDataInModalRecruitment() {
        describe('clear inputs and then insert right data into Recruitment modal', function() {
            this.timeout(50000);
            it('data has been removed and right data entered', async function() {
                await driver.wait(until.elementLocated(By.xpath("//div[contains(text(),\"Recruitment\")]")), 10000)
                    .then(() => driver.findElement(By.xpath("//div[contains(text(),\"Recruitment\")]")).click());
                await driver.wait(until.elementLocated(By.id('InterviewNotes')), 10000)
                    .then(() => driver.findElement(By.id('InterviewNotes')).clear())
                    .then(() => driver.findElement(By.id('InterviewNotes')).sendKeys(fake().description))

                    .then(() => driver.findElement(By.id('ReferenceDetails')).clear())
                    .then(() => driver.findElement(By.id('ReferenceDetails')).sendKeys(fake().description))

                    .then(() => driver.findElement(By.className('add-user__button')).click());
            })
        })
    }
}
module.exports = new InputFakeDataIntoRecruitmentModal();