import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/SPS logo backgroundless.png'

const WorkSlideShow = () => {
    return (
        <section className="hero-section" id="home">
            <div className="hero-background">
                <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop" 
                    alt="Hands planting a sapling" 
                    className="hero-bg-img"
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content-wrapper">
                <div className="hero-content">
                    <div className="hero-overline-pill">
                        <span className="overline-icon">›</span> MEET OUR MOVEMENT
                    </div>
                    
                    <h1 className="hero-title">
                        Be the Pulse of Nature.<br />
                        Save Our Home.
                    </h1>
                    
                    <p className="hero-description">
                        Sariam Praner Spandan exists because we are the voice of the 
                        voiceless. We dedicate ourselves to restoring balance, bringing life 
                        back to earth, and nurturing the soul of the Earth through our tree 
                        planting, every heart every voice.
                    </p>
                    
                    <div className="hero-cta-group">
                        <Link to="/join" className="btn-solid-green">Join the Movement</Link>
                        <Link to="/work" className="btn-outline-glass">Explore Initiatives</Link>
                    </div>
                </div>
            </div>

            <style>{`
                /* ── HERO WRAPPER ── */
                .hero-section {
                    min-height: 100vh;
                    position: relative;
                    display: flex;
                    align-items: center;
                    padding: 9rem 5% 6rem;
                    /* Ensure nav bar sits on top */
                    z-index: 1; 
                }

                /* ── BACKGROUND ── */
                .hero-background {
                    position: absolute;
                    inset: 0;
                    z-index: -1;
                    overflow: hidden;
                }
                
                .hero-bg-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%);
                }

                /* ── CONTENT ── */
                .hero-content-wrapper {
                    max-width: 1280px;
                    margin: 0 auto;
                    width: 100%;
                }
                
                .hero-content {
                    max-width: 650px;
                }

                .hero-overline-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: white;
                    padding: 6px 16px;
                    border-radius: 100px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 2rem;
                }
                
                .overline-icon {
                    font-size: 1.2rem;
                    line-height: 1;
                    margin-bottom: 2px;
                }

                .hero-title {
                    font-size: clamp(3rem, 5vw, 4.5rem);
                    margin-bottom: 1.5rem;
                    color: white;
                    line-height: 1.1;
                    font-family: 'Plus Jakarta Sans', serif; /* Or EB Garamond if you prefer serif */
                    font-weight: 700;
                }
                
                .hero-description {
                    font-size: 1.1rem;
                    color: rgba(255, 255, 255, 0.85);
                    margin-bottom: 3rem;
                    line-height: 1.6;
                    font-weight: 400;
                }

                /* ── CTA BUTTONS ── */
                .hero-cta-group {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                
                .btn-solid-green {
                    background: #002208;
                    color: white;
                    padding: 1rem 2.2rem;
                    border-radius: 100px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: 1px solid #002208;
                }
                
                .btn-solid-green:hover {
                    background: #013a13;
                    transform: translateY(-2px);
                }
                
                .btn-outline-glass {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    padding: 1rem 2.2rem;
                    border-radius: 100px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .btn-outline-glass:hover {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: rgba(255, 255, 255, 0.5);
                    transform: translateY(-2px);
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }
                    .hero-content {
                        margin-top: 2rem;
                    }
                    .hero-overlay {
                        background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%);
                    }
                }
            `}</style>
        </section>
    )
}

export default WorkSlideShow
