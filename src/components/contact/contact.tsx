import './style.scss'
import { useParams } from 'react-router-dom'
import { PopupButton } from "react-calendly";
    


export const renderMeeting = () => {
    const root = document.getElementById("root")
    return root && <PopupButton
        url="https://calendly.com/khalilgreenidge/consult"
        /*
        * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
        * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
        */
        rootElement={root}
        text="Schedule a one on one"
    />
}


const Contact = () => {
    const params = useParams()
    console.table(params)


    const renderForm = () =>
        <form action='https://usebasin.com/f/e1e217dc70fe' method='post'>
            <input name="name" placeholder='Full Name' type='text' required/>
            <input name='email' placeholder='Email' type='email' required/>
            <input name='subject' placeholder='Subject' type='text' required />
            <textarea rows={5} placeholder='Message' name='message' required></textarea>
            <input className='button' type="submit" value="Submit" />
        </form>


    return (
        <section className='Contact'>
            <h1>Let's Chat</h1>
            {renderForm()}
            <div id="or">OR</div>
            {renderMeeting()}
        </section>
    )
}
    

export default Contact;