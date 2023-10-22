import Companies from "../components/companies/companies"
import About from "../components/about/about"
import App from "../components/app/app"
import Contact from "../components/contact/contact"

const routes = [
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "about",
        element: <About />
    },
    {
        path: "awards",
        element: "#"
    },
    {
        path: "blog",
        element: "#"
    },
    {
        path: "companies",
        element: <Companies />,
    },
    {
        path: "contact",
        element: <Contact />
    },
    {
        path: "projects",
        element: "#"
    },
]
export default routes