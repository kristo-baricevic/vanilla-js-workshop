import Store from "./services/Store";
import API from "./services/API";
import { loadData } from "./services/Menu";

window.app = {}
app.store = Store;

window.addEventListener("DOMContentLoaded", async () => {
    loadData();
});