import './style.scss'

const Intro = () => {
    return <div className="intro card">
        <div className='section'>
            {leftText()}
            {graphics()} 
        </div>
    </div>
}

const leftText = () => {
    return <div className="left-text">
        {heading()}
        <h2>Full Stack Software Engineer</h2>
    </div>
}

const graphics = () => {
    return <div className="graphics">
        <img src="src/assets/khalil.png" width="320" height="500"/>
    </div>
}

const heading = () => {
    return <>
        <h1>Hi!</h1><br/>
        <h1> I am Khalil Greenidge</h1>
    </>
}

export default Intro;