import React from 'react'
import logo from '../assets/images/SPS logo backgroundless.png'

const NavigationBar = () => {
    return (
        <header>
            <div className="logo-container">
                <a href="/" className="logo-link">
                    <img src={logo} alt="Sariam Praner Spandan Logo" className="navbar-logo" />
                    <span className="logo-text">SPS NGO</span>
                </a>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home" className="nav-link active">Home</a></li>
                    <li><a href="#about" className="nav-link">About Us</a></li>
                    <li><a href="#work" className="nav-link">Our Work</a></li>
                    <li><a href="#impact" className="nav-link">Impact</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>
            <div className="cta-wrapper">
                <a href="#donate" className="btn-cta">Support Nature</a>
            </div>
            
            <style jsx>{`
                .logo-container {
                    display: flex;
                    align-items: center;
                }
                .logo-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: var(--primary);
                }
                .navbar-logo {
                    width: 42px;
                    height: 42px;
                    object-fit: contain;
                    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .logo-link:hover .navbar-logo {
                    transform: scale(1.1) rotate(5deg);
                }
                .logo-text {
                    letter-spacing: -0.5px;
                }
                @media (max-width: 992px) {
                    .nav-links, .cta-wrapper {
                        display: none;
                    }
                }
            `}</style>
        </header>
    )
}

export default NavigationBar
