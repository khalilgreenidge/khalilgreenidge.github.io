import { FC } from "react";
import "./style.scss"
import { renderMeeting } from "../contact/contact";

const CLASSNAME = "Footer"

const Footer: FC = () => {

    const renderConnect = (): JSX.Element => 
        <section className={`${CLASSNAME}-col connect`}>
            <h1>Let's Connect</h1>
            <p></p>
            <ul>
                <li>
                    <a href="https://linkedin.com/in/khalil021" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" />
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/khalilgreenidge" target="_blank">
                        <img src="src/assets/github.svg"/>
                        Github
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/17630139/khalils" target="_blank">
                        <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg" />
                    </a>
                </li>
            </ul>
        </section>

    const renderPages = (): JSX.Element => 
        <section className={`${CLASSNAME}-col pages`}>
            <h1>Pages</h1>
            <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
        </section>
    
    const renderContact = (): JSX.Element =>
        <section className={`${CLASSNAME}-col contact`}>
            <h1>Contact me</h1>
            <span>📧 hello@khalilgreenidge.com</span>
            <a className="button" href="/contact">Contact</a>
            {renderMeeting()}
        </section>

    return <footer className={CLASSNAME}>
        <section className={`${CLASSNAME}-container`}>
            {renderConnect()}
            {renderPages()}
            {renderContact()}
        </section>
        <hr />
        <p className={`${CLASSNAME}-copyright`}>Copyright © Khalil Greenidge {new Date().getFullYear()}</p>
    </footer>
}

export default Footer;