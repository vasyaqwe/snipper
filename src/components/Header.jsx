import { useState } from 'react'
import logo from '../assets/logo.svg'
import Navbar from './Navbar'

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <header className='primary-header'>
            <div className="container | header-inner">
                <img src={logo} alt="snipper logo" />
                <Navbar isOpen={isNavOpen} />
                <button aria-expanded={isNavOpen} className="toggle nav-toggle" onClick={() => setIsNavOpen(prev => !prev)}>
                    <span className="sr-only">Menu</span>
                </button>
            </div>
        </header>
    )
}

export default Header
