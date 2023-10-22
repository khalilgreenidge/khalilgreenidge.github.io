import Ticker, {Image} from '../ticker/ticker'
import './style.scss'

const Intro = () => {
    return <section className="intro">
        <div className='section'>
            {bio()}
            {graphics()} 
        </div>
    </section>
}

const socials: Image[] = [
    {
        id: "linkedin",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055",
        link: "https://linkedin.com/in/khalil021"
    },
    {
        id: "github",
        src: "src/assets/github.svg",
        link: "https://github.com/khalilgreenidge"
    },
    {
        id: "stackoverflow",
        src: "https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg",
        link: "https://stackoverflow.com/users/17630139/khalils"
    }
]

const bio = () => {
    return <div className="bio slideLeft">
        <h1>Hi!</h1>
        <h1> I am Khalil Greenidge</h1>
        <h2>Full Stack Software Engineer</h2>
        <p>Fullstack Software Engineer and Artificial Intelligence enthusiast. I love working with technologies such as
            Python, JavaScript, TypeScript, React, NodeJS, Java/SpringBoot, Kotlin, MongoDB/NoSQL, and SQL.
        </p>
        <Ticker images={socials} className='socials' />
    </div>
}

const graphics = () => {
    return <div className="graphics">
        <img src="src/assets/khalil2.png"/>
    </div>
}

export default Intro;