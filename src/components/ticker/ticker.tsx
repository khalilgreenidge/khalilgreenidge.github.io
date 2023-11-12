import { FC } from "react"
import "./style.scss"

export interface Image {
    id: string
    src: string
    link?: string
}

interface Props {
    images: Image[]
    className?: string
}

const Ticker: FC<Props> = ({images, className}) => {
    const items = images.map( (image, index) => {
        const img = <img id={image.id} src={image.src} />
        const listItem = image.link ? <a href={image.link} target="_blank">{img}</a> : img
        return <li key={index}>{listItem}</li>
    });
    const newClassName = className ? "ticker "+ className : "ticker"
    return (<ul className={newClassName}>{items}</ul>)
}

export default Ticker