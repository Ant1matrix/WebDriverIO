import Page from "./page.js";
import { iDealMainPage } from "../indexation.js";

class LoginPage extends Page {
    open () {
        super.open(iDealMainPage);
    }

    get myaccButton (){
        return $$('li.link-account span.bp3-popover-target a span.label')[0];
    }

    get loginButton (){
        return $$('a.menu-item.bp3-menu-item.bp3-popover-dismiss.intent-default')[0];
    }

    get loginTitle () {
        return $('h1.page-title span');
    }

    get emailField () {
        return $('#email');
    }

    get passField () {
        return $('#pass');
    }

    get submitBtn () {
        return $('#send2');
    }

    get alertMsg () {
        return $('div.cart-callout.intent-danger');
    }
}

export default new LoginPage();