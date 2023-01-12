import heroImg from '../assets/hero-img.png'
import Button from './Button'

function Hero() {

    return (
        <section className="hero-section">
            <div className="container">
                <div className='hero-text'>
                    <h1 className='fs-900 fw-700 text-center | title'>Gorgeous Code Snippets</h1>
                    <p className='fs-400 text-center | sub-title'>With Snipper, create fully customizable code snippets in a matter of seconds
                        right from your browser.</p>
                    <Button />
                    <p className="fs-400 text-center | disclaimer">No credit card required.</p>
                </div>
                <img className='hero-img' src={heroImg} alt="" />
            </div>
        </section>
    )
}

export default Hero
