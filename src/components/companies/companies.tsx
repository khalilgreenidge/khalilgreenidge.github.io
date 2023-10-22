import Ticker, { Image } from '../ticker/ticker';
import { useState, useRef } from 'react';
import './styles.scss'

const images: Image[] = [
    {
        id: "jobhunters",
        src: "src/assets/jobhunters.png"
    },
    {
        id: "ebay",
        src: "src/assets/ebay.png"
    },
    {
        id: "sonymusic",
        src: "https://www.sonymusic.co.uk/wp-content/themes/legion/dist/ca8e2f917bfe8d30982f.png"
    },
    {
        id: "theorchard",
        src: "src/assets/theorchard.png"
    },
    {
        id: "bb-gov",
        src: "src/assets/gov-bb.png"
    },
]

const Companies = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const divRef = useRef(null);

    return <section className="companies">
        <h1>Companies</h1>
        <Ticker images={images}/>
    </section>;
}

export default Companies;