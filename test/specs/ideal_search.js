import SearchPage from '../pages/ideal_search.page.js';
import {forSearch} from '../resources/index.js';

describe('iDeal search for iPhone 15 Pro', () => {
    
    before(() => {
        SearchPage.open(); 
    });
    
    it('should open main URL and verify the title', async () => {
        await expect(browser).toHaveTitle(forSearch.homeTitle);
    });
    
    it('should click search button and check if search bar is desplayed', async () => {
        await SearchPage.searchButton.click();
        SearchPage.searchInput.waitForDisplayed({timeout: 1000});
        expect(SearchPage.searchInput).toBeDisplayed();
    });
    
    it('should add value to search and verify input', async () => {
        await SearchPage.searchInput.addValue('iPhone');
        expect(SearchPage.searchInput).toHaveValue('iPhone');
    });
});