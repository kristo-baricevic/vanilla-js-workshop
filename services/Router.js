const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
                const url = event.target.getAttribute("href");
                Router.go(url);
            });
        })
        // Check the initial URL
        Router.go(location.pathname);
    },
    go: (route, addToHistory=true) => {
        console.log(`Going to ${route}`);

        if (addToHistory) {
            history.pushState({ route }, '', route);
        }
        let pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Menu";
                break;
            case "/order":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Your Order";
                break;
        }
        document.querySelectorAll("main").innerHTML = "";
        document.querySelectorAll("main").appendChild(pageElement);



    }
}
export default Router;