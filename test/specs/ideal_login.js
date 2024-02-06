import { iDealMainPage } from "../resources/index.js";
import LoginPage from "../pages/ideal_login.page.js";

describe('iDeal login', () => {
    
    before(() => {
        LoginPage.open();
    });
    
    it('should open main URL and verify the title', async () => {
        await expect(browser).toHaveTitle('iDeal - Front page');
    });
    
    it('should click on my account and verify login button to be displayed', async () => {
        await LoginPage.myaccButton.click();
        await expect(LoginPage.loginButton).toBeDisplayed();
    });
    
    it('should click the login button and verify new url', async () => {       
        await LoginPage.loginButton.click();
        await expect(browser).toHaveUrl(iDealMainPage+'customer/account/login/referer/aHR0cHM6Ly93d3cuaWRlYWwubHYv/');
    });
    
    it('should check the web-page to have title LOGIN', async () => {
        await expect(LoginPage.loginTitle).toHaveText('Pieslēgties');
    });
    
    it('should type in test email and pass, and check if submit is clickable', async () => {
        await LoginPage.emailField.addValue('test@test.com');
        await LoginPage.passField.addValue('testpass');
        await expect(LoginPage.submitBtn).toBeClickable();
    });
    
    it('should click on submit button and receive a warning message', async () => {
        await LoginPage.submitBtn.click();
        await LoginPage.alertMsg.waitForExist({timeout:1000});
        await expect(LoginPage.alertMsg).toHaveText('Pierakstīšanās kontā nebija veiksmīga un jūsu konts uz laiku ir slēgts. Lūdzu, uzgaidiet un vēlāk mēģiniet vēlreiz.');
    });
});