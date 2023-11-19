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
        path: "contact",
        element: <Contact />
    },
    {
        path: "projects",
        element: <App/>
    },
]
export default routes