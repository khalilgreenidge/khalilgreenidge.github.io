import './style.scss'


const Contact = () => 
    <section className='Contact'>
        <h1>Let's Chat</h1>
        <form action='https://usebasin.com/f/e1e217dc70fe' method='post'>
            <input name="name" placeholder='Full Name' type='text' required/>
            <input name='email' placeholder='Email' type='email' required/>
            <input name='subject' placeholder='Subject' type='text' required />
            <textarea rows={5} placeholder='Message' name='message' required></textarea>
            <input className='button' type="submit" value="Submit" />
        </form>
    </section>

export default Contact;