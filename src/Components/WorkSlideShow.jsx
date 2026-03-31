import React from 'react'
import c1 from '../assets/images/c1.jpg'
import c2 from '../assets/images/c2.jpeg'
import c3 from '../assets/images/c3.jpg'
import c4 from '../assets/images/c4.jpg'

const WorkSlideShow = () => {
    return (
        <section className="hero-section">
            <div className="hero-grid">
                <div className="hero-content">
                    <span className="hero-label">Nurturing Nature, Growing Futures</span>
                    <h1 className="hero-title">Sariam Praner <br/><span className="text-leaf">Spandan</span></h1>
                    <p className="hero-description">
                        Dedicated to nature conservation through tree plantation and awareness. 
                        We believe in sowing seeds of love for the environment in the hearts of 
                        children and students from an early age.
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
                        <div className="visual-elements">
                            <div className="floating-circle"></div>
                            <div className="floating-dot"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero-section {
                    min-height: 100vh;
                    padding: 10rem 5% 5rem;
                    background: linear-gradient(135deg, #fdfcf9 0%, #f4f7f2 100%);
                    position: relative;
                    overflow: hidden;
                }
                .hero-grid {
                    max-width: 1300px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }
                .hero-label {
                    background: #e9f5e9;
                    color: var(--primary);
                    padding: 8px 16px;
                    border-radius: 100px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                }
                .hero-title {
                    font-size: 4.5rem;
                    margin-bottom: 1.5rem;
                    color: var(--primary);
                }
                .text-leaf {
                    color: var(--secondary);
                }
                .hero-description {
                    font-size: 1.15rem;
                    color: var(--text-muted);
                    max-width: 500px;
                    margin-bottom: 2.5rem;
                    line-height: 1.8;
                }
                .hero-cta-group {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 3rem;
                }
                .btn-primary {
                    background: var(--primary);
                    color: #fff;
                    padding: 1rem 2.2rem;
                    border-radius: 12px;
                    font-weight: 600;
                    transition: var(--transition);
                }
                .btn-primary:hover {
                    box-shadow: 0 10px 25px rgba(30, 81, 40, 0.2);
                    transform: translateY(-3px);
                    background: var(--secondary);
                }
                .btn-secondary {
                    background: transparent;
                    color: var(--primary);
                    border: 2px solid var(--primary);
                    padding: 1rem 2.2rem;
                    border-radius: 12px;
                    font-weight: 600;
                    transition: var(--transition);
                }
                .btn-secondary:hover {
                    background:rgba(30, 81, 40, 0.05);
                    transform: translateY(-3px);
                }
                .impact-stats {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                .stat-value {
                    display: block;
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.75rem;
                    font-weight: 800;
                    color: var(--primary);
                }
                .stat-label {
                    font-size: 0.85rem;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    font-weight: 600;
                }
                .stat-divider {
                    width: 1px;
                    height: 32px;
                    background: #e2e8e2;
                }

                /* Hero Visual Visual Stack */
                .image-stack {
                    position: relative;
                    width: 100%;
                    height: 550px;
                }
                .image-main {
                    width: 75%;
                    height: 450px;
                    background: #e9e5d6;
                    border-radius: 32px;
                    overflow: hidden;
                    box-shadow: 20px 20px 60px rgba(0,0,0,0.08);
                    position: relative;
                    z-index: 2;
                }
                .image-main img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .image-sub {
                    position: absolute;
                    bottom: -30px;
                    right: 0;
                    width: 50%;
                    height: 250px;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 10px 10px 40px rgba(0,0,0,0.1);
                    z-index: 3;
                    border: 8px solid var(--white);
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
                    width: 35%;
                    height: 180px;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 10px 10px 30px rgba(0,0,0,0.06);
                    z-index: 1;
                    border: 6px solid var(--white);
                }
                .image-sub-2 img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                /* Animation */
                .img-reveal {
                    animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                .delay-1 { animation-delay: 0.2s; }
                .delay-2 { animation-delay: 0.4s; }

                @keyframes reveal {
                    from {
                        opacity: 0;
                        transform: scale(1.1) translateY(40px) rotate(2deg);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0) rotate(0deg);
                    }
                }

                @media (max-width: 1100px) {
                    .hero-title { font-size: 3.5rem; }
                }
                @media (max-width: 900px) {
                    .hero-section { padding-top: 8rem; }
                    .hero-grid { grid-template-columns: 1fr; gap: 6rem; text-align: center; }
                    .hero-description { margin: 0 auto 2rem; }
                    .hero-cta-group { justify-content: center; }
                    .impact-stats { justify-content: center; }
                    .image-stack { height: 450px; }
                }
            `}</style>
        </section>
    )
}

export default WorkSlideShow