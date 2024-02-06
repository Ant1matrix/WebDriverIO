import Page from "./page.js";
import { iDealMainPage } from "../resources/index.js";

class AddBasketPage extends Page {
    open () {
        super.open(iDealMainPage+'iphone-15-pro?color=308&erply_storage=8');
    }

    get productLabel () {
        return $('div.frame-ideal__body h1');
    }

    get addButton () {
        return $('div.product-pricing.type02 button');
    }

    get itmCounter () {
        return $('#main-header  ul.userhub li.link-cart a b.products');
    }

    get succText () {
        return $('div.frame-ideal__pre-cart__message');
    }

    get itmBasket () {
        return $('#main-header  ul.userhub li.link-cart a');
    }

    get iPhoneItm () {
        return $$('div.layout-cart__main tbody tr td p.cart-table-title a')[0];
    }

    get removeButton () {
        return $('p.cart-table-remove');
    }
}

export default new AddBasketPage();