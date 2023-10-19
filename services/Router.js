const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
            });
        })
    },
    go: (route, addToHistory=true) => {

    }
}
export default Router;