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
                    <div className="card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <h2>Headquarters</h2>
                    <p className="contact-info">
                        <strong>Sariam, Debithakurbari</strong><br />
                        Jalpaiguri, West Bengal<br />
                        India, PIN-735133
                    </p>
                    {/* Google Maps Embed iframe */}
                    <iframe 
                        src="https://maps.google.com/maps?q=Sariam,+Debithakurbari,+Jalpaiguri,+West+Bengal,+735133&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                        width="100%" 
                        height="200" 
                        frameBorder="0" 
                        style={{ border:0, borderRadius: 'var(--radius-lg)', marginTop: '1.5rem' }} 
                        allowFullScreen>
                    </iframe>
                </div>

                {/* Digital Contact Cards */}
                <div className="digital-contacts">
                    <div className="contact-card small-card">
                        <div className="card-icon" style={{ marginBottom: '1rem' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <h3>Email Us</h3>
                        <a href="mailto:pranerspandan@gmail.com" className="contact-link">pranerspandan@gmail.com</a>
                    </div>
                    
                    <div className="contact-card small-card">
                        <div className="card-icon" style={{ marginBottom: '1rem' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span>Instagram</span>
                    </a>
                    <a href="https://facebook.com/profile.php?id=100076105804159" target="_blank" rel="noopener noreferrer" className="social-pill facebook">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.youtube.com/@pranerspandan" target="_blank" rel="noopener noreferrer" className="social-pill youtube">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        <span>YouTube</span>
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
                    padding: 4rem 0;
                    text-align: center;
                    margin-top: 2rem;
                    border-top: 1px dashed var(--outline-variant);
                }
                .social-banner h3 {
                    color: var(--primary);
                    font-size: 1.8rem;
                    margin-bottom: 2.5rem;
                    font-weight: 800;
                }
                .social-links-large {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                }
                .social-pill {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 0.8rem 2rem;
                    border-radius: 100px;
                    font-weight: 600;
                    font-size: 1.1rem;
                    text-decoration: none;
                    color: var(--primary);
                    background: transparent;
                    border: 1.5px solid var(--outline-variant);
                    transition: all 0.3s ease;
                }
                .social-pill:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
                }
                .social-pill svg {
                    transition: stroke 0.3s ease;
                }
                .instagram:hover {
                    border-color: #E1306C;
                    color: #E1306C;
                }
                .instagram:hover svg { stroke: #E1306C; }
                
                .facebook:hover {
                    border-color: #1877F2;
                    color: #1877F2;
                }
                .facebook:hover svg { stroke: #1877F2; }
                
                .youtube:hover {
                    border-color: #FF0000;
                    color: #FF0000;
                }
                .youtube:hover svg { stroke: #FF0000; }
            `}</style>
        </main>
    )
}

export default Contact
