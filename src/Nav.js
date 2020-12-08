import React, { useEffect, useState } from 'react'
import './Nav.css';
import logo from './assets/netflixLogo.png';

function Nav() {
    const [show, setShow] = useState(false)
    useEffect( () => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, []);

    const handleShow = (bool) => setShow(bool);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img
            className="nav__logo"
            src={logo}
            alt="Netflix Logo"
            />

            <img
            className="nav__avatar"
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav;
