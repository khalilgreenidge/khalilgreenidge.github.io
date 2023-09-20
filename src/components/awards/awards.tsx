import { FC } from "react";
import "./style.scss"


const Awards: FC = () => {
    return <div className="awards">
        <h1>Awards</h1>
        <ul>
            <li><img id="birms" src="https://intranet.birmingham.ac.uk/staff/images/brand/download/png/crested-wm-full-colour.png"/><span>Distinction in MSc. Computer Science</span></li>
            <li><img id="notts" src="https://www.nottingham.ac.uk/siteelementshomepage/images/logo.svg"/><span>Nottingham Advantage Award</span></li>
            <li><img id="ebay" src="src/assets/ebay.png"/> <span>Global Hackathon (Invent Week) Winner</span></li>
            <li><img id="bb-gov" src="src/assets/coat_of_arms.png"/> <span>Barbados Exhibition Winner (Scholarship)</span></li>
        </ul>
    </div>
}

export default Awards