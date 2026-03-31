import React from 'react'
import logo from '../assets/images/SPS logo backgroundless.png'

const AboutSection = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-content">
                    <span className="section-label">Our Story</span>
                    <h2 className="about-title">Nurturing the <br/>Earth Since <span className="text-leaf">2021</span></h2>
                    <p className="about-text">
                        Sariam Praner Spandan was founded with a single mission: to reconnect the youth 
                        with the vital breath of our planet. We don't just plant trees; we build 
                        future-ready guardians of the ecosystem.
                    </p>
                    <div className="about-features">
                        <div className="feature-item">
                            <h4 className="feature-title">Impact First</h4>
                            <p className="feature-desc">Every sapling is tracked for 3 years to ensure 100% survival rates.</p>
                        </div>
                         <div className="feature-item">
                            <h4 className="feature-title">Youth Focused</h4>
                            <p className="feature-desc">Working directly with 50+ schools to integrated nature love in curriculums.</p>
                        </div>
                    </div>
                </div>
                <div className="about-visual">
                    <img src={logo} alt="SPS Logo" className="floating-logo" />
                    <div className="visual-circle"></div>
                </div>
            </div>

            <style jsx>{`
                .about-section {
                    padding: 8rem 5%;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .about-container {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 6rem;
                    align-items: center;
                }
                .about-title {
                    font-size: 3.5rem;
                    margin: 1.5rem 0 2rem;
                    line-height: 1.15;
                }
                .text-leaf { color: var(--secondary); }
                .about-text {
                    font-size: 1.15rem;
                    color: var(--text-secondary);
                    margin-bottom: 3rem;
                    max-width: 600px;
                }
                .about-features {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                }
                .feature-title {
                    font-size: 1.25rem;
                    margin-bottom: 0.8rem;
                    color: var(--primary);
                }
                .feature-desc {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                }
                .about-visual {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .floating-logo {
                    width: 70%;
                    z-index: 2;
                    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.1));
                    animation: float 6s ease-in-out infinite;
                }
                .visual-circle {
                    position: absolute;
                    width: 400px;
                    height: 400px;
                    background: var(--surface-container);
                    border-radius: 1000px;
                    z-index: 1;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-30px); }
                }
                @media (max-width: 900px) {
                    .about-container { grid-template-columns: 1fr; text-align: center; }
                    .about-features { grid-template-columns: 1fr; }
                    .about-text { margin: 0 auto 3rem; }
                    .floating-logo { width: 50%; }
                }
            `}</style>
        </section>
    )
}

export default AboutSection
