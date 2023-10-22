import { FC, RefObject } from "react";
import './style.scss'
import Deck from "../deck/deck";
import { Props as CardType} from "../deck/card/card";


const Projects: FC = () => {

    const masters = (): CardType => {
        const image = {
            id: "masters", 
            src: "https://github.com/khalilgreenidge/Content-based-Recommendation-System/raw/main/imgs/dashboard.JPG"
        }
        return {
            image: {...image}, 
            title: "Content Recommender System",
            description: "The following project contains a web application that leverages Artificial Intelligence such as Machine Learning, Natural Language Processing, and Information Retrieval. The following contains a detailed guide on how to run my project.",
            link: "https://github.com/khalilgreenidge/Content-based-Recommendation-System"
        }
    }

    const ims = (): CardType => {
        const image = {
            id: "ims", 
            src: "https://github.com/khalilgreenidge/Inventory-Management-System/raw/main/dist/img/dashboard-screenshot.png"
        }
        return {
            image: {...image}, 
            title: "Inventory Management System",
            description: "This application was built to solve the problem of tracking the company's inventory in an efficient manner. Previously, their inventory were tracked using pen and paper.",
            link: "https://github.com/khalilgreenidge/Inventory-Management-System"
        }
    }

    const bimtravel = (): CardType => {
        const image = {
            id: "ims", 
            src: "https://github.com/khalilgreenidge/BIMTravel/raw/main/imgs/dashboard-screenshot.png"
        }
        return {
            image: {...image}, 
            title: "Bus Tracker System",
            description: "This project contains information containing a Bus Tracking System I architected using an Arduino board which was programmed using C++, PHP, Javascript, Google Maps API, CSS, HTML",
            link: "https://github.com/khalilgreenidge/BIMTravel"
        }
    }

    const sis = (): CardType => {
        const image = {
            id: "sis", 
            src: "https://user-images.githubusercontent.com/76123540/270191098-675b4ec0-0c76-43e9-ac7e-103d99cbcb2d.png"
        }
        return {
            image: {...image}, 
            title: "Student Information System",
            description: "This project contains a web-based Student Information System (SIS), similar to Moodle. This was created to allow tutor and students to interact online.",
            link: "https://github.com/khalilgreenidge/sis"
        }
    }

    const cards: CardType[] = [masters(), ims(), sis(), bimtravel()]

    return (
        <section className="projects">
            <h1>Projects</h1>   
            <Deck cards={cards} />
        </section>
    )
}

export default Projects;