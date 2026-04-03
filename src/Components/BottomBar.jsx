import React from 'react'
import { Link } from 'react-router-dom'
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
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com/profile.php?id=100076105804159" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@pranerspandan" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
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