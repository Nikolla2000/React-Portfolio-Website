import {createBrowserRouter} from "react-router-dom"

import routes from "../utils/routes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RootLayout from "./RootLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: routes.home.element},
            { path: routes.about.path, element: routes.about.element},
            { path: routes.work.path, element: routes.work.element},
            {path: routes.singleProjectPage.path, element: routes.singleProjectPage.element},
            { path: routes.contact.path, element: routes.contact.element},
        ]
    }
])

export default Router