import React from 'react'
import logo from '../assets/images/SPS logo backgroundless.png'

const WorkSlideShow = () => {
    return (
        <section className="hero-section" id="home">
            <div className="hero-grid">
                {/* LEFT — Content */}
                <div className="hero-content">
                    <span className="hero-label">Green the Earth, Save the Planet</span>
                    <h1 className="hero-title">
                        Sariam Praner <br/>
                        <span className="text-leaf">Spandan</span>
                    </h1>
                    <p className="hero-description">
                        Dedicated to nature conservation through tree plantation and awareness. 
                        We inspire children and school students to love and protect our planet 
                        from an early age — because the future belongs to those who plant it.
                    </p>
                    <div className="hero-cta-group">
                        <a href="#work" className="btn-primary">Our Mission</a>
                        <a href="#gallery" className="btn-secondary">View Gallery</a>
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
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-value">2021</span>
                            <span className="stat-label">Established</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT — Logo Visual */}
                <div className="hero-visual">
                    <div className="logo-glass-container">
                        <div className="logo-orbit-ring ring-1"></div>
                        <div className="logo-orbit-ring ring-2"></div>
                        <div className="logo-bg-glow"></div>
                        <img
                            src={logo}
                            alt="Sariam Praner Spandan — Green the Earth, Save the Planet"
                            className="hero-logo"
                        />
                        <div className="floating-tag tag-1">
                            <span className="tag-icon">🌱</span>
                            <span className="tag-text">Tree Plantation</span>
                        </div>
                        <div className="floating-tag tag-2">
                            <span className="tag-icon">📚</span>
                            <span className="tag-text">Youth Awareness</span>
                        </div>
                        <div className="floating-tag tag-3">
                            <span className="tag-icon">🏫</span>
                            <span className="tag-text">Schools Outreach</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero-section {
                    min-height: 100vh;
                    padding: 9rem 5% 5rem;
                    background: linear-gradient(145deg, #fcf9f4 0%, #eef4ec 60%, #f0ede8 100%);
                    position: relative;
                    overflow: hidden;
                }
                .hero-grid {
                    max-width: 1400px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1.1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }
                .hero-label {
                    color: var(--secondary);
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 0.78rem;
                    letter-spacing: 3px;
                    margin-bottom: 2rem;
                    display: inline-block;
                }
                .hero-title {
                    font-size: 5.5rem;
                    margin-bottom: 2rem;
                    color: var(--primary);
                    line-height: 1.05;
                }
                .text-leaf {
                    color: var(--secondary);
                }
                .hero-description {
                    font-size: 1.15rem;
                    color: var(--text-secondary);
                    max-width: 560px;
                    margin-bottom: 3.5rem;
                    line-height: 1.85;
                }
                .hero-cta-group {
                    display: flex;
                    gap: 1.2rem;
                    margin-bottom: 4rem;
                    flex-wrap: wrap;
                }
                .btn-secondary {
                    background: rgba(255, 255, 255, 0.5);
                    backdrop-filter: blur(12px);
                    color: var(--primary);
                    padding: 0.8rem 1.8rem;
                    border-radius: 100px;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid rgba(193, 201, 189, 0.35);
                    transition: var(--transition);
                    font-size: 0.95rem;
                }
                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.75);
                    transform: scale(1.03);
                }
                .impact-stats {
                    display: flex;
                    gap: 2.5rem;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .stat-value {
                    display: block;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 2.2rem;
                    font-weight: 800;
                    color: var(--primary);
                    letter-spacing: -1px;
                }
                .stat-label {
                    font-size: 0.75rem;
                    color: var(--text-secondary);
                    text-transform: uppercase;
                    font-weight: 700;
                    letter-spacing: 1.2px;
                    margin-top: 4px;
                    display: block;
                }
                .stat-divider {
                    width: 1px;
                    height: 40px;
                    background: #d4e0d4;
                }

                /* ── LOGO VISUAL ── */
                .hero-visual {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .logo-glass-container {
                    position: relative;
                    width: 520px;
                    height: 520px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .logo-orbit-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 1px solid rgba(78, 148, 79, 0.15);
                    animation: spin-ring 25s linear infinite;
                }
                .ring-1 {
                    width: 440px;
                    height: 440px;
                    animation-duration: 30s;
                }
                .ring-2 {
                    width: 520px;
                    height: 520px;
                    border-style: dashed;
                    border-color: rgba(78, 148, 79, 0.1);
                    animation-direction: reverse;
                    animation-duration: 45s;
                }
                @keyframes spin-ring {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .logo-bg-glow {
                    position: absolute;
                    width: 360px;
                    height: 360px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(78,148,79,0.12) 0%, transparent 70%);
                    animation: pulse-glow 4s ease-in-out infinite;
                }
                @keyframes pulse-glow {
                    0%, 100% { transform: scale(1); opacity: 0.7; }
                    50% { transform: scale(1.08); opacity: 1; }
                }
                .hero-logo {
                    width: 320px;
                    height: 320px;
                    object-fit: contain;
                    position: relative;
                    z-index: 3;
                    filter: drop-shadow(0 30px 60px rgba(1, 58, 19, 0.15));
                    animation: float-logo 6s ease-in-out infinite;
                }
                @keyframes float-logo {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-18px); }
                }

                /* Floating tags */
                .floating-tag {
                    position: absolute;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255,255,255,0.75);
                    backdrop-filter: blur(12px);
                    padding: 10px 16px;
                    border-radius: 100px;
                    font-size: 0.82rem;
                    font-weight: 700;
                    color: var(--primary);
                    box-shadow: 0 8px 24px rgba(0,0,0,0.06);
                    border: 1px solid rgba(193, 201, 189, 0.3);
                    white-space: nowrap;
                    z-index: 4;
                    animation: float-tag 5s ease-in-out infinite;
                }
                .tag-1 {
                    top: 60px;
                    right: -20px;
                    animation-delay: 0s;
                }
                .tag-2 {
                    bottom: 80px;
                    right: -10px;
                    animation-delay: 1.5s;
                }
                .tag-3 {
                    bottom: 30px;
                    left: 10px;
                    animation-delay: 0.8s;
                }
                .tag-icon { font-size: 1rem; }
                @keyframes float-tag {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }

                @media (max-width: 1100px) {
                    .hero-grid { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
                    .hero-description { margin: 0 auto 3.5rem; }
                    .hero-cta-group { justify-content: center; }
                    .impact-stats { justify-content: center; }
                    .hero-title { font-size: 4rem; }
                    .logo-glass-container { width: 380px; height: 380px; }
                    .ring-1 { width: 320px; height: 320px; }
                    .ring-2 { width: 380px; height: 380px; }
                    .hero-logo { width: 240px; height: 240px; }
                    .tag-1, .tag-2, .tag-3 { display: none; }
                }
                @media (max-width: 600px) {
                    .hero-title { font-size: 3rem; }
                    .logo-glass-container { width: 280px; height: 280px; }
                    .hero-logo { width: 190px; height: 190px; }
                }
            `}</style>
        </section>
    )
}

export default WorkSlideShow