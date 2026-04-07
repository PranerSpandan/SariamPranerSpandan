import React from 'react'
import { Link } from 'react-router-dom'
import MovingIcon from './MovingIcon'
import logo from '../assets/images/SPS logo backgroundless.png'

const BottomBar = () => {
    return (
        <footer className="footer-section">
            <div className="footer-grid">
                <div className="footer-brand">
                    <img src={logo} alt="SPS NGO Logo" className="footer-logo" />
                    <h3 className="footer-brand-title">Sariam Praner <br/>Spandan</h3>
                    <p className="footer-description">
                        An organic mission grown, not built. We are a living editorial dedicated to preserving our 
                        forest heritage through the eyes of the youth.
                    </p>
                </div>

                <div className="footer-links">
                    <h5 className="footer-title">Organization</h5>
                    <ul className="footer-ul">
                        <li><Link to="/about">About Our NGO</Link></li>
                        <li><Link to="/work">Fields & Sectors</Link></li>
                        <li><Link to="/join">Join the Movement</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h5 className="footer-title">Contact</h5>
                    <p className="footer-info"><b>Main Office:</b> Sariam, Debithakurbari, Jalpaiguri, West Bengal, India , <br></br>PIN-735133 </p>
                    <p className="footer-info"><b>Email:</b> <a href="mailto:pranerspandan@gmail.com">pranerspandan@gmail.com</a></p>
                    <p className="footer-info"><b>Connect:</b> +91 8436692246 /<br></br> +91 7584828237</p>
                </div>

                <div className="footer-links">
                    <h5 className="footer-title">Living Feed</h5>
                     <ul className="social-links footer-ul">
                        <li>
                            <a href="https://instagram.com/pranerspandan" target="_blank" rel="noopener noreferrer" className="social-link">
                                <MovingIcon name="instagram" size={20} color="currentColor" strokeWidth={2} />
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com/profile.php?id=100076105804159" target="_blank" rel="noopener noreferrer" className="social-link">
                                <MovingIcon name="facebook" size={20} color="currentColor" strokeWidth={2} />
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@pranerspandan" target="_blank" rel="noopener noreferrer" className="social-link">
                                <MovingIcon name="youtube" size={20} color="currentColor" strokeWidth={2} />
                                <span>YouTube</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                 <p>© 2026 Sariam Praner Spandan. The Living Editorial Initiative.</p>
                 <div className="footer-legal">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                 </div>
            </div>

            <style jsx>{`
                .footer-section {
                    background: var(--surface-container);
                    padding: 8rem 5% 3rem;
                    border-top: 1px solid var(--outline-variant);
                }
                .footer-grid {
                    max-width: 1400px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 2.2fr 1fr 1.5fr 1fr;
                    gap: 5rem;
                }
                .footer-logo {
                    width: clamp(120px, 15vw, 160px);
                    height: auto;
                    object-fit: contain;
                    margin-bottom: 2rem;
                }
                .footer-brand-title {
                    font-size: 1.8rem;
                    color: var(--primary);
                    margin-bottom: 1.8rem;
                    line-height: 1.2;
                }
                .footer-description {
                    color: var(--text-secondary);
                    line-height: 1.8;
                    max-width: 320px;
                }
                .footer-title {
                    font-size: 0.9rem;
                    color: var(--primary);
                    margin-bottom: 2.5rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: 800;
                }
                .footer-ul li {
                    margin-bottom: 1.2rem;
                    list-style: none;
                }
                .footer-ul li a {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    font-weight: 500;
                    transition: var(--transition);
                }
                .footer-ul li a:hover {
                    color: var(--primary);
                }
                .social-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .social-link svg {
                    width: 20px;
                    height: 20px;
                    transition: transform 0.3s ease;
                }
                .social-link:hover svg {
                    transform: scale(1.1);
                }
                .footer-info {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    margin-bottom: 1.2rem;
                    line-height: 1.6;
                }
                .footer-bottom {
                    max-width: 1400px;
                    margin: 6rem auto 0;
                    padding-top: 2.5rem;
                    border-top: 1px solid var(--outline-variant);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: var(--text-secondary);
                    font-size: 0.85rem;
                    font-weight: 500;
                }
                .footer-legal {
                    display: flex;
                    gap: 3rem;
                }

                @media (max-width: 1000px) {
                    .footer-grid { grid-template-columns: 1fr 1fr; gap: 4rem; }
                }
                @media (max-width: 600px) {
                    .footer-grid { grid-template-columns: 1fr; }
                    .footer-bottom { flex-direction: column; gap: 1.5rem; text-align: center; }
                }
            `}</style>
        </footer>
    )
}

export default BottomBar