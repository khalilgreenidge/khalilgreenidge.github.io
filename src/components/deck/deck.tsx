import { FC } from "react";
import Card, {Props as CardProps} from "./card/card";
import './style.scss'

interface Props {
    cards: CardProps[];
};

const Deck: FC<Props> = ({cards}) => {
    const listItems = cards.map( ({image, title, description, link}, index) => (
        <Card key={index} image={image} title={title} description={description} link={link}/>
    ));
    return <ul className="Deck">
        {listItems}
    </ul>
}

export default Deck;