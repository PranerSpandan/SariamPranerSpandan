import React from 'react'
import c1 from '../assets/images/c1.jpg'
import c2 from '../assets/images/c2.jpeg'
import c3 from '../assets/images/c3.jpg'

const WorkSlideShow = () => {
    return (
        <section className="hero-section" id="home">
            <div className="hero-grid">
                <div className="hero-content">
                    <span className="hero-label">The Living Editorial</span>
                    <h1 className="hero-title">Sariam Praner <br/><span className="text-leaf">Spandan NGO</span></h1>
                    <p className="hero-description">
                         Nurturing nature, growing futures. Unlike traditional NGO websites, we embrace the sophisticated 
                         spatial awareness of a high-end magazine to reflect our organic and vital mission.
                    </p>
                    <div className="hero-cta-group">
                        <a href="#work" className="btn-primary">Our Mission</a>
                        <a href="#about" className="btn-secondary">Learn More</a>
                    </div>
                    <div className="impact-stats">
                        <div className="stat-item">
                            <span className="stat-value">10k+</span>
                            <span className="stat-label">Trees Planted</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-value">50+</span>
                            <span className="stat-label">Schools Reached</span>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="image-stack">
                        <div className="image-main">
                            <img src={c3} alt="Nature conservation work" className="img-reveal" />
                        </div>
                        <div className="image-sub">
                            <img src={c1} alt="Tree plantation" className="img-reveal delay-1" />
                        </div>
                        <div className="image-sub-2">
                             <img src={c2} alt="School children" className="img-reveal delay-2" />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero-section {
                    min-height: 100vh;
                    padding: 10rem 5% 5rem;
                    background: linear-gradient(135deg, #fcf9f4 0%, #f0ede8 100%);
                    position: relative;
                    overflow: hidden;
                }
                .hero-grid {
                    max-width: 1400px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 5rem;
                    align-items: center;
                }
                .hero-label {
                    color: var(--secondary);
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    letter-spacing: 2.5px;
                    margin-bottom: 2rem;
                    display: inline-block;
                }
                .hero-title {
                    font-size: 5rem;
                    margin-bottom: 2rem;
                    color: var(--primary);
                    line-height: 1.1;
                }
                .text-leaf {
                    color: var(--secondary);
                }
                .hero-description {
                    font-size: 1.25rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                    margin-bottom: 3.5rem;
                    line-height: 1.8;
                }
                .hero-cta-group {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 4rem;
                }
                .btn-secondary {
                    background: rgba(255, 255, 255, 0.4);
                    backdrop-filter: blur(12px);
                    color: var(--primary);
                    padding: 0.8rem 1.8rem;
                    border-radius: 100px;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid var(--outline-variant);
                    transition: var(--transition);
                }
                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.6);
                    transform: scale(1.02);
                }
                .impact-stats {
                    display: flex;
                    gap: 3rem;
                    align-items: center;
                }
                .stat-value {
                    display: block;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: var(--primary);
                    letter-spacing: -1px;
                }
                .stat-label {
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                    text-transform: uppercase;
                    font-weight: 700;
                    letter-spacing: 1px;
                }
                .stat-divider {
                    width: 1px;
                    height: 48px;
                    background: #e2e8e2;
                }

                .image-stack {
                    position: relative;
                    width: 100%;
                    height: 600px;
                }
                .image-main {
                    width: 80%;
                    height: 500px;
                    border-radius: var(--radius-xl);
                    overflow: hidden;
                    box-shadow: 0 40px 80px rgba(0,0,0,0.1);
                    z-index: 2;
                    position: relative;
                }
                .image-main img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .image-sub {
                    position: absolute;
                    bottom: -20px;
                    right: 0;
                    width: 55%;
                    height: 300px;
                    border-radius: var(--radius-lg);
                    border: 8px solid var(--surface-lowest);
                    overflow: hidden;
                    z-index: 3;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
                }
                .image-sub img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .image-sub-2 {
                    position: absolute;
                    top: -40px;
                    right: 40px;
                    width: 40%;
                    height: 220px;
                    border-radius: var(--radius-lg);
                    border: 6px solid var(--surface-lowest);
                    overflow: hidden;
                    z-index: 1;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                }
                .image-sub-2 img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                @media (max-width: 1100px) {
                    .hero-grid { grid-template-columns: 1fr; gap: 8rem; text-align: center; }
                    .hero-description { margin: 0 auto 3.5rem; }
                    .hero-cta-group { justify-content: center; }
                    .impact-stats { justify-content: center; }
                    .image-stack { height: 450px; }
                    .hero-title { font-size: 4rem; }
                }
            `}</style>
        </section>
    )
}

export default WorkSlideShow