import { iDealMainPage } from "../indexation.js";
describe('iDeal search for iPhone 15 Pro', () => {
    
    it('should open main URL and verify the title', async () => {
        await browser.url(iDealMainPage);
        //Expects:
        await expect(browser).toHaveTitle('iDeal - Front page');
    });
    
    it('should click search button and verify input value', async () => {
        const searchButton = await $('#main-header ul.userhub li.link-search a'); //$$ find elemntS (multiple); $ find element (single)
        await searchButton.click();
        //Expects:
        expect(searchButton).toBeClickable();
    });
    it('should add value to search and verify input', async () => {
        const searchInput = await $('div.search-desktop label input[name="q"]');
        await searchInput.addValue('iPhone');
        //Expects:
        expect(searchInput).toHaveValue('iPhone');
    });
});