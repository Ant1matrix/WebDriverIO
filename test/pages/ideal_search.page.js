import Page from "./page.js";
import { iDealMainPage } from "../indexation.js";
//Gains access to all methods from Page class (inheritance)

class SearchPage extends Page {
    open() {
        super.open(iDealMainPage); //super - using parent class functionality
    }
    
    get searchButton () {
        return $('#main-header ul.userhub li.link-search a');
    }
    
    get searchInput () {
        return $('div.search-desktop label input[name="q"]');
    }
}

export default new SearchPage();