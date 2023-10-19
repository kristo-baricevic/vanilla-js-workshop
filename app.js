import Store from "./services/Store";
import API from "./services/API";
import { loadData } from "./services/Menu";
import Router from "./services/Router";

window.app = {}
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    loadData();
    app.router.init();
});