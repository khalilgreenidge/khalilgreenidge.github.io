import { FC } from "react";
import "./style.scss"


const About: FC = () => {
    const renderCover = () =>
        <section className="intro">
            <div className="graphics">
                <img src="src/assets/khalil3.jpg"/>
            </div>
            <div className="bio slideright">
                <span>About me</span>
                <h1>I'm Khalil Greenidge, a Full Stack Software Engineer.</h1>
                <p>Here's my Story.</p>
            </div>
        </section>

    const renderMyStory = () => 
        <section className="mystory">
            <h1>My Story</h1>
            <article>
                <p>
                    While growing up as a toddler, my parents would often buy me numerous electronic toys, just to keep me active during vacation while I got lonely.  
                    My uncle – who was a computer technician – would babysit me while I would marvel at how he fixed and operated his clients’ electronic devices. 
                    During the Christmas holidays, I would often receive puzzles as presents. This exposure ignited an inextinguishable flame of passion for computers.
                    As you may have guessed, building web applications or starting a business is like solving a puzzle - you have to figure out how all the puzzle pieces fit together.
                    The difference is, these puzzles are bigger and much more complex. This is my origin story.
                </p>
                <img src="src/assets/puzzle.webp" id="puzzle" />
            </article>
            <article>
                <p>
                    As time progressed, this passion for Software Engineering increased. Previously, I was a C/D student who often had poor grades at the bottom of the class.
                    Everything changed as I focused my energy on Computer Science. In college, my passion paid its dividends as I received a 3.98 GPA out of 4.0. I was the top student in 
                    Computer Science and was awarded Barbados' Prestigious National Exhibition Scholarship. Later on, I began to be selected for numerous other scholarships and awards such as the 
                    <a href="https://www.errolandnitabarroweducationaltrust.org/purpose-awardees/#cc-m-header-8030595762"> Errol & Nita Barrow Education Trust Award</a>, and 
                    <a href='https://blackheartfoundation.org/scholars-2020-2021/'> The Black Heart Foundation Scholarship</a>. In 2020, when I completed my Master's in Computer Science, I received a 
                    a Distinction. As I began to enter the world of work, my expertise was recognised throughout my internship at eBay, where I led a team of individuals for eBay's Global Hackweek project, and was awarded by the company's executive leadership team.
                </p>
                <img src="src/assets/grad.jpeg" id="puzzle" />
            </article>
        </section>
    

    return <div className="about">
        {renderCover()}
        {renderMyStory()}
    </div>
}

export default About