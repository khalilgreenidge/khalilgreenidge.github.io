import { FC } from "react";
import "./style.scss"


const Awards: FC = () => {
    return <section className="awards" id="awards">
        <h1>Awards</h1>

        <div className="awards-container">
            <ul>
                <li><img id="birms" src="https://intranet.birmingham.ac.uk/staff/images/brand/download/png/crested-wm-full-colour.png"/><span>Distinction in MSc. Computer Science</span></li>
                <li><img id="notts" src="https://www.nottingham.ac.uk/siteelementshomepage/images/logo.svg"/><span>Nottingham Advantage Award</span></li>
                <li><img id="notts" src="https://www.nottingham.ac.uk/siteelementshomepage/images/logo.svg"/><span>Professional development for leadership & Management</span></li>
                <li><img id="notts-council" src="https://www.nottinghamcity.gov.uk/media/btel5rux/ncc-logo.png"/><span>Entrepreneurial contribution by Nottingham Council</span></li>
            </ul>
            <ul>
                <li><img id="ebay" src="src/assets/ebay.png"/> <span>Global Hackathon (Invent Week) Winner</span></li>
                <li><img id="bb-gov" src="src/assets/coat_of_arms.png"/> <span>Barbados Exhibition Winner (Scholarship)</span></li>
                <li><img id="bb-gov" src="src/assets/coat_of_arms.png"/> <span>Errol and Nita Barrow Scholarship</span></li>
                <li><img id="bb-gov" src="https://blackheartfoundation.org/wp-content/uploads/2018/07/cropped-The-Black-Heart-Logo-complete.png"/> <span>Black Heart Foundation Scholarship</span></li>
            </ul>
        </div>
        
    </section>
}

export default Awards