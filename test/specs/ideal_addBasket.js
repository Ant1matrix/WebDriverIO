import { iDealMainPage } from "../indexation.js";
import AddBasketPage from "../pages/ideal_addBasket.page.js";

describe('iDeal - add iPhone to basket and remove from basket', () => {
    
    before(() => {
        AddBasketPage.open();
    });
    
    it('should open Product URL and verify the title', async () => {
        await expect(AddBasketPage.productLabel).toHaveText('iPhone 15 Pro');
    });

    it('should check if add to Basket button is clickable', async () => {
        await expect(AddBasketPage.addButton).toBeClickable();
    });

    it('should click on add to basket and check new page url', async () => {
        await AddBasketPage.addButton.click();
        await expect(browser).toHaveUrl(iDealMainPage+'crosssell/success/view/productId/8215/');
    });

    it('should check if item counter updated to 1 and for the page to have text sucesfully added', async () => {
        await expect(AddBasketPage.itmCounter).toHaveText('1');        
        await expect(AddBasketPage.succText).toHaveText('Pievienots grozam');
    });

    it('should click on the basket icon and check new browser url', async () => {
        await AddBasketPage.itmBasket.click();
        await expect(browser).toHaveUrl(iDealMainPage+'checkout/cart/');
    });

    it('should check if theres an iPhone 15 Pro in the basket and if iphone title has link to the product', async () => {
        await expect(AddBasketPage.iPhoneItm).toHaveText('iPhone 15 Pro');
        await expect(AddBasketPage.iPhoneItm).toHaveLink(iDealMainPage+'iphone-15-pro');
    });

    it('should check if theres remove from basket button and if its clickable', async () => {
        await expect(AddBasketPage.removeButton).toBeClickable();
    });

    it('should click on remove button and check if the item counter is 0', async () => {
        await AddBasketPage.removeButton.click();
        await expect(AddBasketPage.itmCounter).toHaveText('0'); 

    });
});