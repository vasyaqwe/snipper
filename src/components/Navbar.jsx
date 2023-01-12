import { useRef } from 'react'
import { useState } from 'react'
import Button from './Button'

function Navbar({ isOpen }) {
    const [inputShown, setInputShown] = useState(false)
    const inputRef = useRef(null)
    const toggleRef = useRef(null)
    const showInput = () => {
        setInputShown(true)
        inputRef.current.focus()
    }
    return (
        <nav className='primary-nav' data-visible={isOpen}>
            <div className="search-wrapper">
                <input ref={inputRef} onBlur={(e) => {
                    setInputShown(false)
                    toggleRef.current.setAttribute('closing', true)
                }} type="text" placeholder='Search' className={`search-input ${inputShown ? 'open' : ''}`} />
                <button ref={toggleRef} className={`toggle search-toggle ${inputShown ? 'open' : ''}`}
                    onClick={showInput}><span className="sr-only">Search</span></button>
            </div>
            <a href="#" className='link'>Sign in</a>
            <Button />
        </nav>
    )
}

export default Navbar
