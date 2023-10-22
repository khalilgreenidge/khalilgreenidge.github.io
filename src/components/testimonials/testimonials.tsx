import { useRef, useState, useEffect } from "react";
import "./style.scss"

interface Slide {
    name: string,
    avatar: string,
    title: string,
    quote: string
}

const slides: Array<Slide> = [
    {
        "name": "Antonio Alonzi",
        "avatar": "src/assets/antonio.jpeg",
        "title": "Staff Software Engineer, eBay",
        "quote": "I had the pleasure to work with Khalil at eBay for almost one year.\
            I was impressed on how quickly he learned new technologies and became proficient in delivering new functionalities.\
            He's a great colleague to work with, always ready to help and with a can do attitude."
    },
    {
        "name": "Hannah Mohamed",
        "avatar": "src/assets/hannah.jpeg",
        "title": "Senior Software Engineer, eBay",
        "quote": "I have worked with Khalil while he was an intern at eBay. I was deeply impressed with his award winning ideas.\
            He came up with a key business problem that eBay had and proposed a solution, while leading his team to build together \
            a working POC in under a week."
    }
]

const Testimonials = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const ulRef = useRef<HTMLUListElement>(null)
    const ul = ulRef.current
    const navRef = useRef<HTMLElement>(null)
    const nav = navRef.current

    const showSlides = () => {
        if (ul && nav) {
            let slides = ul.querySelectorAll<HTMLLIElement>(".slide");
            let dots = nav.querySelectorAll<HTMLSpanElement>(".dot");

            slides.forEach((slide) => {
                slide.style.display = "none";
            })

            dots.forEach(dot => dot.className = "dot")

            slides[slideIndex].style.display = "block";
            dots[slideIndex].classList.add("active");

        }
    }

    const renderSlides = () => 
        slides.map( (slide, index) => 
            <li className="slide" key={index}>
                <img className="avatar" src={slide.avatar} />
                <h2 className="name">{slide.name}</h2>
                <h4 className="title">{slide.title}</h4>
                <p>{slide.quote}</p>
            </li>
        )
    
    const renderSlideNav = () => 
        <nav ref={navRef}>
            <span className="dot active" onClick={e => setSlideIndex(0)}></span>
            <span className="dot" onClick={e => setSlideIndex(1)}></span>
        </nav>

    useEffect(() => {showSlides()}, [slideIndex])

    return <section className="Testimonials">
        <h1>Testimonials</h1>
        <div className="slide-show">
            <ul ref={ulRef}>
                {renderSlides()}
            </ul>
        </div>
        {renderSlideNav()}
    </section>
}

export default Testimonials;