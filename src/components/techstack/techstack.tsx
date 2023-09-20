import { FC } from "react"
import Ticker, {Image} from "../ticker/ticker"
import "./style.scss"

const images: Image[] = [
    {
        id: "react",
        src: "src/assets/react.svg"
    },
    {
        id: "javascript",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
    },
    {
        id: "typescript",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/240px-Typescript_logo_2020.svg.png"
    },
    {
        id: "nodejs",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"
    },
    {
        id: "python",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png"
    },
    {
        id: "java",
        src: "src/assets/java.png"
    },
    {
        id: "kotlin",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kotlin_logo.svg/2560px-Kotlin_logo.svg.png"
    },
    {
        id: "spring",
        src: "src/assets/spring.png"
    },
    {
        id: "graphql",
        src: "src/assets/graphql.png"
    },
    {
        id: "mysql",
        src: "src/assets/mysql.png"
    },
    {
        id: "mongo",
        src: "src/assets/mongo.png"
    }
]

const TechStack: FC = () => {
    return <div className="Techstack"><Ticker images={images} className="techstack" /></div>
}

export default TechStack