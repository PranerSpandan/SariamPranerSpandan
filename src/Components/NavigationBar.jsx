import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/images/SPS logo backgroundless.png'

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0, opacity: 0 });
    
    // Refs for each nav item to calculate position
    const navRefs = {
        '/about': useRef(null),
        '/work': useRef(null),
        '/join': useRef(null),
        '/contact': useRef(null)
    };

    useEffect(() => {
        const activeRef = navRefs[location.pathname];
        if (activeRef && activeRef.current) {
            const { offsetWidth, offsetLeft } = activeRef.current;
            setIndicatorStyle({
                width: offsetWidth,
                left: offsetLeft,
                opacity: 1
            });
        } else {
            setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
        }
    }, [location.pathname]);

    return (
        <header className="glass-header">
            <div className="logo-section">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Sariam Praner Spandan Logo" className="navbar-logo" />
                    <span className="logo-text">Sariam Praner Spandan</span>
                </Link>
            </div>
            
            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    {/* The Sliding Liquid Drop Indicator */}
                    <div className="nav-indicator" style={{
                        width: indicatorStyle.width,
                        transform: `translateX(${indicatorStyle.left}px)`,
                        opacity: indicatorStyle.opacity
                    }}></div>

                    <li ref={navRefs['/about']}><NavLink to="/about" className="nav-item" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
                    <li ref={navRefs['/work']}><NavLink to="/work" className="nav-item" onClick={() => setIsMenuOpen(false)}>Work</NavLink></li>
                    <li ref={navRefs['/join']}><NavLink to="/join" className="nav-item" onClick={() => setIsMenuOpen(false)}>Join</NavLink></li>
                    <li ref={navRefs['/contact']}><NavLink to="/contact" className="nav-item" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
                    <li className="mobile-cta">
                         <Link to="/support" className="btn-support-animated" onClick={() => setIsMenuOpen(false)}>
                            <span className="btn-text-shimmer">Support</span>
                         </Link>
                    </li>
                </ul>
            </nav>

            <div className="cta-container">
                <Link to="/support" className="btn-support-animated">
                    <span className="btn-text-shimmer">Support</span>
                </Link>
            </div>

            <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Navigation">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            
            <style jsx>{`
                .logo-link {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-weight: 800;
                    color: var(--primary);
                    text-decoration: none;
                }
                .navbar-logo {
                    width: clamp(60px, 8vw, 75px);
                    height: auto;
                    object-fit: contain;
                    transition: var(--transition);
                }
                .logo-text {
                    font-size: clamp(1rem, 4vw, 1.5rem);
                    white-space: nowrap;
                    letter-spacing: -0.02em;
                }
                .nav-links {
                    display: flex;
                    gap: 1.2rem;
                    list-style: none;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                    position: relative; /* Context for indicator */
                }
                .nav-indicator {
                    position: absolute;
                    height: 42px;
                    background: rgba(37, 108, 44, 0.12);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border-radius: 100px;
                    border: 1px solid rgba(37, 108, 44, 0.15);
                    transition: all 0.6s cubic-bezier(0.5, 0, 0, 1.25);
                    z-index: 0;
                    pointer-events: none;
                    box-shadow: 0 4px 15px rgba(1, 58, 19, 0.04);
                }
                .nav-item {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    transition: var(--transition);
                    text-decoration: none;
                    padding: 0.6rem 1.4rem;
                    border-radius: 100px;
                    display: block;
                    position: relative;
                    z-index: 1;
                }
                .nav-item:hover {
                    color: var(--primary);
                }
                .nav-item.active {
                    color: var(--primary);
                }
                .mobile-cta {
                    display: none;
                }

                /* Hamburger Icon */
                .hamburger {
                    display: none;
                    cursor: pointer;
                    background: none;
                    border: none;
                    padding: 8px;
                    z-index: 1100;
                    border-radius: 8px;
                    transition: var(--transition);
                }
                .hamburger:hover {
                    background: rgba(0,0,0,0.05);
                }
                .bar {
                    display: block;
                    width: 24px;
                    height: 3px;
                    margin: 5px 0;
                    background-color: var(--primary);
                    transition: all 0.3s ease-in-out;
                    border-radius: 2px;
                }

                @media (max-width: 1100px) {
                    .nav-links {
                        gap: 1.5rem;
                    }
                }

                @media (max-width: 1000px) {
                    .nav-menu {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 100%;
                        height: 100vh;
                        background: var(--bg-main);
                        transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                        z-index: 1050;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .nav-menu.active {
                        right: 0;
                    }
                    .nav-links {
                        flex-direction: column;
                        gap: 3rem;
                    }
                    .nav-indicator {
                        display: none; /* Liquid drop only for desktop row layout */
                    }
                    .nav-item {
                        font-size: 2rem;
                        font-weight: 700;
                        padding: 1rem 2.5rem;
                    }
                    .nav-item.active {
                        background: rgba(37, 108, 44, 0.08);
                        border: 1px solid rgba(37, 108, 44, 0.15);
                    }
                    .mobile-cta {
                        display: block;
                    }
                    .cta-container {
                        display: none;
                    }
                    .hamburger {
                        display: block;
                    }
                    /* Hamburger Animation */
                    .hamburger.active .bar:nth-child(2) {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    .hamburger.active .bar:nth-child(1) {
                        transform: translateY(8px) rotate(45deg);
                    }
                    .hamburger.active .bar:nth-child(3) {
                        transform: translateY(-8px) rotate(-45deg);
                    }
                }

                /* Animated Support Button (Vengeance UI style) */
                .btn-support-animated {
                    position: relative;
                    padding: 0.82rem 2.2rem;
                    border-radius: 100px;
                    background: var(--primary);
                    color: white;
                    font-weight: 700;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    transition: var(--transition);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    cursor: pointer;
                    box-shadow: 0 10px 30px rgba(1, 58, 19, 0.15);
                }

                .btn-support-animated:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 15px 35px rgba(1, 58, 19, 0.25);
                }

                .btn-support-animated:active {
                    transform: scale(0.96);
                }

                /* Border Shine Effect */
                .btn-support-animated::before {
                    content: "";
                    position: absolute;
                    inset: -1px;
                    background: linear-gradient(
                        90deg, 
                        transparent 0%, 
                        rgba(255, 255, 255, 0) 40%, 
                        rgba(255, 255, 255, 0.5) 50%, 
                        rgba(255, 255, 255, 0) 60%, 
                        transparent 100%
                    );
                    background-size: 200% 100%;
                    animation: border-shine 3s linear infinite;
                    border-radius: 100px;
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask-composite: exclude;
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    pointer-events: none;
                }

                /* Text Shimmer Effect */
                .btn-text-shimmer {
                    background: linear-gradient(
                        -75deg, 
                        #ffffff 40%, 
                        rgba(255, 255, 255, 0.5) 50%, 
                        #ffffff 60%
                    );
                    background-size: 200% 100%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: text-shimmer 3s linear infinite;
                    position: relative;
                    z-index: 1;
                }

                @keyframes border-shine {
                    from { background-position: 200% 0; }
                    to { background-position: -200% 0; }
                }

                @keyframes text-shimmer {
                    from { background-position: 200% 0; }
                    to { background-position: -200% 0; }
                }

                @media (max-width: 500px) {
                    .glass-header {
                        width: 96%;
                        padding: 0.6rem 1rem;
                    }
                    .logo-link {
                        gap: 8px;
                    }
                    .logo-text {
                        font-size: 0.9rem; /* Fallback for very small */
                        font-size: clamp(0.75rem, 3.5vw, 1rem);
                    }
                }
                @media (max-width: 380px) {
                    .logo-text {
                        letter-spacing: -0.04em; /* Tighter on tiny screens */
                    }
                }
            `}</style>
        </header>
    )
}

export default NavigationBar
