import {createBrowserRouter} from "react-router-dom"

import routes from "../utils/routes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: routes.home.element},
            { path: routes.about.path, element: routes.about.element},
            { path: routes.work.path, element: routes.work.element},
            { path: routes.contact.path, element: routes.contact.element},
        ]
    }
])