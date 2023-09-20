import './styles.scss'
import Ticker, { Image } from '../ticker/ticker';

const images: Image[] = [
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
        src: "src/assets/coat_of_arms.png"
    },
    {
        id: "jobhunters",
        src: "src/assets/jobhunters.png"
    }
]

const Companies = () => {
    return <div className="companies">
        <h1>Companies</h1>
        <Ticker images={images}/>
    </div>;
}

export default Companies;