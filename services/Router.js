const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
                const url = event.target.getAttribute("href");
                Router.go(url);
            });
        })
    },
    go: (route, addToHistory=true) => {

    }
}
export default Router;