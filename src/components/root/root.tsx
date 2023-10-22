import Footer from "../footer/footer"
import Menu from "../menu/menu"
import { Outlet } from "react-router-dom"

const Root = () => {
    return (<>
        <Menu/>
        <Outlet />
        <Footer />
    </>)
}

export default Root;