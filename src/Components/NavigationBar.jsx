import React from 'react'
import logo from '../assets/images/SPS logo backgroundless.png'

const NavigationBar = () => {
    return (
        <header className="glass-header">
            <div className="logo-section">
                <a href="/" className="logo-link">
                    <img src={logo} alt="Sariam Praner Spandan Logo" className="navbar-logo" />
                    <span className="logo-text">SPS NGO</span>
                </a>
            </div>
            
            <nav className="desktop-nav">
                <ul className="nav-links">
                    <li><a href="#home" className="nav-item">Home</a></li>
                    <li><a href="#about" className="nav-item">About</a></li>
                    <li><a href="#work" className="nav-item">Work</a></li>
                    <li><a href="#impact" className="nav-item">Impact</a></li>
                    <li><a href="#contact" className="nav-item">Contact</a></li>
                </ul>
            </nav>

            <div className="cta-container">
                <a href="#donate" className="btn-primary">Support Nature</a>
            </div>
            
            <style jsx>{`
                .logo-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-weight: 800;
                    color: var(--primary);
                }
                .navbar-logo {
                    width: 36px;
                    height: 36px;
                    object-fit: contain;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                }
                .nav-item {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    transition: var(--transition);
                }
                .nav-item:hover {
                    color: var(--primary);
                }
                @media (max-width: 900px) {
                    .desktop-nav, .cta-container {
                        display: none;
                    }
                }
            `}</style>
        </header>
    )
}

export default NavigationBar
