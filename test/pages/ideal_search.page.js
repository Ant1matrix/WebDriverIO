import Page from "./page.js";
import {iDealMainPage} from "../resources/index.js";

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