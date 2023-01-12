import logo from '../assets/logo.svg'

function Footer() {

    return (
        <footer className='container | footer'>
            <img src={logo} alt="snipper logo" />
            <div className='flex'>
                <a href='#' className='link fs-400'>Terms and Conditions</a>
                <a href='#' className='link fs-400'>Privacy Policy</a>
            </div>
        </footer>
    )
}

export default Footer
