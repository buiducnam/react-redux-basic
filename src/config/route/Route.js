import AboutPage from "pages/AboutPage/AboutPage";
import HomePage from "pages/HomePage/HomePage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import ProductPage from "pages/ProductPage/ProductPage";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage />
    },
    {
        path: "/product",
        exact: true,
        main: () => <ProductPage />
    },
    {
        path: "/about",
        exact: true,
        main: () => <AboutPage />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFoundPage />
    },

];

export default routes;