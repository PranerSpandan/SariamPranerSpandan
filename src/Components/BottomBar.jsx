import React from 'react'
import logo from '../assets/images/SPS logo backgroundless.png'

const BottomBar = () => {
    return (
        <footer className="footer-section">
            <div className="footer-grid">
                <div className="footer-brand">
                    <img src={logo} alt="SPS NGO Logo" className="footer-logo" />
                    <h3 className="footer-brand-title">Sariam Praner <br/>Spandan</h3>
                    <p className="footer-description">
                        Dedicated to preserving the green lungs of our planet through tree plantation 
                        and environmental education for our coming generations.
                    </p>
                </div>

                <div className="footer-links">
                    <h4 className="footer-title">Organization</h4>
                    <ul>
                        <li><a href="#about">About Our NGO</a></li>
                        <li><a href="#projects">Our Success Stories</a></li>
                        <li><a href="#impact">Sustainability Goal</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4 className="footer-title">Contact Us</h4>
                    <p className="footer-info"><b>Location:</b> Sariam, Debithakurbari, Jalpaiguri</p>
                    <p className="footer-info"><b>Email:</b> <a href="mailto:pranerspandan@gmail.com">pranerspandan@gmail.com</a></p>
                    <p className="footer-info"><b>Phone:</b> +91 8436692246, 8001783753</p>
                </div>

                <div className="footer-links">
                    <h4 className="footer-title">Follow Us</h4>
                     <ul className="social-links">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                 <p>© 2024 Sariam Praner Spandan (Regd. NGO). All Rights Reserved.</p>
                 <div className="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                 </div>
            </div>

            <style jsx>{`
                .footer-section {
                    background: #f4f7f2;
                    padding: 6rem 5% 2rem;
                    border-top: 1px solid #e2e8e2;
                }
                .footer-grid {
                    max-width: 1300px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 2fr 1fr 1.5fr 1fr;
                    gap: 4rem;
                }
                .footer-logo {
                    width: 64px;
                    margin-bottom: 1.5rem;
                }
                .footer-brand-title {
                    font-size: 1.5rem;
                    color: var(--primary);
                    margin-bottom: 1.5rem;
                }
                .footer-description {
                    color: var(--text-muted);
                    line-height: 1.8;
                    max-width: 300px;
                }
                .footer-title {
                    font-size: 1.1rem;
                    color: var(--primary);
                    margin-bottom: 2rem;
                }
                .footer-links ul li {
                    margin-bottom: 1rem;
                }
                .footer-links ul li a {
                    color: var(--text-muted);
                    font-size: 0.95rem;
                    transition: var(--transition);
                }
                .footer-links ul li a:hover {
                    color: var(--secondary);
                }
                .footer-info {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    margin-bottom: 1rem;
                    line-height: 1.6;
                }
                .footer-bottom {
                    max-width: 1300px;
                    margin: 4rem auto 0;
                    padding-top: 2rem;
                    border-top: 1px solid #e2e8e2;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: var(--text-muted);
                    font-size: 0.85rem;
                }
                .footer-legal {
                    display: flex;
                    gap: 2rem;
                }
                .footer-legal a:hover {
                    color: var(--primary);
                }

                @media (max-width: 1000px) {
                    .footer-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
                }
                @media (max-width: 600px) {
                    .footer-grid { grid-template-columns: 1fr; }
                    .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
                }
            `}</style>
        </footer>
    )
}

export default BottomBar