import React from 'react'

const Contact = () => {
    return (
        <main className="page-container">
            <div className="page-header text-center">
                <span className="section-label">Get in Touch</span>
                <h1 className="page-title">
                    Contact <span className="text-leaf">Us</span>
                </h1>
                <p className="page-subtitle">
                    Have questions? Want to report an environmental concern? Reach out to us through any of the channels below.
                </p>
            </div>

            <div className="contact-grid">
                {/* Physical Contact Card */}
                <div className="contact-card primary-card">
                    <div className="card-icon">📍</div>
                    <h2>Headquarters</h2>
                    <p className="contact-info">
                        <strong>Sariam, Debithakurbari</strong><br />
                        Jalpaiguri, West Bengal<br />
                        India, PIN-735133
                    </p>
                    <a href="https://maps.google.com/?q=Jalpaiguri" target="_blank" rel="noopener noreferrer" className="btn-secondary mt-2">Open in Maps</a>
                </div>

                {/* Digital Contact Cards */}
                <div className="digital-contacts">
                    <div className="contact-card small-card">
                        <div className="card-icon">✉️</div>
                        <h3>Email Us</h3>
                        <a href="mailto:pranerspandan@gmail.com" className="contact-link">pranerspandan@gmail.com</a>
                    </div>
                    
                    <div className="contact-card small-card">
                        <div className="card-icon">📞</div>
                        <h3>Call Us</h3>
                        <a href="tel:+918436692246" className="contact-link">+91 8436692246</a>
                        <br />
                        <a href="tel:+917584828237" className="contact-link">+91 7584828237</a>
                    </div>
                </div>
            </div>

            <div className="social-banner">
                <h3>Follow Our Live Editorial</h3>
                <div className="social-links-large">
                    <a href="https://instagram.com/pranerspandan" target="_blank" rel="noopener noreferrer" className="social-pill instagram">
                        Instagram
                    </a>
                    <a href="https://facebook.com/profile.php?id=100076105804159" target="_blank" rel="noopener noreferrer" className="social-pill facebook">
                        Facebook
                    </a>
                    <a href="https://www.youtube.com/@pranerspandan" target="_blank" rel="noopener noreferrer" className="social-pill youtube">
                        YouTube
                    </a>
                </div>
            </div>

            <style jsx>{`
                .page-container {
                    padding: 10rem 5% 8rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .text-center { text-align: center; }
                .page-header { margin-bottom: 5rem; }
                .page-title {
                    font-size: clamp(3rem, 6vw, 4.5rem);
                    line-height: 1.1;
                    color: var(--primary);
                    margin-top: 1rem;
                    font-weight: 800;
                }
                .page-subtitle {
                    font-size: 1.2rem;
                    color: var(--text-secondary);
                    line-height: 1.7;
                    max-width: 600px;
                    margin: 1.5rem auto 0;
                }
                .text-leaf { color: var(--secondary); }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    margin-bottom: 4rem;
                }
                @media (min-width: 900px) {
                    .contact-grid { grid-template-columns: 1.2fr 1fr; }
                }

                .contact-card {
                    background: var(--surface-container);
                    border-radius: var(--radius-xl);
                    padding: 3rem;
                    border: 1px solid var(--outline-variant);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .primary-card {
                    background: linear-gradient(145deg, var(--surface-container), var(--bg-main));
                }
                .card-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                }
                .contact-card h2, .contact-card h3 {
                    color: var(--primary);
                    margin-bottom: 1rem;
                }
                .contact-info {
                    color: var(--text-secondary);
                    font-size: 1.1rem;
                    line-height: 1.8;
                    margin-bottom: 1.5rem;
                }
                .contact-link {
                    color: var(--secondary);
                    font-weight: 600;
                    font-size: 1.1rem;
                    text-decoration: none;
                    transition: var(--transition);
                }
                .contact-link:hover {
                    color: var(--primary);
                    text-decoration: underline;
                }
                .btn-secondary {
                    display: inline-block;
                    padding: 0.8rem 1.5rem;
                    border: 2px solid var(--primary);
                    color: var(--primary);
                    border-radius: 100px;
                    text-decoration: none;
                    font-weight: 600;
                    text-align: center;
                    transition: var(--transition);
                }
                .btn-secondary:hover {
                    background: var(--primary);
                    color: white;
                }
                .mt-2 { margin-top: 1rem; }

                .digital-contacts {
                    display: grid;
                    grid-template-rows: 1fr 1fr;
                    gap: 2rem;
                }
                .small-card {
                    padding: 2.5rem;
                }

                .social-banner {
                    background: var(--primary-container);
                    padding: 4rem;
                    border-radius: var(--radius-xl);
                    text-align: center;
                    margin-top: 2rem;
                }
                .social-banner h3 {
                    color: var(--primary);
                    font-size: 1.8rem;
                    margin-bottom: 2rem;
                }
                .social-links-large {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                }
                .social-pill {
                    padding: 1rem 2.5rem;
                    border-radius: 100px;
                    font-weight: 700;
                    text-decoration: none;
                    color: white;
                    transition: transform 0.3s ease;
                }
                .social-pill:hover {
                    transform: translateY(-3px);
                }
                .instagram { background: #E1306C; }
                .facebook { background: #1877F2; }
                .youtube { background: #FF0000; }
            `}</style>
        </main>
    )
}

export default Contact
