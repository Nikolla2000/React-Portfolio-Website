import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import PortfolioPage from "../Pages/PortfolioPage/PortfolioPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleProjectPage from "../Pages/PortfolioPage/singleProjectPage/SingleProjectPage";

const routes = {
    home: {
        path: "/",
        element: <HomePage/>,
        name: "home",
        includeInNav: true,
    },
    about: {
        path: "/about",
        element: <AboutPage/>,
        name: "about",
        includeInNav: true,
    },
    work: {
        path: "/portfolio",
        element: <PortfolioPage/>,
        name: "portfolio",
        includeInNav: true,
    },
    singleProjectPage: {
        path: "/portfolio/project/:projectId",
        element: <SingleProjectPage/>,
        name: "",
        includeInNav: false,
    },
    contact: {
        path: "/contact",
        element: <ContactPage/>,
        name: "lets talk",
        includeInNav: true,
    },
    errorPage: {
        path: "/error",
        element: <ErrorPage/>,
        name: "errorPage",
        includeInNav: false,
    }
}

export default routes