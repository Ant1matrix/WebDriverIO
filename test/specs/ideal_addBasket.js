import { iDealMainPage } from "../indexation.js";
describe('iDeal - add iPhone to basket and remove from basket', () => {
    
    it('should open main URL and verify the title', async () => {
        await browser.url(iDealMainPage+'iphone-15-pro?color=308&erply_storage=8');
        const productLabel = await $('div.frame-ideal__body h1');
        //Expects:
        await expect(productLabel).toHaveText('iPhone 15 Pro');
    });

    it('should check if add to Basket button is clickable', async () => {
        const addButton = await $('div.product-pricing.type02 button');
        //Expects:
        await expect(addButton).toBeClickable();
    });

    it('should click on add to basket and check new page url', async () => {
        const addButton = await $('div.product-pricing.type02 button');
        await addButton.click();
        //Expects:
        await expect(browser).toHaveUrl(iDealMainPage+'crosssell/success/view/productId/8215/');
    });

    it('should check if item counter updated to 1 and for the page to have text sucesfully added', async () => {
        const itmCounter = await $('#main-header  ul.userhub li.link-cart a b.products');
        const succText = await $('div.frame-ideal__pre-cart__message');
        //Expects:
        await expect(itmCounter).toHaveText('1');        
        await expect(succText).toHaveText('Pievienots grozam');
    });

    it('should check the if theres a link in the basket to check out', async () => {
        const itmBasket = await $('#main-header  ul.userhub li.link-cart a');
        //Expects:
        await expect(itmBasket).toHaveLink(iDealMainPage+'checkout/cart/');
    });

    it('should click on the basket icon and check new url', async () => {
        const itmBasket = await $('#main-header  ul.userhub li.link-cart a');       
        await itmBasket.click();
        //Expects:
        await expect(browser).toHaveUrl(iDealMainPage+'checkout/cart/');
    });

    it('should check if theres an iPhone 15 Pro in the basket and if iphone title has link to the product', async () => {
        const iPhoneItm = await $$('div.layout-cart__main tbody tr td p.cart-table-title a')[0];
        //Expects:
        await expect(iPhoneItm).toHaveText('iPhone 15 Pro');
        await expect(iPhoneItm).toHaveLink(iDealMainPage+'iphone-15-pro');
    });

    it('should check if theres remove from basket button and if its clickable', async () => {
        const removeButton = await $('p.cart-table-remove');
        //Expects:
        await expect(removeButton).toBeClickable();
    });

    it('should click on remove button and check if the item counter is 0', async () => {
        const removeButton = await $('p.cart-table-remove');
        const itmCounter = await $('#main-header  ul.userhub li.link-cart a b.products');
        //Expects:
        await removeButton.click();
        await expect(itmCounter).toHaveText('0'); 

    });
});