import Store from "./services/Store";
import API from "./services/API";
import { loadData } from "./services/Menu";
import Router from "./services/Router";

//Important my components
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { DetailPage } from "./components/DetailPage.js";
import ProductItem from "./components/ProductItem";


window.app = {}
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    loadData();
    app.router.init();
});