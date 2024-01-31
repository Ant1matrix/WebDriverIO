//import { iDealMainPage } from "../indexation.js";
import SearchPage from '../pages/ideal_search.page.js';
describe('iDeal search for iPhone 15 Pro', () => {
    before(() => {
        SearchPage.open(); 
    });
    it('should open main URL and verify the title', async () => {
        //Expects:
        await expect(browser).toHaveTitle('iDeal - Front page');
    });
    
    it('should click search button and verify input value', async () => { //!!Change tobeclickable to checking if the bar is showing
        await SearchPage.searchButton.click();
        //Expects:
        expect(SearchPage.searchButton).toBeClickable();
    });
    it('should add value to search and verify input', async () => {
        await SearchPage.searchInput.addValue('iPhone');
        //Expects:
        expect(SearchPage.searchInput).toHaveValue('iPhone');
    });
});