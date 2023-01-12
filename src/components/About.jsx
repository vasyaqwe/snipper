import aboutImg from '../assets/customizable-img.png'
import Button from './Button'

function About() {

    return (
        <section className="container | about-section">
            <div className='flow | about-text'>
                <h2 className='fs-600 fw-600 | title about-title'>A fully customizable code snippet editor</h2>
                <p className='fs-400 | sub-title'>Fully customize the color scheme of your code snippet, or our
                    own premade color schemes. Export your code snippets in JPG, PDF,
                    PNG, or ony of the other 10+ common extensions.</p>
                <Button />
            </div>
            <img className='about-img' src={aboutImg} alt="illustration of customizability of snipper" />
        </section>
    )
}

export default About
