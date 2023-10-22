import { FC } from "react"
import { Image } from "../../ticker/ticker"



export interface Props{
    image: Image
    title: string
    description: string
    link: string
}


const Card: FC<Props> = ({image, title, description, link}) => 
    <li className="card">
        <img id={image.id} src={image.src} />
        <h4>{title}</h4>
        <p>{description}</p>
        <a className="button" href={link}>Learn More</a>
    </li>


export default Card;